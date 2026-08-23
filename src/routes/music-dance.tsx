import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Music, Guitar, Piano, Drum, Mic, Sparkles } from "lucide-react";

const title = "Music & Dance - AARUSHI VIDYA NIKETAN";
const description = "Discover our music and dance facilities with trained instructors, various instruments, and cultural performance opportunities.";

export const Route = createFileRoute("/music-dance")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MusicDance,
});

function MusicDance() {
  const facilities = [
    {
      icon: Piano,
      title: "Music Room",
      description: "Well-equipped music room with various instruments and soundproofing for practice."
    },
    {
      icon: Guitar,
      title: "Instrument Training",
      description: "Training in keyboard, guitar, tabla, drums, and other musical instruments."
    },
    {
      icon: Mic,
      title: "Vocal Training",
      description: "Professional vocal coaching for classical and contemporary singing styles."
    },
    {
      icon: Sparkles,
      title: "Dance Studio",
      description: "Spacious dance studio with mirrors, sound system, and proper flooring."
    },
    {
      icon: Music,
      title: "Classical Dance",
      description: "Training in traditional Indian dance forms like Kathak, Bharatanatyam, and folk dances."
    },
    {
      icon: Drum,
      title: "Western Dance",
      description: "Contemporary dance styles including hip-hop, jazz, and modern dance."
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
              Music & Dance
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Nurturing artistic talent and cultural expression through music and dance
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Arts Education</p>
            <h2 className="section-title mt-4">Cultural Excellence</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We believe in nurturing the artistic talents of our students through comprehensive
              music and dance programs. Our facilities and trained instructors provide students
              with opportunities to explore various forms of artistic expression.
            </p>
          </div>
        </section>

        {/* Facilities */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Our Facilities</p>
              <h2 className="section-title mt-4">Music & Dance Infrastructure</h2>
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
            <h2 className="section-title mt-4">Why Arts Matter</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Creative Expression</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Develop artistic skills and self-expression
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Cultural Appreciation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn traditional and contemporary arts
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Confidence Building</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Stage performances and public speaking
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
