import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { SITE } from "@/components/site/data";
import { FileText, CheckCircle, Calendar, Upload, Phone, Mail } from "lucide-react";

const title = "Admission Process - AARUSHI VIDYA NIKETAN";
const description = "Learn about the step-by-step admission process at AARUSHI VIDYA NIKETAN including eligibility, requirements, and application procedure.";

export const Route = createFileRoute("/admission-process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AdmissionProcess,
});

function AdmissionProcess() {
  const steps = [
    {
      icon: FileText,
      title: "Step 1: Application",
      description: "Fill out the admission form with accurate student and parent information."
    },
    {
      icon: Upload,
      title: "Step 2: Documents",
      description: "Submit required documents including birth certificate, previous academic records, and photographs."
    },
    {
      icon: Calendar,
      title: "Step 3: Assessment",
      description: "Attend the entrance assessment or interview as per the grade level requirements."
    },
    {
      icon: CheckCircle,
      title: "Step 4: Confirmation",
      description: "Receive admission offer and complete fee payment to secure the seat."
    }
  ];

  const documents = [
    "Birth Certificate (attested copy)",
    "Previous Academic Records/Transfer Certificate",
    "Passport-size photographs (4 copies)",
    "Aadhar Card (student and parents)",
    "Medical Certificate",
    "Address Proof"
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
              Admission Process
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              A simple and transparent process to join our learning community
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">How to Apply</p>
              <h2 className="section-title mt-4">Admission Steps</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <Icon className="mt-4 h-8 w-8 text-gold-deep" />
                    <h3 className="mt-4 text-lg font-bold text-green-deep">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <p className="eyebrow">Requirements</p>
              <h2 className="section-title mt-4">Required Documents</h2>
            </div>
            <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card">
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                    <span className="text-sm text-muted-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Need Help?</p>
            <h2 className="section-title mt-4">Contact Admission Office</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <a
                href={`tel:+91${SITE.phone}`}
                className="flex items-center gap-2 text-green-deep hover:opacity-80"
              >
                <Phone className="h-5 w-5" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-green-deep hover:opacity-80"
              >
                <Mail className="h-5 w-5" />
                {SITE.email}
              </a>
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
