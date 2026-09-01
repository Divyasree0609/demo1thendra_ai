import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { COMPANY, whatsappLink } from "../data/config";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/interiors", label: "Interiors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.69A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
      <span
        className="block h-0.5 bg-charcoal origin-left transition-all duration-300"
        style={{ transform: open ? "rotate(45deg) translate(1px, -1px)" : "none" }}
      />
      <span
        className="block h-0.5 bg-charcoal transition-all duration-300"
        style={{ opacity: open ? 0 : 1, transform: open ? "translateX(10px)" : "none" }}
      />
      <span
        className="block h-0.5 bg-charcoal origin-left transition-all duration-300"
        style={{ transform: open ? "rotate(-45deg) translate(1px, 1px)" : "none" }}
      />
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(250,250,248,0.97)" : "rgba(250,250,248,0.92)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none group">
          <span
            className="font-serif text-lg md:text-xl font-bold text-charcoal tracking-wide group-hover:text-gold transition-colors duration-200"
          >
            SRI HAYAGHREEV
          </span>
          <span className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
            HOMES
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium transition-colors duration-200 relative group"
              style={{ color: isActive(link.to) ? "var(--color-gold)" : "var(--color-charcoal-light)" }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300"
                style={{ width: isActive(link.to) ? "100%" : "0" }}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={COMPANY.phoneTel}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 border border-border text-charcoal hover:border-charcoal transition-colors duration-200"
          >
            <PhoneIcon />
            Call Now
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 bg-charcoal text-white hover:bg-gold hover:text-charcoal transition-all duration-200"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 border-t border-border"
        style={{ maxHeight: menuOpen ? "500px" : "0", borderTopWidth: menuOpen ? "1px" : "0" }}
      >
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1 bg-off-white">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="py-3 text-base font-medium border-b border-border last:border-0 transition-colors duration-200"
              style={{ color: isActive(link.to) ? "var(--color-gold)" : "var(--color-charcoal)" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-4">
            <a
              href={COMPANY.phoneTel}
              className="flex-1 text-center py-3 border border-charcoal text-charcoal text-sm font-medium"
            >
              Call Now
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 bg-charcoal text-white text-sm font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
