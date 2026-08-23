import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { IMAGES, SITE } from "@/components/site/data";
import { Intro, AboutSchool, Principal, Chairman, Director, Aim } from "@/components/site/Sections";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";

const title = `About Us - ${SITE.name}`;
const description = `Learn about ${SITE.name}, our mission, vision, leadership team and educational philosophy at ${SITE.address}.`;

export const Route = createFileRoute("/about")({
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
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Intro />
        <AboutSchool />
        <Principal />
        <Chairman />
        <Director />
        <Aim />
      </main>
      <div id="footer">
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
