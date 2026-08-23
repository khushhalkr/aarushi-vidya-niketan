import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { IMAGES, SITE } from "@/components/site/data";
import { Gallery } from "@/components/site/Sections";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";

const title = `Gallery - ${SITE.name}`;
const description = `Photo gallery of ${SITE.name} campus, classrooms, labs, activities and events at ${SITE.address}.`;

export const Route = createFileRoute("/gallery")({
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
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-accent/40 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="eyebrow">Our Campus in Pictures</p>
            <h2 className="section-title mt-4">School Gallery</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Explore our classrooms, laboratories, library, activity rooms and lush green campus.
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
