import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { IMAGES, SITE } from "@/components/site/data";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { GraduationCap, FileText, DollarSign, Download } from "lucide-react";

const title = `Admission - ${SITE.name}`;
const description = `Admission process, fee structure and prospectus for ${SITE.name} at ${SITE.address}.`;

export const Route = createFileRoute("/admission")({
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
  component: Admission,
});

function Admission() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-accent/40 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="eyebrow">Join Our Family</p>
            <h2 className="section-title mt-4">Admission Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Take the first step towards quality education. Learn about our admission process, fee structure,
              and download the prospectus to get started.
            </p>
          </div>
        </div>

        <div className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8 shadow-card">
                <GraduationCap className="h-12 w-12 text-gold-deep" />
                <h3 className="mt-4 text-xl font-bold text-green-deep">Admission Process</h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li>• Fill out the admission form</li>
                  <li>• Submit required documents</li>
                  <li>• Attend counseling session</li>
                  <li>• Complete fee payment</li>
                  <li>• Collect admission kit</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-8 shadow-card">
                <DollarSign className="h-12 w-12 text-gold-deep" />
                <h3 className="mt-4 text-xl font-bold text-green-deep">Fee Structure</h3>
                <p className="mt-4 text-muted-foreground">
                  Affordable and transparent fee structure with flexible payment options.
                  Contact the school office for detailed fee information.
                </p>
                <a
                  href="tel:+91987654321"
                  className="mt-4 inline-flex items-center gap-2 text-gold-deep font-semibold hover:underline"
                >
                  Call for fee details →
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card p-8 shadow-card">
                <FileText className="h-12 w-12 text-gold-deep" />
                <h3 className="mt-4 text-xl font-bold text-green-deep">Prospectus</h3>
                <p className="mt-4 text-muted-foreground">
                  Download our school prospectus to learn more about our curriculum, facilities,
                  and admission requirements.
                </p>
                <button className="mt-4 inline-flex items-center gap-2 bg-gold-gradient px-4 py-2 rounded-md font-bold text-primary-foreground hover:brightness-110">
                  <Download className="h-4 w-4" />
                  Download Prospectus
                </button>
              </div>
            </div>

            <div className="mt-12 rounded-xl border border-border bg-card p-8 shadow-card">
              <h3 className="text-2xl font-bold text-green-deep text-center">Required Documents</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[
                  "Birth Certificate",
                  "Transfer Certificate",
                  "Passport Size Photos",
                  "Aadhar Card Copy",
                  "Parent's ID Proof",
                  "Previous Year Report Card",
                  "Medical Certificate",
                  "Address Proof",
                ].map((doc) => (
                  <div key={doc} className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-gold-deep" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="footer">
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
