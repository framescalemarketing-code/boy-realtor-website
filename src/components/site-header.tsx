"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#homes", label: "Homes" },
  { href: "#buyers", label: "First-Time Buyers" },
  { href: "#about", label: "About Jeff" },
] as const;

const contactLink = { href: "#contact", label: "Contact" } as const;

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f4]/90 backdrop-blur-md border-b border-[#7288ae]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <a href="#" className="flex min-w-0 items-center gap-3 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-[#111844] flex items-center justify-center text-[#eae0cf] ring-1 ring-[#111844]">
              <span className="font-(family-name:--font-playfair) text-base sm:text-xl tracking-wide">
                JL
              </span>
            </div>
            <div className="min-w-0">
              <div className="font-(family-name:--font-playfair) text-base sm:text-xl text-[#111844] truncate">
                listedbyjeff
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#7288ae] truncate">
                San Diego Real Estate
              </div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-7 xl:gap-9 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#111844] hover:text-[#4b5694] transition-colors whitespace-nowrap tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href={contactLink.href}
              className="px-5 xl:px-6 py-2.5 bg-[#111844] text-white text-sm rounded-full hover:bg-[#4b5694] transition-colors whitespace-nowrap tracking-wide"
            >
              {contactLink.label}
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden shrink-0 p-2 -mr-2 text-[#111844]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-2 flex flex-col gap-3 border-t border-[#7288ae]/20 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#111844] hover:text-[#4b5694] transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={contactLink.href}
              className="px-6 py-3 bg-[#111844] text-white rounded-full hover:bg-[#4b5694] transition-colors text-center tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              {contactLink.label}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
