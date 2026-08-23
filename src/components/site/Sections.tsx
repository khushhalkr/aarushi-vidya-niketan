import {
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  HeartHandshake,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Bus,
  Home,
  MonitorSmartphone,
  Dumbbell,
  UserCheck,
  Quote,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  CARE,
  EVENTS,
  GALLERY,
  GALLERY_CATS,
  FACILITIES,
  IMAGES,
  PLEDGE,
  STATS,
  TESTIMONIALS,
  WHY_CARDS,
} from "./data";

/* ---------------- Intro strip ---------------- */
export function Intro() {
  return (
    <section id="about" className="bg-accent/40 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="eyebrow">AARUSHI VIDYA NIKETAN</p>
        <h2 className="section-title mt-4">Where Learning Meets Excellence</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
          AARUSHI VIDYA NIKETAN is committed to creating a positive and inspiring environment where
          every student can learn, grow and build a confident future.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3">
          {["Semara Bargon Deoraj", "CBSE Curriculum", "Holistic Education"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold text-green-deep shadow-soft sm:px-5 sm:py-2 sm:text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Information center ---------------- */
export function InfoCenter() {
  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="eyebrow">Information Center</p>
          <h2 className="section-title mt-4">School Highlights</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Stay updated with school announcements, academic schedules, student activities and
            important information.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-7">
            <CalendarDays className="h-7 w-7 text-gold-deep sm:h-9 sm:w-9" />
            <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase sm:mt-5">
              Session 2026-27
            </p>
            <h3 className="mt-1 text-lg text-green-deep sm:text-xl">Academic Calendar</h3>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground sm:mt-4 sm:text-sm">
              <li>• Holidays and vacations</li>
              <li>• Examination periods</li>
              <li>• Annual functions &amp; events</li>
            </ul>
            <p className="mt-4 text-xs font-bold text-gold-deep sm:mt-6 sm:text-sm">Explore Calendar →</p>
          </article>

          <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-7">
            <Newspaper className="h-7 w-7 text-gold-deep sm:h-9 sm:w-9" />
            <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase sm:mt-5">
              School Updates
            </p>
            <h3 className="mt-1 text-lg text-green-deep sm:text-xl">Latest News</h3>
            <div className="mt-4 rounded-lg border border-dashed border-border p-4 text-center text-xs text-muted-foreground sm:mt-6 sm:p-6 sm:text-sm">
              No notices available
            </div>
          </article>

          <article className="bg-green-gradient rounded-xl p-5 text-secondary-foreground shadow-card sm:p-7">
            <Users className="h-7 w-7 text-gold sm:h-9 sm:w-9" />
            <p className="mt-4 text-xs font-bold tracking-wider uppercase opacity-80 sm:mt-5">
              Leadership Program
            </p>
            <h3 className="mt-1 text-lg sm:text-xl">Student Council</h3>
            <p className="mt-4 text-sm leading-relaxed opacity-90">
              Empowering students with leadership, confidence, responsibility and teamwork through
              activities, elections and programs.
            </p>
            <span className="mt-6 inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-primary-foreground">
              Coming Soon
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About + Why cards ---------------- */
const WHY_ICONS = [Users, Award, Building2, Sparkles];

export function AboutSchool() {
  return (
    <section className="bg-accent/40 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-title">
              AARUSHI VIDYA NIKETAN
              <br />
              <span className="text-gold-deep">Semara Ramnagar</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              AARUSHI VIDYA NIKETAN provides state-of-the-art infrastructure designed to
              support high-quality education and holistic student development. The school strongly
              emphasizes moral values, discipline, and human ethics while nurturing students' overall
              personality growth alongside academic excellence.
            </p>
            <a
              href="#about"
              className="bg-green-gradient mt-8 inline-block rounded-md px-7 py-3 font-bold text-secondary-foreground shadow-soft transition hover:brightness-110"
            >
              Learn More
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {WHY_CARDS.map((c, i) => {
              const Icon = WHY_ICONS[i] ?? BookOpen;
              return (
                <article
                  key={c.title}
                  className="rounded-xl border border-border bg-card p-6 shadow-card"
                >
                  <Icon className="h-8 w-8 text-gold-deep" />
                  <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                    {c.eyebrow}
                  </p>
                  <h3 className="mt-1 text-lg text-green-deep">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Principal ---------------- */
export function Principal() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Principal's Message</p>
          <h2 className="section-title mt-4">
            Educating Minds. Shaping Character. Building the Future.
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
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
          </div>
          <a
            href="#about"
            className="bg-gold-gradient mt-8 inline-block rounded-md px-7 py-3 font-bold text-primary-foreground shadow-soft"
          >
            Read Full Vision
          </a>
          <p className="mt-6 text-lg font-bold text-green-deep">Mr. SHRI SAH</p>
          <p className="text-sm text-muted-foreground">Principal</p>
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
  );
}

/* ---------------- Chairman ---------------- */
export function Chairman() {
  return (
    <section className="bg-green-gradient py-20 text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
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

        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">
            Message from the Founder and Chairperson
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-tight">
            Vision Today. Legacy Tomorrow.
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed opacity-90">
            <p>
              The core purpose of education is to provide children with a learning environment which
              brings out the best in them. I strongly felt the need for a customization in our school
              system and reorienting it to Indian culture and traditions. The AARUSHI VIDYA NIKETAN, 'the Galaxy of Knowledge' is the result of my new concept with
              unique experiment which has already started bearing fruits.
            </p>
            <p>
              Now, when I look back in time and observe what changes we have been able to bring in the
              society through our concept of school system, it fills me with immense pride and honour.
              This success would not have come true without wholehearted and consistent efforts by our
              students, faculty and parents.
            </p>
          </div>
          <a
            href="#about"
            className="bg-gold-gradient mt-8 inline-block rounded-md px-7 py-3 font-bold text-primary-foreground shadow-soft"
          >
            Read Full Vision
          </a>
          <p className="mt-6 text-lg font-bold">Lt Col. S.K. Pathak</p>
          <p className="text-sm opacity-80">Founder &amp; Chairperson</p>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-6 px-4 lg:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-6 text-center"
          >
            <p className="text-3xl font-bold text-gold">{s.value}</p>
            <p className="mt-1 text-sm opacity-85">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Director ---------------- */
export function Director() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="eyebrow">Leadership</p>
          <h2 className="section-title mt-4">Message From Director</h2>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm">
            <img
              src={IMAGES.director}
              alt="Director Mr. S.K Pathak"
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-card"
            />
            <div className="bg-gold-gradient absolute -right-4 -bottom-6 rounded-xl px-5 py-3 text-center text-primary-foreground shadow-card">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-xs font-bold">Years of Educational Excellence</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-green-deep">
              Building Future Leaders Through Quality Education
            </h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              At AARUSHI VIDYA NIKETAN, education is more than academics. It is about
              nurturing confident minds, developing strong character, and inspiring young learners to
              become responsible citizens who contribute positively to society.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We remain committed to providing a safe, innovative, and inspiring learning environment
              where every student discovers their true potential.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
                Academic Excellence
              </span>
              <span className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
                Leadership
              </span>
            </div>
            <p className="mt-8 text-xl font-bold text-green-deep">Mr. S.K Pathak</p>
            <p className="text-sm text-muted-foreground">
              Director, AARUSHI VIDYA NIKETAN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Events ---------------- */
export function Events() {
  return (
    <section className="bg-accent/40 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="eyebrow">School Life</p>
          <h2 className="section-title mt-4">Events &amp; Activities</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every celebration, competition and cultural programme inspires our students to learn,
            lead and create unforgettable memories together.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {EVENTS.map((e) => (
            <article
              key={e.title}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
            >
              <img
                src={e.img}
                alt={e.title}
                loading="lazy"
                className="h-56 w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="p-6">
                <p className="text-xs font-bold tracking-wider text-gold-deep uppercase">
                  School Event
                </p>
                <h3 className="mt-1 text-lg text-green-deep">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our students actively participate in educational, cultural, sports and co-curricular
                  activities that help develop confidence, creativity and leadership skills.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Care ---------------- */
const CARE_ICONS = [ShieldCheck, Stethoscope, Sparkles];

export function Care() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="eyebrow">Student Care</p>
          <h2 className="section-title mt-4">Safety, Health &amp; Hygiene</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARE.map((c, i) => {
            const Icon = CARE_ICONS[i] ?? ShieldCheck;
            return (
              <article
                key={c.title}
                className="rounded-xl border border-border bg-card p-7 text-center shadow-card"
              >
                <span className="bg-gold-gradient mx-auto flex h-14 w-14 items-center justify-center rounded-full">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-lg text-green-deep">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Aim / pledge ---------------- */
export function Aim() {
  return (
    <section className="bg-green-gradient py-20 text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] leading-tight">
            WE AIM : TO PREPARE THE STUDENT
          </h2>
          <p className="mt-4 leading-relaxed opacity-90">
            To be intellectually competent to promote the development of intellectual skills and
            mastery of academic requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLEDGE.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-7"
            >
              <h3 className="text-lg tracking-wide text-gold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-90">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Facilities ---------------- */
const FAC_ICONS = [UserCheck, Dumbbell, Bus, Home, HeartHandshake, MonitorSmartphone];

export function Facilities() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="eyebrow">Campus</p>
          <h2 className="section-title mt-4">Our Facilities</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We provide a safe, modern and caring environment where your child learns, grows and
            succeeds with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f, i) => {
            const Icon = FAC_ICONS[i] ?? BookOpen;
            return (
              <article
                key={f.title}
                className="rounded-xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1"
              >
                <Icon className="h-8 w-8 text-gold-deep" />
                <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  {f.eyebrow}
                </p>
                <h3 className="mt-1 text-lg text-green-deep">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
export function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="overflow-hidden bg-accent/40 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="eyebrow">Testimonials</p>
        <h2 className="section-title mt-4">What Our Students &amp; Parents Say</h2>
      </div>

      <div className="mt-12 flex w-max animate-marquee gap-6 px-4">
        {loop.map((t, i) => (
          <article
            key={`${t.name}-${i}`}
            className="w-80 shrink-0 rounded-xl border border-border bg-card p-7 shadow-card"
          >
            <Quote className="h-7 w-7 text-gold" />
            <p className="mt-4 leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-bold text-green-deep">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
export function Gallery() {
  const [cat, setCat] = useState<string>("All");
  const [index, setIndex] = useState<number | null>(null);
  const items = cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat);

  const close = () => setIndex(null);
  const go = (dir: number) =>
    setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length));

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length]);

  const active = index === null ? null : items[index];

  return (
    <section className="bg-accent/40 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="eyebrow">Our Campus in Pictures</p>
          <h2 className="section-title mt-4">School Gallery</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore our classrooms, laboratories, library, activity rooms and lush green campus.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {GALLERY_CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setCat(c);
                setIndex(null);
              }}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                cat === c
                  ? "bg-green-gradient text-secondary-foreground shadow-soft"
                  : "border border-border bg-card text-green-deep hover:border-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((g, i) => (
            <figure
              key={g.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-card"
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View ${g.title} in full size`}
                className="block w-full cursor-zoom-in"
              >
                <img
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </button>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-green-deep/85 px-4 py-3 text-sm font-bold text-secondary-foreground">
                {g.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-4 right-4 rounded-full bg-card/15 p-2 text-secondary-foreground transition hover:bg-card/30"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-2 rounded-full bg-card/15 p-2 text-secondary-foreground transition hover:bg-card/30 sm:left-6 sm:p-3"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-2 rounded-full bg-card/15 p-2 text-secondary-foreground transition hover:bg-card/30 sm:right-6 sm:p-3"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure onClick={(e) => e.stopPropagation()} className="max-h-full w-full max-w-4xl">
            <img
              src={active.img}
              alt={active.title}
              className="mx-auto max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-card"
            />
            <figcaption className="mt-4 text-center text-sm font-bold text-secondary-foreground">
              {active.title}
              <span className="ml-2 opacity-70">
                {(index ?? 0) + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

