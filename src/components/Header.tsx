"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "whyUs", href: "#why-us" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30 md:h-36">
          <Link href="#" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="L-Ectric"
              width={550}
              height={187}
              className="h-26 md:h-32 w-auto object-contain group-hover:opacity-90 transition-opacity min-w-[260px]"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-slate-300 hover:text-electric-400 transition-colors font-medium"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </Link>
            ))}

            {/* Language switcher */}
            <button
              onClick={() => setLocale(locale === "he" ? "en" : "he")}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-electric-500/20 text-slate-300 hover:text-electric-400 transition-all font-medium text-sm border border-white/10"
              aria-label={locale === "he" ? "Switch to English" : "עבור לעברית"}
            >
              {locale === "he" ? "EN" : "עב"}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLocale(locale === "he" ? "en" : "he")}
              className="px-2 py-1 rounded text-sm font-medium text-slate-300"
            >
              {locale === "he" ? "EN" : "עב"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/5"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-slate-300 hover:text-electric-400 transition-colors font-medium"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
