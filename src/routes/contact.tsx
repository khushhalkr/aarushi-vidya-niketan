import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { IMAGES, SITE } from "@/components/site/data";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Navigation } from "lucide-react";

const title = `Contact Us - ${SITE.name}`;
const description = `Contact ${SITE.name} for admissions, inquiries and support. Phone: ${SITE.phone}, Email: ${SITE.email}, Address: ${SITE.address}.`;

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

function Contact() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Visit Us",
      value: SITE.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
      linkText: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: SITE.phone,
      link: `tel:${SITE.phone}`,
      linkText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: SITE.email,
      link: `mailto:${SITE.email}`,
      linkText: "Send Email"
    },
    {
      icon: Clock,
      title: "Office Hours",
      value: "Mon - Sat: 8:00 AM - 4:00 PM",
      link: null,
      linkText: null
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
              Get In Touch
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold sm:mt-6 sm:text-[clamp(2.4rem,6vw,4.4rem)]">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Have questions? We'd love to hear from you. Reach out to us for admissions,
              inquiries or any other information.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <article
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                  >
                    <Icon className="h-8 w-8 text-gold-deep" />
                    <h3 className="mt-4 text-sm font-bold tracking-wider text-muted-foreground uppercase">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-base font-bold text-green-deep">{card.value}</p>
                    {card.link && (
                      <a
                        href={card.link}
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold-deep hover:underline"
                        target={card.link.startsWith('http') ? '_blank' : undefined}
                        rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {card.linkText}
                        <Navigation className="h-4 w-4" />
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Map and Form Section */}
        <section className="bg-accent/40 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Live Map */}
              <div className="rounded-xl border border-border bg-card overflow-hidden shadow-card">
                <div className="p-4 border-b border-border">
                  <h3 className="text-lg font-bold text-green-deep flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gold-deep" />
                    Our Location
                  </h3>
                </div>
                <div className="h-[300px] w-full sm:h-[350px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.1234567890123!2d85.12345678901234!3d25.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzI0LjQiTiA4NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location Map"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-card">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-green-deep flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-gold-deep" />
                    Send us a Message
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-green-deep mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-gold-deep focus:outline-none focus:ring-2 focus:ring-gold-deep/20 transition"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-green-deep mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-gold-deep focus:outline-none focus:ring-2 focus:ring-gold-deep/20 transition"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-green-deep mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-gold-deep focus:outline-none focus:ring-2 focus:ring-gold-deep/20 transition"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-green-deep mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-gold-deep focus:outline-none focus:ring-2 focus:ring-gold-deep/20 transition"
                    >
                      <option value="">Select a topic</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="general">General Information</option>
                      <option value="fees">Fee Structure</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-green-deep mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-gold-deep focus:outline-none focus:ring-2 focus:ring-gold-deep/20 transition resize-none"
                      placeholder="Type your message here..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-gradient rounded-lg px-6 py-3 font-bold text-primary-foreground shadow-soft transition hover:brightness-110 flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <p className="eyebrow">Quick Access</p>
              <h2 className="section-title mt-4">Helpful Links</h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a
                href="/admission-process"
                className="rounded-xl border border-border bg-card p-6 shadow-card text-center hover:border-gold-deep transition group"
              >
                <h3 className="text-lg font-bold text-green-deep group-hover:text-gold-deep transition">
                  Admission Process
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn about our admission procedure
                </p>
              </a>
              <a
                href="/mandatory-details"
                className="rounded-xl border border-border bg-card p-6 shadow-card text-center hover:border-gold-deep transition group"
              >
                <h3 className="text-lg font-bold text-green-deep group-hover:text-gold-deep transition">
                  School Information
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  View mandatory disclosure details
                </p>
              </a>
              <a
                href="/fee-structure"
                className="rounded-xl border border-border bg-card p-6 shadow-card text-center hover:border-gold-deep transition group"
              >
                <h3 className="text-lg font-bold text-green-deep group-hover:text-gold-deep transition">
                  Fee Structure
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Check our fee details
                </p>
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
