import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { IMAGES, SITE, FACILITIES } from "@/components/site/data";
import { Facilities as FacilitiesSection, Care } from "@/components/site/Sections";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";

const title = `Facilities - ${SITE.name}`;
const description = `Explore the world-class facilities at ${SITE.name} including transportation, sports, music, dance, art and safety measures.`;

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://arya-clone-maker.lovable.app" + IMAGES.hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://arya-clone-maker.lovable.app" + IMAGES.hero },
    ],
  }),
  component: Facilities,
});

function Facilities() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-accent/40 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="eyebrow">World-Class Infrastructure</p>
            <h2 className="section-title mt-4">Our Facilities</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We provide a safe, modern and caring environment where your child learns, grows and
              succeeds with confidence.
            </p>
          </div>
        </div>
        <FacilitiesSection />
        <Care />
      </main>
      <div id="footer">
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
