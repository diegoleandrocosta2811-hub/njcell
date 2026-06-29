import { existsSync, readFileSync } from "fs";
import path from "path";
import {
  emptyTrackingSettings,
  hasActiveTracking,
  type TrackingSettings,
} from "./types";

/** Leitura síncrona — evita dynamic rendering no layout e melhora TTFB. */
export function getPublicTrackingSettings(): TrackingSettings {
  const fromEnv: TrackingSettings = {
    ...emptyTrackingSettings(),
    gtmId: process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "",
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID?.trim() ?? "",
    fbPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID?.trim() ?? "",
  };

  if (hasActiveTracking(fromEnv)) {
    return fromEnv;
  }

  const filePath = path.join(process.cwd(), "data", "tracking.json");
  if (existsSync(filePath)) {
    try {
      const parsed = JSON.parse(readFileSync(filePath, "utf8")) as Partial<
        TrackingSettings
      >;
      const fromFile: TrackingSettings = {
        ...emptyTrackingSettings(),
        ...parsed,
      };

      if (hasActiveTracking(fromFile)) {
        return fromFile;
      }
    } catch {
      // arquivo inválido — ignora
    }
  }

  return emptyTrackingSettings();
}
