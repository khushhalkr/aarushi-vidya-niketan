import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { IMAGES, WHY_CARDS } from "@/components/site/data";
import { Users, Award, Building2, Sparkles, BookOpen } from "lucide-react";

const title = "Our School - AARUSHI VIDYA NIKETAN";
const description = "Learn about AARUSHI VIDYA NIKETAN's mission, values, and commitment to excellence in education at Semara Ramnagar.";

export const Route = createFileRoute("/our-school")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: OurSchool,
});

const WHY_ICONS = [Users, Award, Building2, Sparkles];

function OurSchool() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-green-gradient py-16 text-secondary-foreground sm:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase sm:text-sm">
              About Us
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold sm:mt-6 sm:text-[clamp(2.4rem,6vw,4.4rem)]">
              Our School
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              AARUSHI VIDYA NIKETAN provides state-of-the-art infrastructure designed to
              support high-quality education and holistic student development.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="section-title">
                  AARUSHI VIDYA NIKETAN
                  <br />
                  <span className="text-gold-deep">Semara Ramnagar</span>
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  AARUSHI VIDYA NIKETAN provides state-of-the-art infrastructure designed to
                  support high-quality education and holistic student development. The school strongly
                  emphasizes moral values, discipline, and human ethics while nurturing students' overall
                  personality growth alongside academic excellence.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Our commitment to excellence extends beyond the classroom. We believe in creating
                  an environment where every child can discover their unique talents and develop the
                  confidence to pursue their dreams.
                </p>
              </div>

              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                {WHY_CARDS.map((c, i) => {
                  const Icon = WHY_ICONS[i] ?? BookOpen;
                  return (
                    <article
                      key={c.title}
                      className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6"
                    >
                      <Icon className="h-7 w-7 text-gold-deep sm:h-8 sm:w-8" />
                      <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase sm:mt-5">
                        {c.eyebrow}
                      </p>
                      <h3 className="mt-1 text-base text-green-deep sm:text-lg">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Our Mission</p>
            <h2 className="section-title mt-4">Empowering Every Student</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              To provide a nurturing and inspiring learning environment where students develop
              academic excellence, strong character, and the skills needed to become responsible
              global citizens.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Academic Excellence</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Rigorous curriculum with innovative teaching methods
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Character Building</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Values-based education for holistic development
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Future Ready</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Skills for success in the modern world
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
