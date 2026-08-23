import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { ShieldCheck, Heart, Stethoscope, Users, Video, Lock } from "lucide-react";

const title = "Safety & Care - AARUSHI VIDYA NIKETAN";
const description="Learn about our comprehensive safety measures, healthcare facilities, and student care services at AARUSHI VIDYA NIKETAN.";

export const Route = createFileRoute("/safety-care")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SafetyCare,
});

function SafetyCare() {
  const facilities = [
    {
      icon: ShieldCheck,
      title: "24/7 Security",
      description: "Round-the-clock security personnel and CCTV surveillance across the campus."
    },
    {
      icon: Stethoscope,
      title: "Medical Room",
      description: "Well-equipped infirmary with trained nurse and first aid facilities."
    },
    {
      icon: Heart,
      title: "Health Checkups",
      description: "Regular health screenings and medical checkups for all students."
    },
    {
      icon: Video,
      title: "CCTV Monitoring",
      description: "Comprehensive camera coverage for enhanced safety and monitoring."
    },
    {
      icon: Lock,
      title: "Secure Access",
      description: "Controlled entry and exit points with visitor management system."
    },
    {
      icon: Users,
      title: "Counseling Support",
      description: "Professional counseling services for student well-being and guidance."
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
              Safety & Care
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Ensuring a safe, secure, and nurturing environment for every student
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Student Welfare</p>
            <h2 className="section-title mt-4">Our Commitment to Safety</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The safety and well-being of our students is our top priority. We have implemented
              comprehensive security measures, healthcare facilities, and support systems to ensure
              every child feels safe, cared for, and protected while at school.
            </p>
          </div>
        </section>

        {/* Facilities */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Our Measures</p>
              <h2 className="section-title mt-4">Safety & Care Facilities</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {facilities.map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                  >
                    <Icon className="h-8 w-8 text-gold-deep" />
                    <h3 className="mt-4 text-lg font-bold text-green-deep">{facility.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {facility.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Safety Protocols */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <p className="eyebrow">Our Protocols</p>
              <h2 className="section-title mt-4">Safety Procedures</h2>
            </div>
            <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                  <span className="text-sm text-muted-foreground">Emergency response drills conducted regularly</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                  <span className="text-sm text-muted-foreground">Background verification for all staff members</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                  <span className="text-sm text-muted-foreground">Fire safety equipment and evacuation plans in place</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                  <span className="text-sm text-muted-foreground">Parent communication system for emergencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                  <span className="text-sm text-muted-foreground">Anti-bullying policies and counseling support</span>
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
