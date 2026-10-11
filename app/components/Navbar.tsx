
"use client";

import Link from "next/link";
import { useState } from "react";

const mainLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Our Studio", href: "/about" },
];

const secondaryLinks = [
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Interior Styling", href: "/styling" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full bg-[#F8F7F3] text-[#293D32]">
      {/* Announcement bar */}
      <div className="flex min-h-10 flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-[#293D32] px-3 py-2 text-center text-xs tracking-wide text-white sm:min-h-12 sm:text-sm">
        <span>Complimentary design consultation</span>
        <Link
          href="/contact"
          className="underline underline-offset-4 transition-opacity hover:opacity-75"
        >
          Book yours today ↗
        </Link>
      </div>

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Main navigation */}
        <nav className="flex min-h-[76px] items-center justify-between gap-3 sm:min-h-24 lg:min-h-28 lg:gap-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="shrink-0 whitespace-nowrap text-xl font-medium uppercase tracking-[0.12em] sm:text-2xl sm:tracking-[0.16em] lg:text-4xl"
          >
            VIGNETTES<span className="text-[#A77B51]">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-12">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm transition-colors duration-200 hover:text-[#A77B51] xl:text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden min-h-12 shrink-0 items-center gap-4 bg-[#293D32] px-5 text-sm text-white transition-colors duration-200 hover:bg-[#405747] xl:flex xl:min-h-14 xl:px-7 xl:text-base"
          >
            Let's talk
            <span className="text-xl">↗</span>
          </Link>

          {/* Mobile/tablet controls */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="flex min-h-10 items-center gap-2 bg-[#293D32] px-3 text-xs text-white transition-colors hover:bg-[#405747] sm:px-4 sm:text-sm"
            >
              Let's talk <span>↗</span>
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex size-10 shrink-0 items-center justify-center border border-[#DCDAD1] text-2xl"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </nav>

        {/* Desktop secondary navigation */}
        <div className="hidden min-h-16 items-center gap-7 overflow-x-auto border-t border-[#DCDAD1] md:flex lg:gap-10 xl:gap-12">
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap py-4 text-sm tracking-wide text-[#62675E] transition-colors duration-200 hover:text-[#293D32] lg:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile/tablet menu */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-[#DCDAD1] py-3 md:hidden"
          >
            <div className="grid grid-cols-2 gap-x-4">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-[#DCDAD1] py-4 text-sm hover:text-[#A77B51]"
                >
                  {link.label}
                </Link>
              ))}

              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-[#DCDAD1] py-4 text-sm text-[#62675E] hover:text-[#293D32]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
