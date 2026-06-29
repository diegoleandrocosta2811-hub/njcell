import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import TrackingScripts from "@/components/TrackingScripts";
import WhatsAppButton from "@/components/WhatsAppButton";

export const revalidate = 86_400;

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <WhatsAppButton variant="floating" label="Falar no WhatsApp" />
      <TrackingScripts />
    </>
  );
}
