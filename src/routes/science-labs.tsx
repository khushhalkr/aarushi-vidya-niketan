import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { FlaskConical, Microscope, Beaker, TestTube, Atom, ShieldCheck } from "lucide-react";

const title = "Science Labs - AARUSHI VIDYA NIKETAN";
const description = "Explore our well-equipped science laboratories for physics, chemistry, and biology with modern equipment and safety measures.";

export const Route = createFileRoute("/science-labs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ScienceLabs,
});

function ScienceLabs() {
  const labs = [
    {
      icon: Atom,
      title: "Physics Lab",
      description: "Well-equipped with apparatus for mechanics, optics, electricity, and modern physics experiments."
    },
    {
      icon: FlaskConical,
      title: "Chemistry Lab",
      description: "Modern facilities with fume hoods, safety equipment, and comprehensive chemical supplies."
    },
    {
      icon: Microscope,
      title: "Biology Lab",
      description: "Advanced microscopes, specimens, and equipment for biological studies and research."
    }
  ];

  const features = [
    {
      icon: Beaker,
      title: "Modern Equipment",
      description: "State-of-the-art instruments and apparatus for accurate experimental results."
    },
    {
      icon: TestTube,
      title: "Hands-On Learning",
      description: "Practical experiments that reinforce theoretical knowledge and scientific concepts."
    },
    {
      icon: ShieldCheck,
      title: "Safety First",
      description: "Comprehensive safety measures, protective gear, and trained lab assistants."
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
              Academics
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold sm:mt-6 sm:text-[clamp(2.4rem,6vw,4.4rem)]">
              Science Laboratories
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Exploring the wonders of science through hands-on experimentation and discovery
            </p>
          </div>
        </section>

        {/* Labs Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Our Facilities</p>
              <h2 className="section-title mt-4">Specialized Science Labs</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {labs.map((lab, index) => {
                const Icon = lab.icon;
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                  >
                    <Icon className="h-8 w-8 text-gold-deep" />
                    <h3 className="mt-4 text-lg font-bold text-green-deep">{lab.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {lab.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Why Our Labs</p>
              <h2 className="section-title mt-4">Features & Benefits</h2>
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

        {/* Learning Approach */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Our Approach</p>
            <h2 className="section-title mt-4">Experiential Learning</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our science laboratories are designed to foster curiosity, critical thinking, and scientific
              temperament. Students conduct experiments under expert guidance, developing practical skills
              that complement their theoretical knowledge. The labs are regularly updated with the latest
              equipment to ensure students work with modern technology.
            </p>
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
