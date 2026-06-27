export type TrackingSettings = {
  gtmId: string;
  ga4Id: string;
  fbPixelId: string;
  fbAccessToken: string;
  updatedAt: string | null;
};

export const emptyTrackingSettings = (): TrackingSettings => ({
  gtmId: "",
  ga4Id: "",
  fbPixelId: "",
  fbAccessToken: "",
  updatedAt: null,
});

export type TrackingSettingsInput = {
  gtmId?: string;
  ga4Id?: string;
  fbPixelId?: string;
  fbAccessToken?: string;
};

export function normalizeTrackingInput(
  input: TrackingSettingsInput,
): TrackingSettings {
  const trim = (value?: string) => (value ?? "").trim();

  return {
    gtmId: trim(input.gtmId),
    ga4Id: trim(input.ga4Id),
    fbPixelId: trim(input.fbPixelId),
    fbAccessToken: trim(input.fbAccessToken),
    updatedAt: new Date().toISOString(),
  };
}

export function hasActiveTracking(settings: TrackingSettings): boolean {
  return Boolean(
    settings.gtmId || settings.ga4Id || settings.fbPixelId,
  );
}
