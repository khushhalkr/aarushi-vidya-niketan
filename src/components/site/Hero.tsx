import { ArrowRight, Check, GraduationCap } from "lucide-react";
import { IMAGES, SITE, HERO_SLIDER } from "./data";
import { useState, useEffect } from "react";

const HIGHLIGHTS = ["Academic Excellence", "Experienced Faculty", "Holistic Development"];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDER.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate min-h-[85vh] overflow-hidden sm:min-h-[90vh]">
      {HERO_SLIDER.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`AARUSHI VIDYA NIKETAN Campus ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="bg-hero-overlay absolute inset-0" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-16 sm:min-h-[90vh] sm:py-24">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-semibold text-gold sm:text-sm">
            <span className="h-px w-6 bg-gold sm:w-8" />
            Excellence in Education
          </p>

          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-bold text-background sm:mt-6 sm:text-[clamp(2.4rem,6vw,4.4rem)] sm:leading-[1.05]">
            Shaping Young Minds
            <br />
            <span className="text-gold">Building Bright Futures.</span>
          </h2>

          <p className="mt-4 text-xl font-bold text-background sm:mt-6 sm:text-2xl">{SITE.name}</p>
          <p className="mt-1 text-sm text-background/75 sm:text-base">{SITE.address}</p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-background/85 sm:mt-6 sm:text-lg">
            We provide a nurturing and modern learning environment where students grow with
            knowledge, confidence, discipline and creativity.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
            <a
              href="/admission"
              className="bg-gold-gradient inline-flex items-center gap-2 rounded-md px-5 py-3 font-bold text-primary-foreground shadow-card transition hover:brightness-105 sm:gap-3 sm:px-7 sm:py-4"
            >
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">View Admissions</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center rounded-md border border-background/25 bg-background/10 px-5 py-3 font-bold text-background backdrop-blur transition hover:bg-background/20 sm:px-7 sm:py-4"
            >
              <span className="text-sm sm:text-base">Download Prospectus</span>
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 sm:mt-10 sm:gap-x-8 sm:gap-y-3">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-center gap-2 text-xs text-background/90 sm:text-sm">
                <Check className="h-3 w-3 text-gold sm:h-4 sm:w-4" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
