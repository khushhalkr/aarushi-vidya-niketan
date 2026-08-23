import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { IMAGES, SITE } from "@/components/site/data";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Building2, FileText, Users, Calendar, Phone, Mail, MapPin, Award, ShieldCheck } from "lucide-react";

const title = `Mandatory Details - ${SITE.name}`;
const description = `Mandatory public disclosure, UDISE code, registration number and compliance details for ${SITE.name}.`;

export const Route = createFileRoute("/mandatory-details")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://arya-clone-maker.lovable.app" + IMAGES.hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://arya-clone-maker.lovable.app" + IMAGES.hero },
    ],
  }),
  component: MandatoryDetails,
});

function MandatoryDetails() {
  const contactInfo = [
    {
      icon: Building2,
      label: "School Name",
      value: SITE.name
    },
    {
      icon: MapPin,
      label: "Address",
      value: SITE.address
    },
    {
      icon: Phone,
      label: "Phone",
      value: SITE.phone
    },
    {
      icon: Mail,
      label: "Email",
      value: SITE.email
    }
  ];

  const registrationInfo = [
    {
      icon: FileText,
      label: "UDISE Code",
      value: SITE.udise
    },
    {
      icon: Award,
      label: "Registration Number",
      value: SITE.regNo
    }
  ];

  const affiliation = [
    "Affiliated to CBSE, New Delhi",
    "Recognized by Government of Bihar",
    "Follows NCERT Curriculum",
    "Medium of Instruction: English"
  ];

  const management = [
    "Chairman: Lt Col. S.K. Pathak",
    "Director: Mr. S.K. Pathak",
    "Principal: Mr. Shri Sah"
  ];

  const academicInfo = [
    "Session: April to March",
    "Vacations: Summer & Winter as per CBSE guidelines",
    "Working Days: Monday to Saturday",
    "Timings: 8:00 AM to 2:00 PM"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-green-gradient py-16 text-secondary-foreground sm:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase sm:text-sm">
              Public Disclosure
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold sm:mt-6 sm:text-[clamp(2.4rem,6vw,4.4rem)]">
              Mandatory Details
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Official information as per regulatory requirements and public disclosure norms
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Contact Details</p>
              <h2 className="section-title mt-4">School Information</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                  >
                    <Icon className="h-8 w-8 text-gold-deep" />
                    <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                      {info.label}
                    </p>
                    <p className="mt-2 text-base font-bold text-green-deep">{info.value}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Registration */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="eyebrow">Registration</p>
              <h2 className="section-title mt-4">Official Codes</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
              {registrationInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                  >
                    <Icon className="h-8 w-8 text-gold-deep" />
                    <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                      {info.label}
                    </p>
                    <p className="mt-2 text-base font-bold text-green-deep">{info.value}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Affiliation */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <p className="eyebrow">Recognition</p>
              <h2 className="section-title mt-4">Affiliation & Recognition</h2>
            </div>
            <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card">
              <ul className="space-y-3">
                {affiliation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Management */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <p className="eyebrow">Leadership</p>
              <h2 className="section-title mt-4">Management Committee</h2>
            </div>
            <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card">
              <ul className="space-y-3">
                {management.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Users className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Academic Session */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <p className="eyebrow">Schedule</p>
              <h2 className="section-title mt-4">Academic Session</h2>
            </div>
            <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card">
              <ul className="space-y-3">
                {academicInfo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 shrink-0 text-gold-deep mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
