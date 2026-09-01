import { Link } from "react-router";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { COMPANY, whatsappLink } from "../data/config";

const ABOUT_HERO = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80&auto=format&fit=crop";
const TEAM_IMG = "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&q=80&auto=format&fit=crop";
const TEAM_IMG2 = "https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?w=800&q=80&auto=format&fit=crop";

const VALUES = [
  { icon: "🏛️", title: "Heritage & Trust", desc: "Rooted in Chennai, we bring a legacy of reliable construction and craftsmanship that families have trusted." },
  { icon: "🎯", title: "Precision in Execution", desc: "Every project is executed with careful planning, skilled teams, and rigorous quality control standards." },
  { icon: "🌿", title: "Thoughtful Design", desc: "We believe homes should be both beautiful and livable — design that serves you every day." },
  { icon: "🤝", title: "Client Partnership", desc: "We treat every client as a partner, maintaining transparency and collaboration from start to finish." },
];

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <div
        className="relative h-72 md:h-96 flex items-end"
        style={{ backgroundImage: `url('${ABOUT_HERO}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-12 w-full">
          <div className="flex items-center gap-2 text-white/50 text-xs mb-3">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">About Us</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-white">About Hayaghreev Homes</h1>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="left">
              <div className="img-zoom aspect-[4/5] overflow-hidden">
                <img src={TEAM_IMG} alt="Hayaghreev Homes construction project" className="w-full h-full object-cover" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={100}>
              <div className="section-label">
                <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Our Story</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal leading-tight mb-6">
                Building Chennai.<br />One Home at a Time.
              </h2>
              <p className="text-muted leading-relaxed mb-5">
                Sri Hayaghreev Homes was founded with a singular purpose: to build homes that truly reflect the dreams and aspirations of Chennai families. Rooted in the values of quality, integrity, and craftsmanship, we have grown into a trusted name in residential construction and interior design.
              </p>
              <p className="text-muted leading-relaxed mb-5">
                Our approach combines traditional construction wisdom with modern design sensibilities and building techniques. We understand that a home is more than just walls and roof — it is the space where life's most meaningful moments unfold.
              </p>
              <p className="text-muted leading-relaxed mb-10">
                From concept to handover, our team of experienced architects, engineers, and designers work collaboratively to bring your vision to life — on time, within budget, and beyond expectations.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-border">
                {COMPANY.stats.map((stat) => (
                  <div key={stat.value} className="text-center">
                    <div className="font-serif text-3xl font-bold text-gold mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-charcoal">{stat.label}</div>
                    <div className="text-xs text-muted">{stat.sublabel}</div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
                Start Your Project
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Our Values</span>
              <div className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-4">What We Stand For</h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 80}>
                <div className="bg-white p-8 card-hover">
                  <div className="text-4xl mb-5">{v.icon}</div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Second image section */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div className="section-label">
                <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Our Approach</span>
              </div>
              <h2 className="font-serif text-4xl font-medium text-charcoal leading-tight mb-6">
                From Blueprint to Beautiful Home
              </h2>
              <p className="text-muted leading-relaxed mb-5">
                Every project at Hayaghreev Homes begins with listening — understanding your lifestyle, needs, and aspirations. Our design and construction teams then collaborate to translate that understanding into detailed plans and exceptional execution.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Initial consultation and site evaluation",
                  "Architectural and interior design planning",
                  "Vastu and regulatory compliance",
                  "Quality construction with premium materials",
                  "Regular progress updates and transparency",
                  "Post-construction support and assistance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-charcoal">
                    <span className="w-5 h-5 flex items-center justify-center bg-gold/10 shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={100}>
              <div className="img-zoom aspect-[4/5] overflow-hidden">
                <img src={TEAM_IMG2} alt="Luxury home by Hayaghreev Homes" className="w-full h-full object-cover" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
