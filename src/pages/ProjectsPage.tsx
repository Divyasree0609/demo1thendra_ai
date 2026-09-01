import { useState } from "react";
import { Link } from "react-router";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { PROJECTS, type ProjectStatus } from "../data/projects";
import { whatsappLink } from "../data/config";

const HERO_BG = "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?w=1600&q=80&auto=format&fit=crop";

type Filter = "all" | "ongoing" | "upcoming" | "completed";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "ongoing", label: "Ongoing" },
  { key: "upcoming", label: "Upcoming" },
  { key: "completed", label: "Completed" },
];

const STATUS_COLORS: Record<ProjectStatus, { bg: string; text: string }> = {
  ongoing: { bg: "var(--color-gold)", text: "var(--color-charcoal)" },
  upcoming: { bg: "#2D2D2D", text: "white" },
  completed: { bg: "#22C55E", text: "white" },
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<string | null>(null);

  const displayed = PROJECTS.filter((p) => filter === "all" || p.status === filter);
  const project = selected ? PROJECTS.find((p) => p.id === selected) : null;

  return (
    <main className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <div
        className="relative h-72 md:h-96 flex items-end"
        style={{ backgroundImage: `url('${HERO_BG}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-12 w-full">
          <div className="flex items-center gap-2 text-white/50 text-xs mb-3">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Our Projects</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-white">Our Projects</h1>
        </div>
      </div>

      {/* Filters + Grid */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Filter bar */}
          <AnimateOnScroll className="flex flex-wrap gap-3 mb-12">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className="text-xs font-semibold uppercase tracking-wider px-5 py-2.5 transition-all duration-200"
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
          </AnimateOnScroll>

          {displayed.length === 0 && (
            <div className="text-center py-20 text-muted">No projects in this category yet.</div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map((proj, i) => {
              const statusStyle = STATUS_COLORS[proj.status];
              return (
                <AnimateOnScroll key={proj.id} delay={i * 70}>
                  <div className="group bg-white card-hover overflow-hidden">
                    <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                      <img
                        src={proj.image}
                        alt={proj.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 uppercase tracking-wider"
                        style={{ backgroundColor: statusStyle.bg, color: statusStyle.text }}
                      >
                        {proj.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted mb-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {proj.location}
                        <span className="ml-auto border border-border px-2 py-0.5">{proj.type}</span>
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 leading-snug">{proj.name}</h3>
                      <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-2">{proj.description}</p>

                      {proj.highlights.length > 0 && (
                        <ul className="mb-5 space-y-1.5">
                          {proj.highlights.slice(0, 3).map((h) => (
                            <li key={h} className="flex items-center gap-2 text-xs text-charcoal">
                              <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelected(proj.id)}
                          className="flex-1 text-center text-sm font-semibold py-2.5 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-200"
                        >
                          View Project
                        </button>
                        <a
                          href={whatsappLink(`Hello Sri Hayaghreev Homes, I am interested in the project ${proj.name}. Please share more details.`)}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {project && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-6 pb-6 px-4 overflow-y-auto"
          style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}
        >
          <div className="bg-white w-full max-w-3xl relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-charcoal text-white hover:bg-gold hover:text-charcoal transition-colors"
            >
              ×
            </button>

            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={project.gallery[0] || project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted mb-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {project.location}
                    <span>·</span>
                    <span>{project.type}</span>
                    {project.year && <><span>·</span><span>{project.year}</span></>}
                  </div>
                  <h2 className="font-serif text-3xl font-medium text-charcoal">{project.name}</h2>
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 uppercase tracking-wider shrink-0"
                  style={{ backgroundColor: STATUS_COLORS[project.status].bg, color: STATUS_COLORS[project.status].text }}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-muted leading-relaxed mb-6">{project.description}</p>

              {project.highlights.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Project Highlights</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-charcoal">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.amenities.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.amenities.map((a) => (
                      <span key={a} className="text-xs px-3 py-1.5 border border-border text-charcoal">{a}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 flex-wrap pt-4 border-t border-border">
                <a
                  href={whatsappLink(`Hello Sri Hayaghreev Homes, I am interested in the project ${project.name}. Please share more details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Enquire on WhatsApp
                </a>
                <Link to="/contact" className="btn-outline-dark">Schedule a Visit</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
