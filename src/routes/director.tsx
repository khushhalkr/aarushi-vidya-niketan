import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { IMAGES } from "@/components/site/data";

const title = "Director's Message - AARUSHI VIDYA NIKETAN";
const description = "Read the inspiring message from Director Mr. S.K Pathak about building future leaders through quality education.";

export const Route = createFileRoute("/director")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Director,
});

function Director() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-green-gradient py-16 text-secondary-foreground sm:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase sm:text-sm">
              Leadership
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold sm:mt-6 sm:text-[clamp(2.4rem,6vw,4.4rem)]">
              Director's Message
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Building Future Leaders Through Quality Education
            </p>
          </div>
        </section>

        {/* Director Message */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12 lg:mt-12">
              <div className="relative mx-auto w-full max-w-sm">
                <img
                  src={IMAGES.director}
                  alt="Director Mr. S.K Pathak"
                  loading="lazy"
                  className="w-full rounded-2xl object-cover shadow-card"
                />
                <div className="bg-gold-gradient absolute -right-4 -bottom-6 rounded-xl px-5 py-3 text-center text-primary-foreground shadow-card">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-xs font-bold">Years of Educational Excellence</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-green-deep sm:text-2xl">
                  Building Future Leaders Through Quality Education
                </h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  At AARUSHI VIDYA NIKETAN, education is more than academics. It is about
                  nurturing confident minds, developing strong character, and inspiring young learners to
                  become responsible citizens who contribute positively to society.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We remain committed to providing a safe, innovative, and inspiring learning environment
                  where every student discovers their true potential.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
                    Academic Excellence
                  </span>
                  <span className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
                    Leadership
                  </span>
                  <span className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
                    Innovation
                  </span>
                </div>
                <p className="mt-8 text-lg font-bold text-green-deep">Mr. S.K Pathak</p>
                <p className="text-sm text-muted-foreground">
                  Director, AARUSHI VIDYA NIKETAN
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Our Values</p>
            <h2 className="section-title mt-4">Core Principles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Excellence</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Striving for the highest standards in everything we do
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Integrity</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Building trust through honesty and ethical behavior
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Innovation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Embracing new ideas and creative solutions
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
