import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { IndianRupee, GraduationCap, BookOpen, Bus, Utensils, ShieldCheck } from "lucide-react";

const title = "Fee Structure - AARUSHI VIDYA NIKETAN";
const description = "View the detailed fee structure for different grade levels at AARUSHI VIDYA NIKETAN including tuition, facilities, and other charges.";

export const Route = createFileRoute("/fee-structure")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FeeStructure,
});

function FeeStructure() {
  const feeComponents = [
    {
      icon: GraduationCap,
      title: "Tuition Fee",
      description: "Annual tuition fee covering academic instruction and curriculum materials."
    },
    {
      icon: BookOpen,
      title: "Academic Fee",
      description: "Includes textbooks, notebooks, and educational resources."
    },
    {
      icon: Bus,
      title: "Transport Fee",
      description: "Optional transportation service for safe and convenient school commute."
    },
    {
      icon: Utensils,
      title: "Meal Plan",
      description: "Optional nutritious meal plans for students during school hours."
    },
    {
      icon: ShieldCheck,
      title: "Security Deposit",
      description: "Refundable security deposit payable at the time of admission."
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
              Fee Structure
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Transparent and affordable fee structure for quality education
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Investment in Education</p>
            <h2 className="section-title mt-4">Fee Components</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our fee structure is designed to be transparent and affordable while maintaining
              the highest standards of education. Fees are payable annually or in installments
              as per school policy.
            </p>
          </div>
        </section>

        {/* Fee Components */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">What's Included</p>
              <h2 className="section-title mt-4">Fee Breakdown</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {feeComponents.map((component, index) => {
                const Icon = component.icon;
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                  >
                    <Icon className="h-8 w-8 text-gold-deep" />
                    <h3 className="mt-4 text-lg font-bold text-green-deep">{component.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {component.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-bold text-green-deep">Important Notes</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Fees are subject to annual revision as per school policy.</li>
                <li>• Sibling discounts available for second and subsequent children.</li>
                <li>• Late payment charges may apply for delayed fee payments.</li>
                <li>• Detailed fee schedule available at the school office.</li>
                <li>• All fees are non-refundable except security deposit.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-green-gradient py-12 text-secondary-foreground sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Need Fee Details?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              For detailed fee structure specific to your child's grade level, please contact
              our admission office. We will be happy to provide complete information and
              guide you through the fee payment process.
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
