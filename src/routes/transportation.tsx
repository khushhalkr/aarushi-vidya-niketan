import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Bus, ShieldCheck, MapPin, Clock, Users, Phone } from "lucide-react";

const title = "Transportation - AARUSHI VIDYA NIKETAN";
const description = "Learn about our safe and reliable school transportation service with GPS tracking, trained drivers, and comprehensive safety measures.";

export const Route = createFileRoute("/transportation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Transportation,
});

function Transportation() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Safety First",
      description: "GPS-enabled buses with speed monitoring and safety belts for every student."
    },
    {
      icon: Users,
      title: "Trained Staff",
      description: "Experienced drivers and attendants trained in child safety and emergency protocols."
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Extensive route network covering major areas of the city and surrounding regions."
    },
    {
      icon: Clock,
      title: "Punctual Service",
      description: "Timely pickup and drop with real-time tracking for parents' peace of mind."
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Dedicated helpline for transportation queries and emergency assistance."
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
              Facilities
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold sm:mt-6 sm:text-[clamp(2.4rem,6vw,4.4rem)]">
              School Transportation
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Safe, reliable, and convenient transport service for your child
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Safe Commute</p>
            <h2 className="section-title mt-4">Our Transport Service</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We understand the importance of safe and reliable school transportation. Our fleet of
              modern buses is equipped with safety features and manned by trained staff to ensure
              your child reaches school and home safely and on time.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Why Choose Us</p>
              <h2 className="section-title mt-4">Transport Features</h2>
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

        {/* Safety Measures */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <p className="eyebrow">Safety Measures</p>
              <h2 className="section-title mt-4">Your Child's Safety is Our Priority</h2>
            </div>
            <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                  <span className="text-sm text-muted-foreground">GPS tracking system in all buses for real-time monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                  <span className="text-sm text-muted-foreground">Speed governors installed to control vehicle speed</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                  <span className="text-sm text-muted-foreground">First aid kits and fire extinguishers in every bus</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                  <span className="text-sm text-muted-foreground">Regular vehicle maintenance and safety inspections</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                  <span className="text-sm text-muted-foreground">Trained lady attendants for younger students</span>
                </li>
              </ul>
            </div>
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
