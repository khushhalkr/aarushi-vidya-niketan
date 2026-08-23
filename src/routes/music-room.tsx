import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Music, Piano, Guitar, Drum, Mic, Headphones } from "lucide-react";

const title = "Music Room - AARUSHI VIDYA NIKETAN";
const description="Explore our well-equipped music room with various instruments, soundproofing, and professional training for students.";

export const Route = createFileRoute("/music-room")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MusicRoom,
});

function MusicRoom() {
  const features = [
    {
      icon: Piano,
      title: "Keyboard Training",
      description: "Professional keyboard and piano lessons for beginners to advanced students."
    },
    {
      icon: Guitar,
      title: "String Instruments",
      description: "Training in guitar, violin, and other string instruments."
    },
    {
      icon: Drum,
      title: "Percussion Instruments",
      description: "Tabla, drums, and other percussion instrument training."
    },
    {
      icon: Mic,
      title: "Vocal Training",
      description: "Classical and contemporary singing lessons with expert instructors."
    },
    {
      icon: Headphones,
      title: "Sound Equipment",
      description: "Professional sound systems and recording equipment for practice."
    },
    {
      icon: Music,
      title: "Music Theory",
      description: "Comprehensive music theory and composition classes."
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
              Music Room
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Where melodies come alive and talents find their rhythm
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Musical Education</p>
            <h2 className="section-title mt-4">Our Music Facility</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our music room is a dedicated space for nurturing musical talent. Equipped with various
              instruments and soundproofing, it provides the perfect environment for students to learn,
              practice, and explore their musical abilities under expert guidance.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">What We Offer</p>
              <h2 className="section-title mt-4">Music Programs</h2>
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
            <h2 className="section-title mt-4">Why Music Education Matters</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Cognitive Development</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enhances brain function and memory
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Discipline</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Builds focus and dedication
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Expression</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Creative outlet for emotions
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
