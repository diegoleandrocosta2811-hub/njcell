import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import {
  getSessionOptions,
  type AdminSession,
} from "@/lib/admin/session";
import { getTrackingSettings, saveTrackingSettings } from "@/lib/tracking/store";
import type { TrackingSettingsInput } from "@/lib/tracking/types";

async function requireAdminSession() {
  const session = await getIronSession<AdminSession>(
    await cookies(),
    getSessionOptions(),
  );

  if (!session.isLoggedIn) {
    return null;
  }

  return session;
}

export async function GET() {
  try {
    const session = await requireAdminSession();

    if (!session) {
      return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
    }

    const settings = await getTrackingSettings();

    return NextResponse.json({
      settings: {
        gtmId: settings.gtmId,
        ga4Id: settings.ga4Id,
        fbPixelId: settings.fbPixelId,
        fbAccessToken: settings.fbAccessToken ? "••••••••" : "",
        hasFbAccessToken: Boolean(settings.fbAccessToken),
        updatedAt: settings.updatedAt,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao carregar configurações.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await requireAdminSession();

    if (!session) {
      return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
    }

    const body = (await request.json()) as TrackingSettingsInput & {
      fbAccessToken?: string;
      clearFbAccessToken?: boolean;
    };

    const current = await getTrackingSettings();
    const input: TrackingSettingsInput = {
      gtmId: body.gtmId,
      ga4Id: body.ga4Id,
      fbPixelId: body.fbPixelId,
      fbAccessToken: body.clearFbAccessToken
        ? ""
        : body.fbAccessToken === "••••••••"
          ? current.fbAccessToken
          : body.fbAccessToken,
    };

    const settings = await saveTrackingSettings(input);

    return NextResponse.json({
      ok: true,
      settings: {
        gtmId: settings.gtmId,
        ga4Id: settings.ga4Id,
        fbPixelId: settings.fbPixelId,
        fbAccessToken: settings.fbAccessToken ? "••••••••" : "",
        hasFbAccessToken: Boolean(settings.fbAccessToken),
        updatedAt: settings.updatedAt,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao salvar configurações.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
