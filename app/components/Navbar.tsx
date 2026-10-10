
import Link from "next/link";

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
  return (
    <header className="w-full bg-[#F8F7F3] text-[#293D32]">
      {/* Announcement bar */}
      <div className="flex min-h-12 items-center justify-center bg-[#293D32] px-4 text-center text-sm tracking-wide text-white">
        Complimentary design consultation
        <span className="ml-2 underline underline-offset-4">
          Book yours today ↗
        </span>
      </div>

      {/* Main navigation */}
      <div className="mx-auto max-w-[1600px] px-8 lg:px-16 xl:px-24">
        <nav className="flex min-h-28 items-center justify-between gap-10">

          <Link
            href="/"
            className="shrink-0 text-3xl font-medium uppercase tracking-[0.16em] lg:text-4xl"
          >
            VIGNETTES<span className="text-[#A77B51]">.</span>
          </Link>


          <div className="hidden items-center gap-10 lg:flex xl:gap-14">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base transition-colors duration-200 hover:text-[#A77B51]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="flex min-h-14 shrink-0 items-center gap-5 bg-[#293D32] px-7 text-base text-white transition-colors duration-200 hover:bg-[#405747]"
          >
            Let's talk
            <span className="text-xl">↗</span>
          </Link>
        </nav>

        {/* Secondary navigation */}
        <div className="flex min-h-16 items-center gap-8 overflow-x-auto border-t border-[#DCDAD1] lg:gap-12">
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 text-sm tracking-wide text-[#62675E] transition-colors duration-200 hover:text-[#293D32] lg:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
