import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { MonitorSmartphone, Wifi, Video, Users, Zap, Award } from "lucide-react";

const title = "Smart Classes - AARUSHI VIDYA NIKETAN";
const description = "Discover our state-of-the-art smart classrooms with digital learning technology and interactive teaching methods.";

export const Route = createFileRoute("/smart-classes")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SmartClasses,
});

function SmartClasses() {
  const features = [
    {
      icon: MonitorSmartphone,
      title: "Interactive Displays",
      description: "High-resolution smart boards and digital displays for immersive learning experiences."
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Seamless connectivity for accessing digital resources and online learning platforms."
    },
    {
      icon: Video,
      title: "Multimedia Content",
      description: "Rich audio-visual content including educational videos, animations, and simulations."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Tools and platforms that enable group work and interactive student participation."
    },
    {
      icon: Zap,
      title: "Real-Time Assessment",
      description: "Digital assessment tools for instant feedback and progress tracking."
    },
    {
      icon: Award,
      title: "Modern Pedagogy",
      description: "Innovative teaching methods enhanced by technology for better understanding."
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
              Smart Classes
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Transforming education through technology-enabled learning environments
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Digital Learning</p>
            <h2 className="section-title mt-4">Technology-Enhanced Education</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our smart classrooms are equipped with cutting-edge technology that transforms traditional
              teaching into an interactive, engaging, and effective learning experience. Students benefit
              from visual learning, real-time assessments, and access to vast digital resources.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Features</p>
              <h2 className="section-title mt-4">What Makes Our Smart Classes Special</h2>
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
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <p className="eyebrow">Benefits</p>
              <h2 className="section-title mt-4">Advantages for Students</h2>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-deep">Enhanced Understanding</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Visual and interactive content helps students grasp complex concepts more easily.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-deep">Increased Engagement</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Interactive elements keep students actively involved in the learning process.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-deep">Personalized Learning</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Digital tools allow teachers to cater to different learning styles and paces.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-primary-foreground font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-deep">Future-Ready Skills</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Students develop digital literacy and technology skills essential for the modern world.
                  </p>
                </div>
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
