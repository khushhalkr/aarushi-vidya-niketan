import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { IMAGES, STATS } from "@/components/site/data";

const title = "Chairman's Message - AARUSHI VIDYA NIKETAN";
const description = "Read the visionary message from Founder and Chairperson Lt Col. S.K. Pathak about the school's mission and legacy.";

export const Route = createFileRoute("/chairman")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Chairman,
});

function Chairman() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-green-gradient py-16 text-secondary-foreground sm:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase sm:text-sm">
              Leadership
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold sm:mt-6 sm:text-[clamp(2.4rem,6vw,4.4rem)]">
              Chairman's Message
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Vision Today. Legacy Tomorrow.
            </p>
          </div>
        </section>

        {/* Chairman Message */}
        <section className="bg-green-gradient py-12 text-secondary-foreground sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-2 lg:gap-12">
            <div className="relative mx-auto w-full max-w-sm order-2 lg:order-1">
              <img
                src={IMAGES.chairman}
                alt="Founder and Chairperson Lt Col. S.K. Pathak"
                loading="lazy"
                className="w-full rounded-2xl object-cover shadow-card"
              />
              <p className="mt-4 text-center text-sm tracking-wide opacity-80">
                Leadership Rooted in Values
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase sm:text-sm">
                Message from the Founder and Chairperson
              </p>
              <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-tight">
                Vision Today. Legacy Tomorrow.
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed opacity-90">
                <p>
                  The core purpose of education is to provide children with a learning environment which
                  brings out the best in them. I strongly felt the need for a customization in our school
                  system and reorienting it to Indian culture and traditions. The AARUSHI VIDYA NIKETAN,
                  'the Galaxy of Knowledge' is the result of my new concept with unique experiment which
                  has already started bearing fruits.
                </p>
                <p>
                  Now, when I look back in time and observe what changes we have been able to bring in
                  the society through our concept of school system, it fills me with immense pride and
                  honour. This success would not have come true without wholehearted and consistent
                  efforts by our students, faculty and parents.
                </p>
                <p>
                  Our vision is to create an institution that not only imparts knowledge but also
                  shapes character, builds confidence, and prepares young minds to face the challenges
                  of the future with courage and integrity.
                </p>
              </div>
              <p className="mt-8 text-lg font-bold">Lt Col. S.K. Pathak</p>
              <p className="text-sm opacity-80">Founder &amp; Chairperson</p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-4 px-4 lg:mt-16 lg:gap-6 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-5 text-center sm:p-6"
              >
                <p className="text-2xl font-bold text-gold sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs opacity-85 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Our Legacy</p>
            <h2 className="section-title mt-4">Building a Better Tomorrow</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Founded with a vision to revolutionize education, AARUSHI VIDYA NIKETAN continues to
              uphold its commitment to excellence, innovation, and the holistic development of every
              student.
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
