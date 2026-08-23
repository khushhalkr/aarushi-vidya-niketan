import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Sparkles, Music, Users, Star, Activity, Heart } from "lucide-react";

const title = "Dance / Activity Room - AARUSHI VIDYA NIKETAN";
const description="Discover our dance and activity room with spacious facilities for dance practice, cultural activities, and student performances.";

export const Route = createFileRoute("/dance-activity-room")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DanceActivityRoom,
});

function DanceActivityRoom() {
  const features = [
    {
      icon: Sparkles,
      title: "Spacious Studio",
      description: "Large dance studio with mirrors and proper flooring for various dance forms."
    },
    {
      icon: Music,
      title: "Sound System",
      description: "Professional audio equipment for music and dance practice sessions."
    },
    {
      icon: Activity,
      title: "Classical Dance",
      description: "Training in traditional Indian dance forms like Kathak and Bharatanatyam."
    },
    {
      icon: Star,
      title: "Western Dance",
      description: "Contemporary dance styles including hip-hop, jazz, and modern dance."
    },
    {
      icon: Users,
      title: "Group Activities",
      description: "Space for group rehearsals, cultural programs, and team activities."
    },
    {
      icon: Heart,
      title: "Performance Stage",
      description: "Mini stage for practice performances and informal showcases."
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
              Extra Curriculum
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold sm:mt-6 sm:text-[clamp(2.4rem,6vw,4.4rem)]">
              Dance / Activity Room
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              A space where movement meets expression and creativity flows freely
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Dance Education</p>
            <h2 className="section-title mt-4">Our Dance Facility</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our dance and activity room is designed to nurture artistic expression through movement.
              With professional flooring, mirrors, and sound systems, students receive comprehensive
              training in both classical and contemporary dance forms.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">What We Offer</p>
              <h2 className="section-title mt-4">Dance Programs</h2>
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

        {/* Benefits */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Benefits</p>
            <h2 className="section-title mt-4">Why Dance Education Matters</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Physical Fitness</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Improves flexibility and coordination
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Cultural Appreciation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn traditional art forms
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Confidence</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Stage presence and self-expression
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
