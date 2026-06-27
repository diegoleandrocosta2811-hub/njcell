import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import {
  emptyTrackingSettings,
  normalizeTrackingInput,
  type TrackingSettings,
  type TrackingSettingsInput,
} from "./types";

const STORE_KEY = "njcell:tracking-settings";
const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "tracking.json");

function getRedisEnv():
  | { url: string; token: string }
  | null {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    return null;
  }

  return { url, token };
}

function isNetlifyRuntime(): boolean {
  return Boolean(process.env.NETLIFY || process.env.NETLIFY_BLOBS_CONTEXT);
}

async function readFromFile(): Promise<TrackingSettings> {
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    return { ...emptyTrackingSettings(), ...JSON.parse(raw) };
  } catch {
    return emptyTrackingSettings();
  }
}

async function writeToFile(settings: TrackingSettings): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(settings, null, 2), "utf8");
}

async function getRedisClient() {
  const env = getRedisEnv();

  if (!env) {
    throw new Error("Redis não configurado.");
  }

  const { Redis } = await import("@upstash/redis");
  return new Redis(env);
}

async function readFromRedis(): Promise<TrackingSettings> {
  const redis = await getRedisClient();
  const settings = await redis.get<TrackingSettings>(STORE_KEY);

  if (!settings || typeof settings !== "object") {
    return emptyTrackingSettings();
  }

  return { ...emptyTrackingSettings(), ...settings };
}

async function writeToRedis(settings: TrackingSettings): Promise<void> {
  const redis = await getRedisClient();
  await redis.set(STORE_KEY, settings);
}

async function readFromNetlifyBlobs(): Promise<TrackingSettings> {
  const { getStore } = await import("@netlify/blobs");
  const store = getStore("njcell-admin");
  const settings = await store.get("tracking-settings", { type: "json" });

  if (!settings || typeof settings !== "object") {
    return emptyTrackingSettings();
  }

  return { ...emptyTrackingSettings(), ...settings };
}

async function writeToNetlifyBlobs(settings: TrackingSettings): Promise<void> {
  const { getStore } = await import("@netlify/blobs");
  const store = getStore("njcell-admin");
  await store.setJSON("tracking-settings", settings);
}

export async function getTrackingSettings(): Promise<TrackingSettings> {
  if (getRedisEnv()) {
    return readFromRedis();
  }

  if (isNetlifyRuntime()) {
    return readFromNetlifyBlobs();
  }

  return readFromFile();
}

export async function saveTrackingSettings(
  input: TrackingSettingsInput,
): Promise<TrackingSettings> {
  const settings = normalizeTrackingInput(input);

  if (getRedisEnv()) {
    await writeToRedis(settings);
    return settings;
  }

  if (isNetlifyRuntime()) {
    await writeToNetlifyBlobs(settings);
    return settings;
  }

  await writeToFile(settings);
  return settings;
}
