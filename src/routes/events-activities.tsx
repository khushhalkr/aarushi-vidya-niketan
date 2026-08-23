import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Calendar, Trophy, Music, Palette, Users, Sparkles } from "lucide-react";

const title = "Events & Activities - AARUSHI VIDYA NIKETAN";
const description="Discover the exciting events and activities at AARUSHI VIDYA NIKETAN including annual functions, competitions, and celebrations.";

export const Route = createFileRoute("/events-activities")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EventsActivities,
});

function EventsActivities() {
  const events = [
    {
      icon: Trophy,
      title: "Annual Sports Day",
      description: "A grand celebration of sportsmanship with various athletic competitions and performances."
    },
    {
      icon: Music,
      title: "Annual Cultural Function",
      description: "Showcasing student talent through music, dance, drama, and cultural performances."
    },
    {
      icon: Palette,
      title: "Art & Craft Exhibition",
      description: "Displaying creative works of students including paintings, crafts, and sculptures."
    },
    {
      icon: Calendar,
      title: "Science Exhibition",
      description: "Students present innovative science projects and experiments."
    },
    {
      icon: Users,
      title: "Inter-House Competitions",
      description: "Regular competitions between houses to foster teamwork and healthy competition."
    },
    {
      icon: Sparkles,
      title: "Festival Celebrations",
      description: "Celebrating national festivals and cultural events with enthusiasm and learning."
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
              Events & Activities
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Celebrating learning through exciting events and engaging activities
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Beyond Academics</p>
            <h2 className="section-title mt-4">Our Event Calendar</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We organize a variety of events throughout the year to provide students with opportunities
              to showcase their talents, build confidence, and create lasting memories. From sports to
              cultural programs, every event is designed to foster holistic development.
            </p>
          </div>
        </section>

        {/* Events */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">What We Organize</p>
              <h2 className="section-title mt-4">Annual Events</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event, index) => {
                const Icon = event.icon;
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                  >
                    <Icon className="h-8 w-8 text-gold-deep" />
                    <h3 className="mt-4 text-lg font-bold text-green-deep">{event.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {event.description}
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
            <h2 className="section-title mt-4">Why Events Matter</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Confidence Building</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Stage presence and public speaking
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Teamwork</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Collaboration and group effort
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Memories</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cherished school experiences
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
