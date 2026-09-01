import { useState } from "react";
import { Link } from "react-router";
import AnimateOnScroll from "../components/AnimateOnScroll";

const HERO_BG = "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=1600&q=80&auto=format&fit=crop";

const GALLERY_ITEMS = [
  { id: 1, category: "Construction", image: "https://images.unsplash.com/photo-1777919393730-463e2c0b7f4c?w=800&q=80&auto=format&fit=crop", title: "Construction Project" },
  { id: 2, category: "Interiors", image: "https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?w=800&q=80&auto=format&fit=crop", title: "Elegant Living Room" },
  { id: 3, category: "Completed Projects", image: "https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?w=800&q=80&auto=format&fit=crop", title: "Luxury Villa" },
  { id: 4, category: "Interiors", image: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=800&q=80&auto=format&fit=crop", title: "Master Bedroom" },
  { id: 5, category: "Completed Projects", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&auto=format&fit=crop", title: "Modern Residence" },
  { id: 6, category: "Interiors", image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&q=80&auto=format&fit=crop", title: "Modular Kitchen" },
  { id: 7, category: "Ongoing Projects", image: "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?w=800&q=80&auto=format&fit=crop", title: "Ongoing Project" },
  { id: 8, category: "Interiors", image: "https://images.unsplash.com/photo-1704040686428-7534b262d0d8?w=800&q=80&auto=format&fit=crop", title: "Living Space" },
  { id: 9, category: "Completed Projects", image: "https://images.unsplash.com/photo-1628744448839-a475cc0e90c3?w=800&q=80&auto=format&fit=crop", title: "Completed Home" },
  { id: 10, category: "Interiors", image: "https://images.unsplash.com/photo-1725257928373-dc6d2ac7b145?w=800&q=80&auto=format&fit=crop", title: "Dining Area" },
  { id: 11, category: "Construction", image: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=800&q=80&auto=format&fit=crop", title: "Architecture" },
  { id: 12, category: "Interiors", image: "https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?w=800&q=80&auto=format&fit=crop", title: "Bedroom Design" },
];

const CATS = ["All", "Construction", "Interiors", "Completed Projects", "Ongoing Projects"];

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = cat === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === cat);
  const lightboxItem = lightbox !== null ? GALLERY_ITEMS.find((g) => g.id === lightbox) : null;

  const prev = () => {
    if (lightbox === null) return;
    const idx = items.findIndex((g) => g.id === lightbox);
    setLightbox(items[(idx - 1 + items.length) % items.length].id);
  };
  const next = () => {
    if (lightbox === null) return;
    const idx = items.findIndex((g) => g.id === lightbox);
    setLightbox(items[(idx + 1) % items.length].id);
  };

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
            <span className="text-gold">Gallery</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-white">Project Gallery</h1>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Category filter */}
          <AnimateOnScroll className="flex flex-wrap gap-3 mb-12">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="text-xs font-semibold uppercase tracking-wider px-5 py-2.5 transition-all duration-200"
                style={{
                  backgroundColor: cat === c ? "var(--color-charcoal)" : "transparent",
                  color: cat === c ? "white" : "var(--color-muted)",
                  border: "1px solid",
                  borderColor: cat === c ? "var(--color-charcoal)" : "var(--color-border)",
                }}
              >
                {c}
              </button>
            ))}
          </AnimateOnScroll>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {items.map((item, i) => (
              <AnimateOnScroll key={item.id} delay={i * 40} className="break-inside-avoid">
                <div
                  className="group img-zoom overflow-hidden relative cursor-pointer"
                  onClick={() => setLightbox(item.id)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover"
                    style={{ aspectRatio: i % 3 === 0 ? "4/5" : i % 3 === 1 ? "16/10" : "4/3" }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <div className="w-10 h-10 border border-white/80 flex items-center justify-center mx-auto mb-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      </div>
                      <div className="text-white text-xs font-medium">{item.title}</div>
                      <div className="text-gold text-xs mt-0.5">{item.category}</div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white text-2xl z-10"
          >
            ×
          </button>
          <button
            onClick={prev}
            className="absolute left-4 md:left-8 w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:border-gold hover:text-gold transition-colors z-10"
          >
            ‹
          </button>
          <div className="max-w-4xl max-h-screen p-12 md:p-20 w-full text-center">
            <img
              src={lightboxItem.image.replace("w=800", "w=1200")}
              alt={lightboxItem.title}
              className="max-w-full max-h-[75vh] object-contain mx-auto"
            />
            <div className="mt-4">
              <div className="text-white font-medium">{lightboxItem.title}</div>
              <div className="text-gold text-sm mt-1">{lightboxItem.category}</div>
            </div>
          </div>
          <button
            onClick={next}
            className="absolute right-4 md:right-8 w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:border-gold hover:text-gold transition-colors z-10"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
