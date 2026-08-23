import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Building2, Trees, Car, ShieldCheck, Wifi, Coffee } from "lucide-react";

const title = "Campus - AARUSHI VIDYA NIKETAN";
const description = "Explore our beautiful and modern campus with state-of-the-art infrastructure, green spaces, and student-friendly facilities.";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Campus,
});

function Campus() {
  const features = [
    {
      icon: Building2,
      title: "Modern Architecture",
      description: "Contemporary building design with spacious classrooms and common areas."
    },
    {
      icon: Trees,
      title: "Green Campus",
      description: "Lush greenery and landscaped gardens for a refreshing environment."
    },
    {
      icon: Car,
      title: "Ample Parking",
      description: "Dedicated parking area for staff and visitors with proper security."
    },
    {
      icon: ShieldCheck,
      title: "Secure Environment",
      description: "24/7 security personnel and CCTV surveillance across the campus."
    },
    {
      icon: Wifi,
      title: "High-Speed Connectivity",
      description: "Campus-wide WiFi for seamless digital learning and communication."
    },
    {
      icon: Coffee,
      title: "Recreation Areas",
      description: "Designated spaces for relaxation, social interaction, and refreshments."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-green-gradient py-16 text-secondary-foreground sm:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase sm:text-sm">
              Gallery
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold sm:mt-6 sm:text-[clamp(2.4rem,6vw,4.4rem)]">
              Our Campus
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              A modern, safe, and inspiring learning environment
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Infrastructure</p>
            <h2 className="section-title mt-4">Campus Overview</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our campus is designed to provide a conducive learning environment with modern
              infrastructure, green spaces, and student-friendly facilities. Every aspect of our
              campus is thoughtfully planned to support academic excellence and holistic development.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Campus Features</p>
              <h2 className="section-title mt-4">What We Offer</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                  >
                    <Icon className="h-8 w-8 text-gold-deep" />
                    <h3 className="mt-4 text-lg font-bold text-green-deep">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Visual Tour</p>
            <h2 className="section-title mt-4">Campus Gallery</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Take a virtual tour of our beautiful campus through our photo gallery showcasing
              our facilities, classrooms, and outdoor spaces.
            </p>
          </div>
        </section>
      </main>
      <div id="footer">
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
