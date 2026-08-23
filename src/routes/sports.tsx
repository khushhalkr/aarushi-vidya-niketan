import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Trophy, Circle, Target, Volleyball, Dumbbell, Activity } from "lucide-react";

const title = "Sports & Playground - AARUSHI VIDYA NIKETAN";
const description = "Explore our comprehensive sports facilities including playgrounds, courts, and equipment for various sports activities.";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Sports,
});

function Sports() {
  const facilities = [
    {
      icon: Circle,
      title: "Football Field",
      description: "Full-size football field with natural grass and professional equipment."
    },
    {
      icon: Target,
      title: "Basketball Court",
      description: "Indoor and outdoor basketball courts with proper flooring and hoops."
    },
    {
      icon: Volleyball,
      title: "Volleyball Court",
      description: "Standard volleyball courts for practice and competitive play."
    },
    {
      icon: Activity,
      title: "Cricket Pitch",
      description: "Practice nets and cricket pitch with bowling machine facility."
    },
    {
      icon: Dumbbell,
      title: "Gymnasium",
      description: "Well-equipped gym with modern fitness equipment for students."
    },
    {
      icon: Trophy,
      title: "Sports Training",
      description: "Professional coaching for various sports and athletic development."
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
              Sports & Playground
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Nurturing physical fitness and sportsmanship through comprehensive sports facilities
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Physical Education</p>
            <h2 className="section-title mt-4">Sports Excellence</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We believe in the holistic development of students, and sports play a crucial role in
              building character, teamwork, and physical fitness. Our extensive sports facilities
              provide students with opportunities to explore and excel in various sports.
            </p>
          </div>
        </section>

        {/* Facilities */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Our Facilities</p>
              <h2 className="section-title mt-4">Sports Infrastructure</h2>
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
            <h2 className="section-title mt-4">Why Sports Matter</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Physical Fitness</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Build strength, stamina, and overall health
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Teamwork</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn collaboration and sportsmanship
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Discipline</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Develop focus, dedication, and self-control
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
