import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Calendar, Users, Trophy, Music, Palette, Sparkles } from "lucide-react";

const title = "Activities - AARUSHI VIDYA NIKETAN";
const description="Discover the wide range of co-curricular and extracurricular activities at AARUSHI VIDYA NIKETAN for holistic student development.";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Activities,
});

function Activities() {
  const activities = [
    {
      icon: Trophy,
      title: "Sports Competitions",
      description: "Inter-house and inter-school sports tournaments fostering teamwork and fitness."
    },
    {
      icon: Music,
      title: "Cultural Events",
      description: "Annual day celebrations, music concerts, and dance performances showcasing talent."
    },
    {
      icon: Palette,
      title: "Art Exhibitions",
      description: "Regular art and craft exhibitions displaying student creativity and artistic skills."
    },
    {
      icon: Calendar,
      title: "Educational Trips",
      description: "Field trips and excursions to enhance learning through real-world experiences."
    },
    {
      icon: Users,
      title: "Club Activities",
      description: "Various student clubs for science, literature, environment, and social service."
    },
    {
      icon: Sparkles,
      title: "Workshops",
      description: "Skill development workshops and seminars by experts in various fields."
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
              Activities
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Beyond academics: nurturing talents and building character
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Holistic Development</p>
            <h2 className="section-title mt-4">Our Activity Programs</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We believe in holistic development through diverse activities. Our comprehensive
              co-curricular and extracurricular programs help students discover their talents,
              build confidence, and develop essential life skills beyond the classroom.
            </p>
          </div>
        </section>

        {/* Activities */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">What We Offer</p>
              <h2 className="section-title mt-4">Student Activities</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                  >
                    <Icon className="h-8 w-8 text-gold-deep" />
                    <h3 className="mt-4 text-lg font-bold text-green-deep">{activity.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {activity.description}
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
            <h2 className="section-title mt-4">Why Activities Matter</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Skill Development</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Build diverse talents and abilities
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Social Skills</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn teamwork and collaboration
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Confidence</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Build self-esteem through achievements
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
