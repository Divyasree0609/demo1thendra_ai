import { Link } from "react-router";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { COMPANY, whatsappLink } from "../data/config";
import { PROJECTS, SERVICES, TESTIMONIALS, INTERIOR_GALLERY } from "../data/projects";
import { useState, useEffect, useRef } from "react";

const HERO_BG = "https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?w=1920&q=80&auto=format&fit=crop";
const ABOUT_IMG = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80&auto=format&fit=crop";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function useCounter(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

function StatCounter({ value, label, sublabel }: { value: string; label: string; sublabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/\d/g, "");
  const count = useCounter(numericValue, 1800, triggered);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl md:text-5xl font-bold text-gold mb-1">
        {triggered ? `${count}${suffix}` : value}
      </div>
      <div className="font-medium text-charcoal text-base">{label}</div>
      <div className="text-muted text-sm mt-0.5">{sublabel}</div>
    </div>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="relative min-h-screen flex items-end md:items-center">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `url('${HERO_BG}')`, opacity: loaded ? 1 : 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-8 pb-28 md:pb-0 md:py-40">
        <div className="max-w-2xl">
          <div
            className="flex items-center gap-3 mb-6"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)", transition: "all 0.7s ease 0.1s" }}
          >
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">
              {"Chennai's Trusted Builders"}
            </span>
          </div>

          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)", transition: "all 0.8s ease 0.2s" }}
          >
            Building Spaces.<br />
            <em className="not-italic" style={{ color: "var(--color-gold-light)" }}>Creating Legacies.</em>
          </h1>

          <p
            className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)", transition: "all 0.8s ease 0.35s" }}
          >
            Trusted home construction and interior solutions in Chennai, designed around your vision and built with quality.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-14"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)", transition: "all 0.8s ease 0.5s" }}
          >
            <Link to="/projects" className="btn-gold text-center">
              Explore Our Projects
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white justify-center"
            >
              <WhatsAppIcon />
              Talk to Us on WhatsApp
            </a>
          </div>

          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/50 text-xs uppercase tracking-widest"
            style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.65s" }}
          >
            {["Quality", "Experience", "Transparency", "Customer Focus"].map((t, i) => (
              <span key={t} className="flex items-center gap-4">
                {i > 0 && <span className="text-gold">•</span>}
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex">
        <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-white/60 rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}

// ─── TRUST STRIP ────────────────────────────────────────────────────────────
function TrustSection() {
  const icons = [
    <svg key="q" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    <svg key="p" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    <svg key="d" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    <svg key="c" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  ];

  return (
    <section className="bg-warm-beige border-y border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {COMPANY.trustPoints.map((point, i) => (
          <AnimateOnScroll key={point} delay={i * 80} className="flex items-center gap-4">
            <div
              className="w-12 h-12 flex items-center justify-center shrink-0 text-gold"
              style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
            >
              {icons[i]}
            </div>
            <span className="text-sm font-semibold text-charcoal leading-snug">{point}</span>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimateOnScroll direction="left">
            <div className="relative">
              <div className="img-zoom aspect-[4/5] overflow-hidden">
                <img src={ABOUT_IMG} alt="Modern home construction by Hayaghreev Homes" className="w-full h-full object-cover" />
              </div>
              <div
                className="absolute -bottom-6 -right-6 bg-gold p-6 text-charcoal hidden md:block"
                style={{ width: "160px" }}
              >
                <div className="font-serif text-3xl font-bold leading-none">80+</div>
                <div className="text-xs font-semibold uppercase tracking-widest mt-1">Years<br />Chennai Legacy</div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll direction="right" delay={100}>
            <div>
              <div className="section-label">
                <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Who We Are</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal leading-tight mb-6">
                Your Vision.<br />Our Expertise.
              </h2>
              <p className="text-muted leading-relaxed mb-5">
                Sri Hayaghreev Homes is a Chennai-based home construction and interior solutions company rooted in a deep commitment to quality, design, and customer satisfaction.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                With a proven track record in residential construction and interior design, we bring together skilled craftsmanship, modern design sensibilities, and transparent project execution. Every home we build reflects our pride in delivering spaces that families will cherish for generations.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-border">
                {COMPANY.stats.map((stat) => (
                  <StatCounter key={stat.value} value={stat.value} label={stat.label} sublabel={stat.sublabel} />
                ))}
              </div>

              <Link to="/about" className="btn-outline-dark inline-flex items-center gap-2">
                Know More About Us <ArrowRight />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ───────────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">What We Do</span>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-4">Our Services</h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            End-to-end construction and interior solutions tailored for your lifestyle and delivered with uncompromising quality.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <AnimateOnScroll key={service.id} delay={i * 80}>
              <div className="group bg-off-white card-hover overflow-hidden">
                <div className="img-zoom aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-2xl mb-3">{service.icon}</div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:gap-3 transition-all duration-200"
                  >
                    Learn More <ArrowRight />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ───────────────────────────────────────────────────────────────
function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "ongoing" | "upcoming" | "Residential">("all");
  const filters = [
    { key: "all", label: "All" },
    { key: "ongoing", label: "Ongoing" },
    { key: "upcoming", label: "Upcoming" },
    { key: "Residential", label: "Residential" },
  ] as const;

  const displayed = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "Residential") return p.type === "Residential";
    return p.status === filter;
  }).slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimateOnScroll className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label">
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Portfolio</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal">Our Projects</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className="text-xs font-semibold uppercase tracking-wider px-4 py-2 transition-all duration-200"
                style={{
                  backgroundColor: filter === f.key ? "var(--color-charcoal)" : "transparent",
                  color: filter === f.key ? "white" : "var(--color-muted)",
                  border: "1px solid",
                  borderColor: filter === f.key ? "var(--color-charcoal)" : "var(--color-border)",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <AnimateOnScroll key={project.id} delay={i * 100}>
              <div className="group bg-white card-hover overflow-hidden">
                <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 uppercase tracking-wider"
                    style={{
                      backgroundColor: project.status === "ongoing" ? "var(--color-gold)" : project.status === "upcoming" ? "#2D2D2D" : "#22C55E",
                      color: project.status === "upcoming" ? "white" : "var(--color-charcoal)",
                    }}
                  >
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-xs text-muted">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {project.location}
                    <span className="ml-auto">{project.type}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 leading-snug">{project.name}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-2">{project.description}</p>
                  <div className="flex gap-3">
                    <Link
                      to="/projects"
                      className="flex-1 text-center text-sm font-semibold py-2.5 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-200"
                    >
                      View Project
                    </Link>
                    <a
                      href={whatsappLink(`Hello Sri Hayaghreev Homes, I am interested in the project ${project.name}. Please share more details.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-semibold py-2.5 bg-gold text-charcoal hover:bg-gold-dark transition-all duration-200"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-12">
          <Link to="/projects" className="btn-outline-dark inline-flex items-center gap-2">
            View All Projects <ArrowRight />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ─── INTERIOR DESIGN ────────────────────────────────────────────────────────
function InteriorSection() {
  const featured = INTERIOR_GALLERY.slice(0, 5);
  return (
    <section className="py-24 md:py-32 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimateOnScroll className="max-w-xl mb-16">
          <div className="section-label">
            <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Interior Solutions</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal leading-tight mb-4">
            Interiors That<br /><em style={{ fontStyle: "normal", color: "var(--color-gold)" }}>Feel Like Home</em>
          </h2>
          <p className="text-muted leading-relaxed">
            From living rooms to bedrooms, kitchens to dining spaces — every corner designed to reflect your personality and lifestyle.
          </p>
        </AnimateOnScroll>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {featured.map((item, i) => (
            <AnimateOnScroll
              key={item.id}
              delay={i * 70}
              className={i === 0 ? "md:row-span-2 md:col-span-1" : ""}
            >
              <div className="img-zoom group overflow-hidden relative" style={{ height: i === 0 ? "100%" : undefined }}>
                <div className={`overflow-hidden ${i === 0 ? "h-full min-h-[320px] md:min-h-0" : "aspect-[4/3]"}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-xs text-gold uppercase tracking-widest">{item.category}</div>
                    <div className="text-white text-sm font-medium mt-0.5">{item.title}</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center">
          <Link to="/interiors" className="btn-outline-dark inline-flex items-center gap-2">
            Explore Interior Solutions <ArrowRight />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ─── WHY CHOOSE US ──────────────────────────────────────────────────────────
const WHY_US = [
  { icon: "🏆", title: "Quality-Focused Construction", desc: "Premium materials and rigorous quality checks at every stage of construction." },
  { icon: "⚙️", title: "Professional Project Execution", desc: "Systematic project management ensuring timely completion and budget adherence." },
  { icon: "💬", title: "Transparent Communication", desc: "Regular updates, clear documentation, and open communication throughout the project." },
  { icon: "✨", title: "Modern Design Approach", desc: "Contemporary architectural sensibilities blended with functional, livable design." },
  { icon: "👷", title: "Experienced Team", desc: "A skilled team of architects, engineers, and craftspeople with deep expertise." },
  { icon: "🤝", title: "Customer-Centric Service", desc: "Your satisfaction drives every decision we make, from concept to handover." },
];

function WhyChooseUsSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(26,26,26,0.92),rgba(26,26,26,0.92)), url('https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=1600&q=60&auto=format&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Our Strengths</span>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-4">Why Choose Us</h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            {"We don't just build homes — we build trust, quality, and lasting relationships with every project."}
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 80}>
              <div
                className="p-7 transition-all duration-300 group"
                style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,168,76,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.03)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)"; }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="flex items-start gap-2 mb-3">
                  <div className="mt-1 shrink-0 text-gold"><CheckIcon /></div>
                  <h3 className="font-serif text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ───────────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Testimonials</span>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted max-w-lg mx-auto text-sm leading-relaxed">
            <span className="text-gold font-medium">Note:</span> The following are placeholder testimonials. Replace with verified customer reviews.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {TESTIMONIALS.map((t, i) => (
            <AnimateOnScroll key={t.id} delay={i * 80}>
              <div className="bg-warm-beige p-8 card-hover relative">
                <div className="font-serif text-6xl text-gold/20 absolute top-4 right-6 leading-none select-none">"</div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="text-charcoal text-sm leading-relaxed mb-6 relative z-10 italic">
                  "{t.review}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-charcoal text-sm">{t.name}</div>
                  <div className="text-muted text-xs mt-0.5">{t.project}</div>
                  {t.placeholder && (
                    <div className="text-xs text-gold/60 mt-1 italic">Placeholder — replace with verified review</div>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center">
          <a
            href="https://www.google.com/search?q=Sri+Hayaghreev+Homes+Chennai+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal border border-border px-6 py-3 hover:border-charcoal transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 48 48" fill="none">
              <path d="M44 24c0-11-9-20-20-20S4 13 4 24s9 20 20 20c8 0 14.6-4.5 18-11H24v-8h19.8c.1 1 .2 2 .2 3z" fill="#4285F4"/>
              <path d="M4 24C4 13 13 4 24 4c5 0 9.5 1.8 13 4.8l-6 6C29.2 13 26.7 12 24 12c-6.6 0-12 5.4-12 12s5.4 12 12 12c5.8 0 10.7-4 12-9.3H24v-8h19.8c.1 1 .2 2 .2 3 0 11-9 20-20 20S4 35 4 24z" fill="transparent"/>
            </svg>
            View Google Reviews
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ─── CONTACT CTA ─────────────────────────────────────────────────────────────
function ContactCTASection() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <AnimateOnScroll direction="left">
            <div className="section-label">
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Get In Touch</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal leading-tight mb-6">
              {"Let's Build Your\nDream Home"}
            </h2>
            <p className="text-muted leading-relaxed mb-10">
              Share your vision with us. Our team will reach out to understand your requirements and guide you through the construction or design journey.
            </p>

            <div className="space-y-6">
              {[
                { label: "Call Us", value: COMPANY.phone, href: COMPANY.phoneTel },
                { label: "WhatsApp Us", value: COMPANY.whatsapp, href: whatsappLink() },
                { label: "Email Us", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { label: "Office", value: COMPANY.address, href: COMPANY.mapUrl },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="w-1 h-full min-h-8 bg-gold shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-0.5">{item.label}</div>
                    <div className="text-charcoal text-sm group-hover:text-gold transition-colors duration-200">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 btn-gold inline-flex items-center gap-2"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll direction="right" delay={150}>
            <div className="bg-white p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-gold text-5xl mb-4">✓</div>
                  <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">Thank You!</h3>
                  <p className="text-muted leading-relaxed mb-6">Your enquiry has been received. Our team will get back to you shortly.</p>
                  <a
                    href={whatsappLink(`Hello Sri Hayaghreev Homes, I just submitted a form. My name is ${form.name} and I am interested in ${form.service || "your services"}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-2"
                  >
                    <WhatsAppIcon />
                    Continue on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-2xl font-medium text-charcoal mb-6">Request a Consultation</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-2 block">Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full border border-border px-4 py-3 text-sm text-charcoal bg-off-white focus:outline-none focus:border-gold transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-2 block">Phone *</label>
                      <input
                        required
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full border border-border px-4 py-3 text-sm text-charcoal bg-off-white focus:outline-none focus:border-gold transition-colors duration-200"
                        placeholder="Your number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-2 block">Interested Service *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                      className="w-full border border-border px-4 py-3 text-sm text-charcoal bg-off-white focus:outline-none focus:border-gold transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      <option>Construction</option>
                      <option>Interior Design</option>
                      <option>Project Enquiry</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-2 block">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full border border-border px-4 py-3 text-sm text-charcoal bg-off-white focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full text-center">
                    Request a Consultation
                  </button>
                  <p className="text-xs text-muted text-center">
                    By submitting, you agree to our{" "}
                    <Link to="/privacy" className="text-gold hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <InteriorSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactCTASection />
    </>
  );
}
