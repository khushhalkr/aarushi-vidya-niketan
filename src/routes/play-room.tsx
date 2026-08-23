import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Puzzle, Blocks, Smile, Heart, Users, ShieldCheck } from "lucide-react";

const title = "Play Room - AARUSHI VIDYA NIKETAN";
const description="Explore our colorful and safe play room for young students with educational toys, games, and activities for early childhood development.";

export const Route = createFileRoute("/play-room")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PlayRoom,
});

function PlayRoom() {
  const features = [
    {
      icon: Blocks,
      title: "Educational Toys",
      description: "Age-appropriate toys that promote learning through play and exploration."
    },
    {
      icon: Puzzle,
      title: "Puzzles & Games",
      description: "Various puzzles and board games to develop problem-solving skills."
    },
    {
      icon: Smile,
      title: "Colorful Environment",
      description: "Bright, cheerful decor designed to stimulate young minds."
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      description: "Child-safe furniture, rounded edges, and constant supervision."
    },
    {
      icon: Users,
      title: "Social Interaction",
      description: "Space for group play and developing social skills with peers."
    },
    {
      icon: Heart,
      title: "Caring Staff",
      description: "Trained caregivers who nurture and guide young learners."
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
              Play Room
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              A magical space where learning meets fun for our youngest students
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Early Childhood</p>
            <h2 className="section-title mt-4">Our Play Facility</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our play room is specially designed for early childhood development. With educational
              toys, safe equipment, and a nurturing environment, it provides the perfect space for
              young children to learn, play, and grow under caring supervision.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">What We Offer</p>
              <h2 className="section-title mt-4">Play Room Features</h2>
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
            <h2 className="section-title mt-4">Why Play-Based Learning Matters</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Motor Skills</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Develops physical coordination
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Social Skills</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn sharing and cooperation
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Cognitive Growth</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enhances problem-solving abilities
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
