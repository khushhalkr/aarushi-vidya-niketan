import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Monitor, Keyboard, MousePointer2, Wifi, HardDrive, Globe } from "lucide-react";

const title = "Computer Lab - AARUSHI VIDYA NIKETAN";
const description = "Discover our modern computer laboratory with latest systems, high-speed internet, and comprehensive IT education.";

export const Route = createFileRoute("/computer-lab")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ComputerLab,
});

function ComputerLab() {
  const features = [
    {
      icon: Monitor,
      title: "Modern Systems",
      description: "Latest computers with high-performance processors and large displays for optimal learning."
    },
    {
      icon: Keyboard,
      title: "Individual Workstations",
      description: "One-to-one computer ratio ensuring every student gets hands-on experience."
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Fast and reliable connectivity for research, online learning, and digital resources."
    },
    {
      icon: HardDrive,
      title: "Latest Software",
      description: "Comprehensive software suite including programming tools, office applications, and educational software."
    },
    {
      icon: MousePointer2,
      title: "Practical Training",
      description: "Regular practical sessions to develop computer skills and digital literacy."
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Access to global educational resources and collaborative learning platforms."
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
              Computer Laboratory
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Empowering students with digital skills and computer literacy for the modern world
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">IT Education</p>
            <h2 className="section-title mt-4">State-of-the-Art Computing Facility</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our computer lab is equipped with the latest hardware and software to provide students with
              comprehensive IT education. From basic computer skills to advanced programming, we ensure
              every student develops the digital competency needed in today's technology-driven world.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Features</p>
              <h2 className="section-title mt-4">Lab Highlights</h2>
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

        {/* Curriculum */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <p className="eyebrow">What We Teach</p>
              <h2 className="section-title mt-4">Computer Curriculum</h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Basic Computing</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fundamentals of computer operations, file management, and digital literacy.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Programming</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Introduction to coding, algorithms, and problem-solving with modern languages.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Office Applications</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Word processing, spreadsheets, presentations, and digital documentation.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Internet Skills</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Safe internet usage, research skills, and online collaboration tools.
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
