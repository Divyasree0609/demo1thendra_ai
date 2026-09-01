import { Link } from "react-router";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { INTERIOR_GALLERY } from "../data/projects";
import { whatsappLink } from "../data/config";

const HERO_BG = "https://images.unsplash.com/photo-1704040686428-7534b262d0d8?w=1600&q=80&auto=format&fit=crop";

const INTERIOR_SERVICES = [
  {
    title: "Living Spaces",
    desc: "Elegant, functional living rooms and drawing rooms designed for comfort and visual delight.",
    image: "https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Bedrooms",
    desc: "Serene bedroom designs that balance privacy, warmth, and modern aesthetics for restful living.",
    image: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Modular Kitchens",
    desc: "Smart, practical kitchens designed for the Indian culinary tradition — premium modular solutions.",
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Dining Spaces",
    desc: "Beautiful dining areas that create the perfect setting for family meals and cherished moments.",
    image: "https://images.unsplash.com/photo-1725257928373-dc6d2ac7b145?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Modern Interiors",
    desc: "Clean lines, neutral palettes, and premium materials for a contemporary, sophisticated look.",
    image: "https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Traditional Interiors",
    desc: "Warmth, culture, and craftsmanship — interiors that honour Chennai's rich design heritage.",
    image: "https://images.unsplash.com/photo-1648881806148-e5c51179c826?w=600&q=80&auto=format&fit=crop",
  },
];

export default function InteriorsPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <div
        className="relative h-72 md:h-96 flex items-end"
        style={{ backgroundImage: `url('${HERO_BG}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-12 w-full">
          <div className="flex items-center gap-2 text-white/50 text-xs mb-3">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Interior Design</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-white">Interior Design</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Interior Solutions</span>
              <div className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-5">
              Interiors That<br />
              <em style={{ fontStyle: "normal", color: "var(--color-gold)" }}>Feel Like Home</em>
            </h2>
            <p className="text-muted leading-relaxed">
              Every interior we design is a unique reflection of you — your personality, your lifestyle, and your aspirations. From clean modern aesthetics to warm traditional touches, we bring your vision to life with precision and care.
            </p>
          </AnimateOnScroll>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {INTERIOR_GALLERY.map((item, i) => (
              <AnimateOnScroll key={item.id} delay={i * 60}>
                <div className="group img-zoom relative overflow-hidden">
                  <div className={`overflow-hidden ${i === 0 || i === 3 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <div className="text-xs text-gold uppercase tracking-widest">{item.category}</div>
                      <div className="text-white font-medium">{item.title}</div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Services */}
      <section className="py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">What We Design</span>
              <div className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-serif text-4xl font-medium text-charcoal mb-4">Every Space, Designed Right</h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {INTERIOR_SERVICES.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 60}>
                <div className="group bg-white card-hover overflow-hidden">
                  <div className="img-zoom aspect-[16/10] overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">{s.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center">
            <div className="bg-charcoal text-white p-10 md:p-14 max-w-3xl mx-auto">
              <h3 className="font-serif text-3xl font-medium mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Share your space details with us and our interior design team will reach out with ideas, recommendations, and a personalised consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-gold text-center">Book a Consultation</Link>
                <a
                  href={whatsappLink("Hello Sri Hayaghreev Homes, I am interested in your interior design services. Please share more details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white text-center"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
