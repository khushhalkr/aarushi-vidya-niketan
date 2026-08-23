import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { NAV, SITE, IMAGES } from "./data";

export function Footer() {
  return (
    <footer className="bg-ink text-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:gap-10 sm:py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={IMAGES.logo}
              alt="School logo"
              loading="lazy"
              className="h-12 w-12 rounded-full object-contain sm:h-14 sm:w-14"
            />
            <div>
              <p className="text-sm font-bold text-gold sm:text-base">{SITE.name}</p>
              <p className="text-xs opacity-70">{SITE.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed opacity-75 sm:mt-5 sm:text-sm">
            A CBSE curriculum school nurturing knowledge, confidence, discipline and creativity in
            every learner.
          </p>
        </div>

        <div>
          <h3 className="text-base text-gold sm:text-lg">Quick Links</h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-xs opacity-80 sm:mt-4 sm:text-sm">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="transition hover:text-gold">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base text-gold sm:text-lg">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-xs opacity-80 sm:mt-4 sm:space-y-3 sm:text-sm">
            <li className="flex gap-2 sm:gap-3">
              <MapPin className="h-3 w-3 shrink-0 text-gold sm:h-4 sm:w-4" />
              {SITE.address}
            </li>
            <li className="flex gap-2 sm:gap-3">
              <Phone className="h-3 w-3 shrink-0 text-gold sm:h-4 sm:w-4" />
              {SITE.phone}
            </li>
            <li className="flex gap-2 sm:gap-3">
              <Mail className="h-3 w-3 shrink-0 text-gold sm:h-4 sm:w-4" />
              {SITE.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 py-4 text-center text-xs opacity-60 sm:py-5">
        <p className="mb-2">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a
            href="https://www.ranjantechnovate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            Ranjan Technovate
          </a>
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-2 sm:right-5 sm:bottom-5 sm:gap-3">
      <span className="rounded-md bg-gold px-2.5 py-1 text-xs font-bold text-primary-foreground shadow-card sm:px-3 sm:py-1.5">
        Quick Help
      </span>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green text-secondary-foreground shadow-card transition hover:brightness-110 sm:h-14 sm:w-14"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}
