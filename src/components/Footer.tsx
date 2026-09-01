import { Link } from "react-router";
import { COMPANY, whatsappLink } from "../data/config";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111110" }} className="text-white">
      {/* CTA Banner */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-medium tracking-widest text-gold uppercase mb-2">Ready to Begin?</p>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-white">
              {"Let's Build Your Dream Home"}
            </h3>
          </div>
          <div className="flex gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="btn-outline-white text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-serif text-xl font-bold text-white tracking-wide">SRI HAYAGHREEV</div>
              <div className="text-xs tracking-[0.2em] text-gold uppercase font-medium">HOMES</div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Trusted home construction and interior solutions in Chennai. Building quality homes with a focus on design, execution, and customer satisfaction.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { href: COMPANY.social.instagram, Icon: InstagramIcon, label: "Instagram" },
                { href: COMPANY.social.facebook, Icon: FacebookIcon, label: "Facebook" },
                { href: COMPANY.social.linkedin, Icon: LinkedInIcon, label: "LinkedIn" },
                { href: COMPANY.social.youtube, Icon: YouTubeIcon, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-gold)";
                    (e.currentTarget as HTMLElement).style.color = "#1A1A1A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gold uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Our Services" },
                { to: "/projects", label: "Projects" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gold uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              {["Home Construction", "Interior Design", "Project Development", "Home Design", "Renovation"].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gold uppercase mb-6">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gold font-medium mb-1 uppercase tracking-wider">Address</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {COMPANY.address}
                </p>
              </div>
              <div>
                <p className="text-xs text-gold font-medium mb-1 uppercase tracking-wider">Phone</p>
                <a
                  href={COMPANY.phoneTel}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div>
                <p className="text-xs text-gold font-medium mb-1 uppercase tracking-wider">Email</p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © 2026 Sri Hayaghreev Homes. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-xs transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
