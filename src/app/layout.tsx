import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import TrackingScripts from "@/components/TrackingScripts";
import { homeSeo, buildMetadata } from "@/lib/seo";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = buildMetadata(homeSeo);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${openSans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <TrackingScripts />
        {children}
      </body>
    </html>
  );
}
