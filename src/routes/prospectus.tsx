import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { BookOpen, Download, FileText, GraduationCap, Award, Users } from "lucide-react";

const title = "Prospectus - AARUSHI VIDYA NIKETAN";
const description = "Download the school prospectus to learn about AARUSHI VIDYA NIKETAN's curriculum, facilities, and admission information.";

export const Route = createFileRoute("/prospectus")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Prospectus,
});

function Prospectus() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Comprehensive CBSE curriculum with modern teaching methodologies."
    },
    {
      icon: Award,
      title: "Holistic Development",
      description: "Focus on physical, mental, and emotional growth of every student."
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Qualified and dedicated teachers committed to student success."
    },
    {
      icon: BookOpen,
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure including smart classrooms and labs."
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
              Admission
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold sm:mt-6 sm:text-[clamp(2.4rem,6vw,4.4rem)]">
              School Prospectus
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Your complete guide to AARUSHI VIDYA NIKETAN
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">About the Prospectus</p>
            <h2 className="section-title mt-4">Complete Information</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our school prospectus provides comprehensive information about our curriculum,
              facilities, admission process, fee structure, and everything you need to know
              about joining AARUSHI VIDYA NIKETAN.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">What's Inside</p>
              <h2 className="section-title mt-4">Prospectus Highlights</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                  >
                    <Icon className="h-8 w-8 text-gold-deep" />
                    <h3 className="mt-4 text-lg font-bold text-green-deep">{highlight.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {highlight.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="rounded-xl border border-border bg-card p-8 shadow-card text-center">
              <FileText className="mx-auto h-16 w-16 text-gold-deep" />
              <h3 className="mt-6 text-2xl font-bold text-green-deep">Download Prospectus</h3>
              <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
                Get the complete school prospectus in PDF format with all the information
                you need about admission, curriculum, and facilities.
              </p>
              <button className="bg-gold-gradient mt-8 inline-flex items-center gap-3 rounded-md px-8 py-4 font-bold text-primary-foreground shadow-card transition hover:brightness-110">
                <Download className="h-5 w-5" />
                Download PDF
              </button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-green-gradient py-12 text-secondary-foreground sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Need More Information?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              If you have any questions about the prospectus or need additional information,
              please contact our admission office. We are here to help you make an informed
              decision about your child's education.
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
