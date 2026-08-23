import { useState, useEffect } from "react";
import { Phone, Mail, Lock, Menu, X, ChevronDown, LogOut } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { NAV, SITE, IMAGES } from "./data";
import { ApplyModal } from "./ApplyModal";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  return (
    <header className="w-full">
      {/* Top utility bar */}
      <div className="bg-gold-gradient text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-3 py-2 text-xs sm:px-4 sm:text-sm">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-1.5 hover:opacity-80 sm:gap-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">{SITE.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <span className="hidden items-center gap-2 sm:flex">
              <Mail className="h-4 w-4" />
              {SITE.email}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden sm:inline">CBSE</span>
            {user ? (
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="hidden sm:inline">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 hover:opacity-80"
                  title="Logout"
                >
                  <LogOut className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <>
                <a
                  href="http://localhost:8000/views/login.blade.php"
                  className="flex items-center gap-1.5 hover:opacity-80"
                >
                  <Lock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span className="hidden sm:inline">Login</span>
                </a>
                <button
                  onClick={() => setApplyModalOpen(true)}
                  className="rounded-sm bg-green px-3 py-1.5 text-xs font-bold tracking-wide text-secondary-foreground shadow-soft transition hover:brightness-110 sm:px-4 sm:text-sm"
                >
                  APPLY NOW
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Identity band */}
      <div className="bg-card">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-3 sm:gap-4 sm:px-4 sm:py-4">
          <img
            src={IMAGES.logo}
            alt="AARUSHI VIDYA NIKETAN logo"
            className="h-12 w-12 shrink-0 rounded-full object-contain sm:h-16 sm:w-16"
            loading="eager"
          />
          <div className="flex-1 text-center">
            <h1 className="text-base leading-tight font-bold tracking-wide text-green-deep sm:text-xl lg:text-3xl">
              {SITE.name}
            </h1>
            <p className="mt-0.5 text-xs font-bold text-royal sm:mt-1 sm:text-sm lg:text-lg">{SITE.tagline}</p>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-sm border border-border p-2 text-green-deep lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <span className="hidden h-16 w-16 lg:block" aria-hidden />
        </div>
      </div>

      {/* Primary nav */}
      <nav className="bg-green-gradient sticky top-0 z-50 text-secondary-foreground">
        <ul className="mx-auto hidden max-w-7xl items-center justify-center gap-1 px-4 lg:flex">
          {NAV.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                to={item.href}
                className="flex items-center gap-1 px-4 py-4 text-sm font-bold tracking-wide uppercase transition group-hover:bg-green-deep"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.children && (
                <ul className="invisible absolute top-full left-0 z-50 w-60 translate-y-1 rounded-b-md border border-border bg-card py-2 opacity-0 shadow-card transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <li key={c.label}>
                      <Link
                        to={c.href}
                        className="block px-4 py-2.5 text-sm font-semibold text-green-deep transition hover:bg-accent hover:text-gold-deep"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {open && (
          <ul className="flex flex-col px-4 pb-3 lg:hidden">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-secondary-foreground/15">
                <button
                  type="button"
                  onClick={() => {
                    if (item.children) setSub((s) => (s === item.label ? null : item.label));
                    else {
                      setOpen(false);
                    }
                  }}
                  className="flex w-full items-center justify-between py-3 text-left text-sm font-bold tracking-wide uppercase"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`h-4 w-4 transition ${sub === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </button>
                {item.children ? (
                  sub === item.label && (
                    <ul className="pb-2 pl-3">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <Link
                            to={c.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm opacity-85"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm opacity-85"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Modals */}
      <ApplyModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </header>
  );
}
