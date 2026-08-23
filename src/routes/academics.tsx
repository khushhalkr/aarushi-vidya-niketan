import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { IMAGES, SITE } from "@/components/site/data";
import { Gallery } from "@/components/site/Sections";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";

const title = `Academics - ${SITE.name}`;
const description = `Explore the academic programs, smart classes, science labs, computer lab, library and mathematics lab at ${SITE.name}.`;

export const Route = createFileRoute("/academics")({
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
  component: Academics,
});

function Academics() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-accent/40 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="eyebrow">Academic Excellence</p>
            <h2 className="section-title mt-4">Our Academic Programs</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Discover our comprehensive academic facilities including smart classrooms, modern laboratories,
              and a well-stocked library designed to support holistic learning.
            </p>
          </div>
        </div>
        <Gallery />
      </main>
      <div id="footer">
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
