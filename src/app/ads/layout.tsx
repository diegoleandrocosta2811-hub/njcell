import type { Metadata } from "next";
import TrackingScripts from "@/components/TrackingScripts";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <TrackingScripts />
    </>
  );
}
