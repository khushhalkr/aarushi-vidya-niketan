import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Header } from "@/components/site/Header";
import { IMAGES, SITE } from "@/components/site/data";
import { Hero } from "@/components/site/Hero";
import {
  Intro,
  InfoCenter,
  AboutSchool,
  Principal,
  Chairman,
  Director,
  Events,
  Care,
  Aim,
  Facilities,
  Gallery,
  Testimonials,
} from "@/components/site/Sections";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { EnquiryModal } from "@/components/site/EnquiryModal";

const title = `${SITE.name}, ${SITE.address}`;
const description =
  "CBSE school in Ramnagar, West Champaran offering academic excellence, experienced faculty, smart classrooms and holistic development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://arya-clone-maker.lovable.app" + IMAGES.hero,
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://arya-clone-maker.lovable.app" + IMAGES.hero,
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  useEffect(() => {
    // Auto-open enquiry modal after 3 seconds if not already submitted
    const hasSubmittedEnquiry = localStorage.getItem("enquirySubmitted");
    if (!hasSubmittedEnquiry) {
      const timer = setTimeout(() => {
        setEnquiryModalOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="intro"><Intro /></div>
        <div id="info"><InfoCenter /></div>
        <div id="about"><AboutSchool /></div>
        <div id="principal"><Principal /></div>
        <div id="chairman"><Chairman /></div>
        <div id="director"><Director /></div>
        <div id="events"><Events /></div>
        <div id="care"><Care /></div>
        <div id="aim"><Aim /></div>
        <div id="facilities"><Facilities /></div>
        <div id="gallery"><Gallery /></div>
        <div id="testimonials"><Testimonials /></div>
      </main>
      <div id="footer">
        <Footer />
      </div>
      <WhatsAppFloat />
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => {
          setEnquiryModalOpen(false);
          localStorage.setItem("enquirySubmitted", "true");
        }}
      />
    </div>
  );
}
