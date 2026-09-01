import { Link } from "react-router";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { SERVICES } from "../data/projects";
import { whatsappLink } from "../data/config";

const HERO_BG = "https://images.unsplash.com/photo-1777919393730-463e2c0b7f4c?w=1600&q=80&auto=format&fit=crop";

const PROCESS = [
  { step: "01", title: "Initial Consultation", desc: "We meet to understand your vision, requirements, and budget. We listen first." },
  { step: "02", title: "Design & Planning", desc: "Our architects create detailed plans, elevations, and 3D visualizations for your approval." },
  { step: "03", title: "Approvals & Compliance", desc: "We handle all regulatory approvals, Vastu compliance, and legal documentation." },
  { step: "04", title: "Construction Begins", desc: "Quality construction begins with premium materials and daily site supervision." },
  { step: "05", title: "Progress Updates", desc: "Regular updates, site visits, and transparent communication throughout." },
  { step: "06", title: "Handover", desc: "Final inspection, punch-list completion, and proud handover of your dream home." },
];

export default function ServicesPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <div
        className="relative h-72 md:h-96 flex items-end"
        style={{ backgroundImage: `url('${HERO_BG}')`, backgroundSize: "cover", backgroundPosition: "center top" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-12 w-full">
          <div className="flex items-center gap-2 text-white/50 text-xs mb-3">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Our Services</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-white">Our Services</h1>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">What We Offer</span>
              <div className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-4">
              Comprehensive Building Solutions
            </h2>
            <p className="text-muted max-w-xl mx-auto leading-relaxed">
              From design to construction and interior finishing — we provide end-to-end solutions under one trusted roof.
            </p>
          </AnimateOnScroll>

          <div className="space-y-20">
            {SERVICES.map((service, i) => (
              <AnimateOnScroll key={service.id} delay={0}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""}`}>
                  <div className="img-zoom aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image.replace("w=600", "w=900")}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <div className="section-label">
                      <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">{service.title}</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal mb-5 leading-tight">{service.title}</h2>
                    <p className="text-muted leading-relaxed mb-8">{service.description}</p>
                    <ul className="space-y-3 mb-10">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-charcoal">
                          <span className="w-5 h-5 flex items-center justify-center bg-gold/10 shrink-0">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4 flex-wrap">
                      <Link to="/contact" className="btn-gold">Request a Quote</Link>
                      <a
                        href={whatsappLink(`Hello, I am interested in your ${service.title} services. Please share more details.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-dark inline-flex items-center gap-2"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--color-charcoal)" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">How We Work</span>
              <div className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-4">Our Process</h2>
            <p className="text-white/55 max-w-xl mx-auto leading-relaxed">
              A clear, collaborative process ensures your project is delivered to the highest standard.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 70}>
                <div
                  className="p-7 border transition-all duration-300"
                  style={{ borderColor: "rgba(201,168,76,0.15)", backgroundColor: "rgba(255,255,255,0.03)" }}
                >
                  <div className="font-serif text-5xl font-bold text-gold/20 mb-4 leading-none">{step.step}</div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
