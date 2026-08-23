import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Monitor, FlaskConical, BookOpen, Calculator, Projector, AirVent } from "lucide-react";

const title = "Classrooms & Labs - AARUSHI VIDYA NIKETAN";
const description="Explore our modern classrooms and well-equipped laboratories designed for effective learning and practical education.";

export const Route = createFileRoute("/classrooms-labs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ClassroomsLabs,
});

function ClassroomsLabs() {
  const facilities = [
    {
      icon: Monitor,
      title: "Smart Classrooms",
      description: "Digital displays, projectors, and interactive learning tools for modern education."
    },
    {
      icon: Projector,
      title: "Multimedia Systems",
      description: "Audio-visual equipment for enhanced teaching and learning experiences."
    },
    {
      icon: AirVent,
      title: "Climate Control",
      description: "Air-conditioned classrooms for comfortable learning environment."
    },
    {
      icon: FlaskConical,
      title: "Science Labs",
      description: "Physics, Chemistry, and Biology labs with modern equipment and safety measures."
    },
    {
      icon: Calculator,
      title: "Mathematics Lab",
      description: "Hands-on learning tools and geometric models for practical math education."
    },
    {
      icon: BookOpen,
      title: "Resource Center",
      description: "Well-stocked library and digital resources for research and self-study."
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
              Classrooms & Labs
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Modern learning spaces designed for academic excellence
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Learning Spaces</p>
            <h2 className="section-title mt-4">Our Facilities</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our classrooms and laboratories are designed to create an optimal learning environment.
              With modern technology, comfortable seating, and specialized equipment, we ensure
              every student has access to the best resources for their education.
            </p>
          </div>
        </section>

        {/* Facilities */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">What We Have</p>
              <h2 className="section-title mt-4">Classroom & Lab Features</h2>
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

        {/* Benefits */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Benefits</p>
            <h2 className="section-title mt-4">Why Our Learning Spaces Matter</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Enhanced Learning</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Technology aids better understanding
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Comfort</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Climate-controlled environment
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Practical Skills</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hands-on lab experiences
                </p>
              </div>
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
