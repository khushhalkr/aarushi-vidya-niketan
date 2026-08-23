import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Palette, Brush, Scissors, PenTool, Image, Sparkles } from "lucide-react";

const title = "Art & Craft - AARUSHI VIDYA NIKETAN";
const description="Explore our art and craft facilities with creative workshops, various art forms, and hands-on learning experiences for students.";

export const Route = createFileRoute("/art-craft")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ArtCraft,
});

function ArtCraft() {
  const facilities = [
    {
      icon: Palette,
      title: "Art Studio",
      description: "Spacious art studio with natural light and ample workspace for creative projects."
    },
    {
      icon: Brush,
      title: "Painting",
      description: "Training in various painting styles including watercolor, oil, and acrylic painting."
    },
    {
      icon: Scissors,
      title: "Craft Work",
      description: "Hands-on craft activities including paper craft, clay modeling, and origami."
    },
    {
      icon: PenTool,
      title: "Sketching",
      description: "Drawing and sketching classes for developing artistic observation and skills."
    },
    {
      icon: Image,
      title: "Sculpture",
      description: "3D art and sculpture work using clay, paper mache, and other materials."
    },
    {
      icon: Sparkles,
      title: "Creative Workshops",
      description: "Regular workshops and competitions to nurture artistic talent and creativity."
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
              Art & Craft
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Fostering creativity and artistic expression through hands-on art education
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Creative Education</p>
            <h2 className="section-title mt-4">Artistic Excellence</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We believe in nurturing the creative potential of every student through comprehensive
              art and craft programs. Our facilities provide students with the space and resources
              to explore various forms of artistic expression and develop their creative skills.
            </p>
          </div>
        </section>

        {/* Facilities */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Our Facilities</p>
              <h2 className="section-title mt-4">Art & Craft Infrastructure</h2>
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
            <h2 className="section-title mt-4">Why Art Matters</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Fine Motor Skills</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Develop hand-eye coordination and dexterity
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Creativity</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enhance imagination and innovative thinking
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Self-Expression</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Build confidence through artistic creation
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
