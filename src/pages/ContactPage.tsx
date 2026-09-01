import { useState } from "react";
import { Link } from "react-router";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { COMPANY, whatsappLink } from "../data/config";

const HERO_BG = "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1600&q=80&auto=format&fit=crop";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", location: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <span className="text-gold">Contact Us</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-white">Get In Touch</h1>
        </div>
      </div>

      {/* Contact section */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <AnimateOnScroll direction="left">
              <div className="section-label">
                <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Contact</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal leading-tight mb-6">
                {"Let's Build Your\nDream Home Together"}
              </h2>
              <p className="text-muted leading-relaxed mb-10">
                Have questions about your project? Ready to start building? Reach out to us and our team will respond promptly.
              </p>

              <div className="space-y-8 mb-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Phone & WhatsApp</p>
                  <div className="space-y-2">
                    <a href={COMPANY.phoneTel} className="flex items-center gap-3 text-charcoal hover:text-gold transition-colors group">
                      <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-gold transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.69A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                      </div>
                      <div>
                        <div className="text-xs text-muted">Call Us</div>
                        <div className="font-medium">{COMPANY.phone}</div>
                      </div>
                    </a>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-charcoal hover:text-gold transition-colors group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-gold transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25D366" }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </div>
                      <div>
                        <div className="text-xs text-muted">WhatsApp</div>
                        <div className="font-medium">{COMPANY.whatsapp}</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Email</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 text-charcoal hover:text-gold transition-colors group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-gold transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <div className="text-xs text-muted">Email Us</div>
                      <div className="font-medium">{COMPANY.email}</div>
                    </div>
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Office Address</p>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center border border-border shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <div className="text-xs text-muted mb-1">Address</div>
                      <div className="text-charcoal font-medium text-sm leading-relaxed">{COMPANY.address}</div>
                      <a
                        href={COMPANY.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold text-xs font-medium mt-2 inline-flex items-center gap-1 hover:underline"
                      >
                        Get Directions
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                className="h-52 flex items-center justify-center border border-border"
                style={{ backgroundColor: "var(--color-warm-beige)" }}
              >
                <div className="text-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" className="mx-auto mb-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <p className="text-muted text-sm">Interactive map — Add Google Maps embed URL in config.ts</p>
                  <a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer" className="text-gold text-xs mt-1 inline-block hover:underline">
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll direction="right" delay={100}>
              <div className="bg-warm-beige p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div
                      className="w-16 h-16 flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: "var(--color-gold)", color: "var(--color-charcoal)" }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">Enquiry Received!</h3>
                    <p className="text-muted leading-relaxed mb-6">
                      Thank you for reaching out. Our team will contact you within 24 hours.
                    </p>
                    <a
                      href={whatsappLink(`Hello Sri Hayaghreev Homes, I just submitted an enquiry. My name is ${form.name}, phone ${form.phone}. I am interested in ${form.service || "your services"}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold inline-flex items-center gap-2"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Follow Up on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">Request a Consultation</h3>
                    <p className="text-muted text-sm mb-6">Fill in your details and we will get back to you shortly.</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-2 block">Name *</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className="w-full border border-border px-4 py-3 text-sm bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-2 block">Phone *</label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          className="w-full border border-border px-4 py-3 text-sm bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-2 block">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full border border-border px-4 py-3 text-sm bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-2 block">Interested Service *</label>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                        className="w-full border border-border px-4 py-3 text-sm bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option>Construction</option>
                        <option>Interior Design</option>
                        <option>Project Enquiry</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-2 block">Project Location</label>
                      <input
                        value={form.location}
                        onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                        className="w-full border border-border px-4 py-3 text-sm bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                        placeholder="e.g. Anna Nagar, Chennai"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-2 block">Message</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full border border-border px-4 py-3 text-sm bg-white text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="Tell us about your project or requirements..."
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
    </main>
  );
}
