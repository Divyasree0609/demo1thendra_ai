export const COMPANY = {
  name: "Sri Hayaghreev Homes",
  shortName: "Hayaghreev Homes",
  tagline: "Building Spaces. Creating Legacies.",
  // Update with verified company number
  phone: "+91-XXXXXXXXXX",
  phoneTel: "tel:+91XXXXXXXXXX",
  // Update with verified WhatsApp number
  whatsapp: "+91-XXXXXXXXXX",
  whatsappNumber: "91XXXXXXXXXX",
  whatsappMsg:
    "Hello Sri Hayaghreev Homes, I am interested in your construction/interior services. I would like to know more about your projects.",
  // Update with verified company email
  email: "info@hayaghreevhomes.com",
  // Update with verified company address
  address: "[Company Address], Chennai, Tamil Nadu, India",
  city: "Chennai, Tamil Nadu",
  // Update with actual Google Maps embed/link
  mapUrl: "https://www.google.com/maps",
  mapEmbedUrl: "",
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },
  stats: [
    { value: "80+", label: "Years", sublabel: "Chennai Legacy" },
    { value: "100+", label: "Projects", sublabel: "Delivered" },
    { value: "100%", label: "Quality First", sublabel: "Construction Approach" },
  ],
  trustPoints: [
    "Quality Construction",
    "Professional Execution",
    "Thoughtful Design",
    "Customer-Focused Service",
  ],
};

export function whatsappLink(message?: string) {
  const msg = encodeURIComponent(message ?? COMPANY.whatsappMsg);
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${msg}`;
}
