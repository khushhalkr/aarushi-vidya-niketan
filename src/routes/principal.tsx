import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { IMAGES } from "@/components/site/data";

const title = "Principal's Message - AARUSHI VIDYA NIKETAN";
const description = "Read the inspiring message from Principal Mr. Shri Sah about educating minds, shaping character, and building the future.";

export const Route = createFileRoute("/principal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Principal,
});

function Principal() {
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
              Principal's Message
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Educating Minds. Shaping Character. Building the Future.
            </p>
          </div>
        </section>

        {/* Principal Message */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  True education is a journey that transforms learners into leaders. At our institution,
                  we go beyond academics to cultivate discipline, integrity, confidence, and purpose in
                  every student.
                </p>
                <p>
                  Our academic framework blends time-tested values with modern pedagogy, ensuring that
                  students develop critical thinking, adaptability, and a lifelong love for learning.
                </p>
                <p>
                  With committed educators and supportive parents, we create an environment where
                  excellence is nurtured, effort is respected, and success is achieved with humility.
                </p>
                <p>
                  We believe that every child has unique potential, and our role is to provide the
                  guidance, resources, and encouragement needed for them to discover and develop
                  their talents.
                </p>
              </div>
              <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold text-green-deep">Our Educational Philosophy</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• Student-centered learning approach</li>
                  <li>• Integration of values with academics</li>
                  <li>• Focus on holistic development</li>
                  <li>• Preparation for future challenges</li>
                </ul>
              </div>
              <p className="mt-6 text-lg font-bold text-green-deep">Mr. SHRI SAH</p>
              <p className="text-sm text-muted-foreground">Principal, AARUSHI VIDYA NIKETAN</p>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="bg-gold-gradient absolute -inset-3 rounded-2xl opacity-25" />
              <img
                src={IMAGES.principal}
                alt="Principal Mr. Shri Sah"
                loading="lazy"
                className="relative w-full rounded-2xl object-cover shadow-card"
              />
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="eyebrow">Our Vision</p>
            <h2 className="section-title mt-4">Creating Tomorrow's Leaders Today</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              To be a leading educational institution that empowers students with knowledge,
              skills, and values to excel in a rapidly changing world while staying rooted in
              their cultural heritage.
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
