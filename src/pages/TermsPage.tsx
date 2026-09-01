import { Link } from "react-router";

export default function TermsPage() {
  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex items-center gap-2 text-muted text-xs mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gold">Terms & Conditions</span>
        </div>

        <div className="section-label mb-4">
          <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">Legal</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-6">Terms & Conditions</h1>
        <p className="text-muted text-sm mb-12">Last updated: January 2026</p>

        <div className="space-y-10">
          {[
            {
              title: "1. Acceptance of Terms",
              body: "By accessing and using the Sri Hayaghreev Homes website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website.",
            },
            {
              title: "2. Information Accuracy",
              body: "Sri Hayaghreev Homes strives to ensure that all information on this website is accurate and up to date. However, the company does not warrant the completeness or accuracy of the information. Project details, specifications, and pricing are subject to change without notice. Kindly confirm all details directly with our team.",
            },
            {
              title: "3. No Warranty",
              body: "This website and its content are provided 'as is' without warranty of any kind, express or implied. Sri Hayaghreev Homes does not warrant that this site will be uninterrupted, error-free, or free of viruses or other harmful components.",
            },
            {
              title: "4. Services and Pricing",
              body: "All project pricing, specifications, and service details shared on this website are indicative only and not binding. Formal agreements, contracts, and pricing will be provided through official documentation directly. Any pricing or specification information on this website is subject to change.",
            },
            {
              title: "5. Project Information",
              body: "Project names, RERA numbers, amenities, floor plans, and completion timelines are placeholder or indicative values where noted. The company is not responsible for decisions made based solely on website information. Kindly verify all project details directly with our sales team.",
            },
            {
              title: "6. Intellectual Property",
              body: "All content on this website, including text, images, logos, and design elements, is the property of Sri Hayaghreev Homes or its licensors and is protected by applicable intellectual property laws. Reproduction, distribution, or commercial use of this content without written permission is prohibited.",
            },
            {
              title: "7. Third-Party Links",
              body: "This website may contain links to third-party websites including WhatsApp and Google Maps. Sri Hayaghreev Homes is not responsible for the content, privacy policies, or practices of any third-party websites.",
            },
            {
              title: "8. Limitation of Liability",
              body: "Sri Hayaghreev Homes shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use this website or its content.",
            },
            {
              title: "9. Governing Law",
              body: "These Terms and Conditions are governed by the laws of India and the jurisdiction of the courts of Chennai, Tamil Nadu.",
            },
            {
              title: "10. Changes to Terms",
              body: "Sri Hayaghreev Homes reserves the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">{section.title}</h2>
              <p className="text-muted leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex gap-4 flex-wrap">
          <Link to="/contact" className="btn-gold inline-block">Contact Us</Link>
          <Link to="/privacy" className="btn-outline-dark inline-block">Privacy Policy</Link>
        </div>
      </div>
    </main>
  );
}
