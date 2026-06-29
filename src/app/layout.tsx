import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import ResourceHints from "@/components/ResourceHints";
import { homeSeo, buildMetadata, defaultViewport } from "@/lib/seo";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = buildMetadata(homeSeo);
export const viewport: Viewport = defaultViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${openSans.variable} h-full`}>
      <head>
        <ResourceHints />
      </head>
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
