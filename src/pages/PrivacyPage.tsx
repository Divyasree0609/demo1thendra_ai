import { Link } from "react-router";

export default function PrivacyPage() {
  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex items-center gap-2 text-muted text-xs mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gold">Privacy Policy</span>
        </div>

        <div className="section-label mb-4">
          <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Legal</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-6">Privacy Policy</h1>
        <p className="text-muted text-sm mb-12">Last updated: January 2026</p>

        <div className="prose max-w-none space-y-10">
          {[
            {
              title: "1. Information We Collect",
              body: "We collect information that you provide to us directly, such as your name, phone number, email address, and project requirements when you fill out our contact form or reach out to us via WhatsApp, phone, or email. We may also collect non-personal technical information through standard web analytics.",
            },
            {
              title: "2. How We Use Your Information",
              body: "We use the information we collect to respond to your enquiries, provide construction and interior design services, send you project updates and relevant information, and improve our website and services. We do not use your information for purposes unrelated to our services.",
            },
            {
              title: "3. Information Sharing",
              body: "Sri Hayaghreev Homes does not sell, trade, or rent your personal information to third parties. We may share your information with trusted service partners involved in delivering our construction or interior design services, only as required and with appropriate confidentiality obligations.",
            },
            {
              title: "4. Data Security",
              body: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
            },
            {
              title: "5. WhatsApp and Phone Communications",
              body: "By contacting us via WhatsApp or phone, you consent to communication via those channels. Messages sent through WhatsApp are subject to WhatsApp's own privacy policy. We will not share your contact details with third parties without your consent.",
            },
            {
              title: "6. Cookies",
              body: "Our website may use cookies and similar technologies to improve your browsing experience and analyse website traffic. You can control cookie settings through your browser preferences.",
            },
            {
              title: "7. Your Rights",
              body: "You have the right to access, correct, or request deletion of your personal data that we hold. To exercise these rights, please contact us at the email address below.",
            },
            {
              title: "8. Contact",
              body: "For any privacy-related queries, please contact Sri Hayaghreev Homes via email or by visiting our Contact page.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">{section.title}</h2>
              <p className="text-muted leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/contact" className="btn-gold inline-block">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
