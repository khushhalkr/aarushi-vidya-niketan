import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Target, BookOpen, Heart, Users, Zap, Award } from "lucide-react";

const title = "Our Aim - AARUSHI VIDYA NIKETAN";
const description = "Discover AARUSHI VIDYA NIKETAN's aims and objectives for providing quality education and holistic development.";

export const Route = createFileRoute("/our-aim")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: OurAim,
});

function OurAim() {
  const aims = [
    {
      icon: Target,
      title: "Academic Excellence",
      description: "Provide high-quality education that meets international standards while preserving cultural values."
    },
    {
      icon: BookOpen,
      title: "Holistic Development",
      description: "Focus on the overall development of students including physical, mental, emotional, and spiritual growth."
    },
    {
      icon: Heart,
      title: "Character Building",
      description: "Instill strong moral values, ethics, and discipline to create responsible citizens."
    },
    {
      icon: Users,
      title: "Inclusive Education",
      description: "Create an inclusive environment where every student feels valued and supported."
    },
    {
      icon: Zap,
      title: "Innovation & Creativity",
      description: "Encourage innovative thinking and creative expression through modern teaching methods."
    },
    {
      icon: Award,
      title: "Future Readiness",
      description: "Prepare students with the skills and knowledge needed for success in the modern world."
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
              Our Purpose
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold sm:mt-6 sm:text-[clamp(2.4rem,6vw,4.4rem)]">
              Our Aim
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              To nurture young minds with knowledge, values, and skills for a brighter future
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Our Mission</p>
            <h2 className="section-title mt-4">Shaping the Future</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our aim is to provide a transformative educational experience that empowers students
              to become confident, compassionate, and capable individuals who contribute positively
              to society.
            </p>
          </div>
        </section>

        {/* Aims Grid */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">What We Strive For</p>
              <h2 className="section-title mt-4">Our Key Objectives</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aims.map((aim, index) => {
                const Icon = aim.icon;
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                  >
                    <Icon className="h-8 w-8 text-gold-deep" />
                    <h3 className="mt-4 text-lg font-bold text-green-deep">{aim.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {aim.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Looking Ahead</p>
            <h2 className="section-title mt-4">Our Vision</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              To be recognized as a center of educational excellence that produces well-rounded
              individuals who are academically strong, morally upright, and socially responsible.
            </p>
          </div>
        </section>

        {/* Commitment */}
        <section className="bg-green-gradient py-12 text-secondary-foreground sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Our Commitment</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              We are committed to providing an environment where every student can thrive,
              learn, and grow to their full potential. Our dedicated faculty, modern infrastructure,
              and innovative curriculum ensure that we deliver on our promise of excellence.
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
