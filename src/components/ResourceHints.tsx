import { WHATSAPP_URL } from "@/lib/company";
import { getPublicTrackingSettings } from "@/lib/tracking/public";
import { hasActiveTracking } from "@/lib/tracking/types";

const ALWAYS_PREFETCH = [
  "https://wa.me",
  "https://www.instagram.com",
] as const;

const TRACKING_PREFETCH = [
  "https://www.googletagmanager.com",
  "https://connect.facebook.net",
] as const;

export default function ResourceHints() {
  const trackingActive = hasActiveTracking(getPublicTrackingSettings());
  const prefetchHosts = trackingActive
    ? [...ALWAYS_PREFETCH, ...TRACKING_PREFETCH]
    : [...ALWAYS_PREFETCH];

  return (
    <>
      {prefetchHosts.map((href) => (
        <link key={href} rel="dns-prefetch" href={href} />
      ))}
      <link rel="dns-prefetch" href="https://maps.google.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="alternate"
        type="text/plain"
        href="/llms.txt"
        title="NJCELL — Documentação para IA"
      />
    </>
  );
}
