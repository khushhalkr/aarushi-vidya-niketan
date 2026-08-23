import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Calculator, Ruler, Compass, PieChart, Square, Infinity } from "lucide-react";

const title = "Mathematics Lab - AARUSHI VIDYA NIKETAN";
const description = "Discover our mathematics laboratory with hands-on learning tools, geometric models, and interactive math activities.";

export const Route = createFileRoute("/mathematics-lab")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MathematicsLab,
});

function MathematicsLab() {
  const features = [
    {
      icon: Calculator,
      title: "Mathematical Tools",
      description: "Advanced calculators, geometric instruments, and measuring tools for practical learning."
    },
    {
      icon: Ruler,
      title: "Geometric Models",
      description: "3D models and shapes that help visualize complex geometric concepts and theorems."
    },
    {
      icon: Compass,
      title: "Hands-On Activities",
      description: "Interactive experiments and activities that make abstract concepts concrete and understandable."
    },
    {
      icon: PieChart,
      title: "Data Analysis",
      description: "Tools for statistics, probability, and data representation through graphs and charts."
    },
    {
      icon: Square,
      title: "Problem Solving",
      description: "Puzzles, games, and challenges that develop logical thinking and problem-solving skills."
    },
    {
      icon: Infinity,
      title: "Concept Clarity",
      description: "Visual aids and manipulatives that build strong foundational understanding of mathematics."
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
              Mathematics Laboratory
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Making mathematics fun, interactive, and easy to understand through hands-on learning
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Math Education</p>
            <h2 className="section-title mt-4">Learning by Doing</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our mathematics lab transforms abstract mathematical concepts into tangible learning experiences.
              Through hands-on activities, models, and interactive tools, students develop a deep
              understanding of mathematical principles and build confidence in problem-solving.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Features</p>
              <h2 className="section-title mt-4">Lab Facilities</h2>
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
            <p className="eyebrow">Our Methodology</p>
            <h2 className="section-title mt-4">Activity-Based Learning</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We believe mathematics should be experienced, not just memorized. Our lab uses activity-based
              learning where students explore concepts through experiments, models, and real-world applications.
              This approach removes the fear of mathematics and develops a genuine interest and appreciation
              for the subject.
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
