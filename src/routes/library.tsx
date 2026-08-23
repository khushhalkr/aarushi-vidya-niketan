import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { BookOpen, Bookmark, Search, Users, Clock, Globe } from "lucide-react";

const title = "Library - AARUSHI VIDYA NIKETAN";
const description = "Explore our well-stocked library with vast collection of books, digital resources, and reading programs for students.";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Library,
});

function Library() {
  const features = [
    {
      icon: BookOpen,
      title: "Vast Collection",
      description: "Thousands of books covering various subjects, genres, and reading levels for all age groups."
    },
    {
      icon: Bookmark,
      title: "Digital Resources",
      description: "E-books, online journals, and digital databases accessible through modern library systems."
    },
    {
      icon: Search,
      title: "Easy Access",
      description: "Computerized catalog system for quick and efficient book search and retrieval."
    },
    {
      icon: Users,
      title: "Reading Programs",
      description: "Regular reading sessions, book clubs, and literary activities to promote reading culture."
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Convenient timings allowing students to access library resources beyond school hours."
    },
    {
      icon: Globe,
      title: "Reference Section",
      description: "Comprehensive reference materials, encyclopedias, and academic journals for research."
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
              School Library
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              A gateway to knowledge, imagination, and lifelong learning
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Knowledge Hub</p>
            <h2 className="section-title mt-4">Our Library</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our school library is a vibrant space that fosters a love for reading and learning. With a vast
              collection of books, digital resources, and comfortable reading areas, it serves as the
              intellectual heart of our institution where students explore, discover, and grow.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Features</p>
              <h2 className="section-title mt-4">Library Highlights</h2>
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

        {/* Collection */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <p className="eyebrow">Our Collection</p>
              <h2 className="section-title mt-4">Books & Resources</h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Academic Books</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Textbooks, reference materials, and study guides for all subjects and grade levels.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Fiction & Literature</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Classic and contemporary novels, poetry, and literary works in multiple languages.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Magazines & Journals</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Current periodicals, educational magazines, and subject-specific journals.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Digital Resources</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  E-books, online databases, and multimedia learning materials.
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
