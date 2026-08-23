import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { IMAGES, SITE, EVENTS } from "@/components/site/data";
import { Events, Gallery } from "@/components/site/Sections";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";

const title = `Extra Curriculum - ${SITE.name}`;
const description = `Extra-curricular activities, events, music, dance, art and sports at ${SITE.name} for holistic development.`;

export const Route = createFileRoute("/extra-curriculum")({
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
  component: ExtraCurriculum,
});

function ExtraCurriculum() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-accent/40 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="eyebrow">Beyond Academics</p>
            <h2 className="section-title mt-4">Extra Curriculum Activities</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every celebration, competition and cultural programme inspires our students to learn,
              lead and create unforgettable memories together.
            </p>
          </div>
        </div>
        <Events />
        <div className="bg-accent/40 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="eyebrow">Activity Rooms</p>
            <h2 className="section-title mt-4">Our Creative Spaces</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Dedicated rooms for music, dance, art and activities to nurture creativity and talent.
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
