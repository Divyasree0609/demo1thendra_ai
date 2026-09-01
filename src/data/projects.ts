export type ProjectStatus = "ongoing" | "upcoming" | "completed";
export type ProjectType = "Residential" | "Villa" | "Apartment" | "Interior";

export interface Project {
  id: string;
  name: string;
  location: string;
  type: ProjectType;
  status: ProjectStatus;
  description: string;
  image: string;
  gallery: string[];
  highlights: string[];
  amenities: string[];
  year?: number;
}

const BASE = "https://images.unsplash.com";

export const PROJECTS: Project[] = [
  {
    id: "project-alpha",
    name: "[Project Name — To Be Updated]",
    location: "T Nagar, Chennai",
    type: "Residential",
    status: "ongoing",
    description:
      "A thoughtfully designed premium residential project crafted for modern living. Quality construction with attention to structural excellence and aesthetic detail.",
    image: `${BASE}/photo-1756435292384-1bf32eff7baf?w=800&q=80&auto=format&fit=crop`,
    gallery: [
      `${BASE}/photo-1756435292384-1bf32eff7baf?w=1200&q=80&auto=format&fit=crop`,
      `${BASE}/photo-1628744448840-55bdb2497bd4?w=1200&q=80&auto=format&fit=crop`,
      `${BASE}/photo-1613490493576-7fde63acd811?w=1200&q=80&auto=format&fit=crop`,
    ],
    highlights: [
      "Premium structural quality",
      "Modern architectural design",
      "Vastu-compliant layout",
      "Quality finishes throughout",
    ],
    amenities: ["Parking", "Security", "Power Backup", "Water Supply"],
  },
  {
    id: "project-beta",
    name: "[Project Name — To Be Updated]",
    location: "Anna Nagar, Chennai",
    type: "Residential",
    status: "ongoing",
    description:
      "A premium residential development focused on spacious layouts, quality construction, and thoughtful design for comfortable family living.",
    image: `${BASE}/photo-1721815693498-cc28507c0ba2?w=800&q=80&auto=format&fit=crop`,
    gallery: [
      `${BASE}/photo-1721815693498-cc28507c0ba2?w=1200&q=80&auto=format&fit=crop`,
      `${BASE}/photo-1628744448839-a475cc0e90c3?w=1200&q=80&auto=format&fit=crop`,
    ],
    highlights: [
      "Spacious floor plans",
      "Quality construction",
      "Modern interiors",
      "Prime location",
    ],
    amenities: ["Parking", "Lift", "Security", "Power Backup"],
  },
  {
    id: "project-gamma",
    name: "[Project Name — To Be Updated]",
    location: "Velachery, Chennai",
    type: "Residential",
    status: "upcoming",
    description:
      "An upcoming residential project bringing together elegant architecture, premium materials, and superior construction quality.",
    image: `${BASE}/photo-1628744448840-55bdb2497bd4?w=800&q=80&auto=format&fit=crop`,
    gallery: [
      `${BASE}/photo-1628744448840-55bdb2497bd4?w=1200&q=80&auto=format&fit=crop`,
    ],
    highlights: [
      "Contemporary design",
      "Premium location",
      "Quality materials",
    ],
    amenities: ["Parking", "Security", "Clubhouse"],
  },
  {
    id: "completed-one",
    name: "[Completed Project — To Be Updated]",
    location: "Adyar, Chennai",
    type: "Villa",
    status: "completed",
    description:
      "A completed premium villa project showcasing Hayaghreev Homes' commitment to quality construction and beautiful design.",
    image: `${BASE}/photo-1543071293-d91175a68672?w=800&q=80&auto=format&fit=crop`,
    gallery: [
      `${BASE}/photo-1543071293-d91175a68672?w=1200&q=80&auto=format&fit=crop`,
      `${BASE}/photo-1591474200742-8e512e6f98f8?w=1200&q=80&auto=format&fit=crop`,
    ],
    highlights: ["Premium construction", "Quality finishes", "Modern design"],
    amenities: ["Parking", "Garden", "Security"],
    year: 2023,
  },
  {
    id: "completed-two",
    name: "[Completed Project — To Be Updated]",
    location: "Nungambakkam, Chennai",
    type: "Residential",
    status: "completed",
    description:
      "A successful residential construction project delivered with precision, quality workmanship, and excellent customer satisfaction.",
    image: `${BASE}/photo-1591474200742-8e512e6f98f8?w=800&q=80&auto=format&fit=crop`,
    gallery: [
      `${BASE}/photo-1591474200742-8e512e6f98f8?w=1200&q=80&auto=format&fit=crop`,
    ],
    highlights: ["On-time delivery", "Quality finishes", "Customer satisfaction"],
    amenities: ["Parking", "Security", "Power Backup"],
    year: 2022,
  },
  {
    id: "completed-three",
    name: "[Completed Project — To Be Updated]",
    location: "Mylapore, Chennai",
    type: "Residential",
    status: "completed",
    description:
      "A beautifully crafted residential project blending traditional Chennai aesthetics with modern construction standards.",
    image: `${BASE}/photo-1628744448839-a475cc0e90c3?w=800&q=80&auto=format&fit=crop`,
    gallery: [
      `${BASE}/photo-1628744448839-a475cc0e90c3?w=1200&q=80&auto=format&fit=crop`,
    ],
    highlights: ["Traditional-modern fusion", "Quality craftsmanship", "Timely delivery"],
    amenities: ["Parking", "Security"],
    year: 2022,
  },
];

export const SERVICES = [
  {
    id: "construction",
    title: "Construction",
    icon: "🏗️",
    description:
      "End-to-end residential construction solutions with attention to structural quality, design integrity, and flawless execution.",
    image: `${BASE}/photo-1777919393730-463e2c0b7f4c?w=600&q=80&auto=format&fit=crop`,
    features: [
      "Structural planning & execution",
      "Quality materials sourcing",
      "Vastu & regulatory compliance",
      "On-time project delivery",
      "Post-construction support",
    ],
  },
  {
    id: "interior",
    title: "Interior Design",
    icon: "🛋️",
    description:
      "Beautiful and functional interior solutions tailored to the lifestyle and preferences of our customers.",
    image: `${BASE}/photo-1646987916641-1f3c8992daa2?w=600&q=80&auto=format&fit=crop`,
    features: [
      "Living room & bedroom design",
      "Modular kitchen solutions",
      "Custom furniture & woodwork",
      "Lighting & décor",
      "3D visualization before execution",
    ],
  },
  {
    id: "project-development",
    title: "Project Development",
    icon: "🏘️",
    description:
      "Professional planning and execution for residential projects, from concept to completion with full project management.",
    image: `${BASE}/photo-1721815693498-cc28507c0ba2?w=600&q=80&auto=format&fit=crop`,
    features: [
      "Site selection & evaluation",
      "Architectural planning",
      "Project management",
      "Regulatory approvals",
      "Investment guidance",
    ],
  },
  {
    id: "home-design",
    title: "Home Design",
    icon: "📐",
    description:
      "Thoughtful architectural and spatial planning for modern homes that balance beauty, function, and livability.",
    image: `${BASE}/photo-1628012209120-d9db7abf7eab?w=600&q=80&auto=format&fit=crop`,
    features: [
      "Architectural drawings",
      "Space planning & layout",
      "Elevation design",
      "Vastu-compliant planning",
      "Budget-sensitive design",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "[Customer Name — Placeholder]",
    project: "[Project Name]",
    review:
      "Placeholder testimonial — to be replaced with a verified customer review. Sri Hayaghreev Homes delivered our dream home with outstanding quality and professionalism.",
    rating: 5,
    placeholder: true,
  },
  {
    id: 2,
    name: "[Customer Name — Placeholder]",
    project: "[Project Name]",
    review:
      "Placeholder testimonial — to be replaced with a verified customer review. The team was transparent, professional, and delivered beyond our expectations.",
    rating: 5,
    placeholder: true,
  },
  {
    id: 3,
    name: "[Customer Name — Placeholder]",
    project: "[Project Name]",
    review:
      "Placeholder testimonial — to be replaced with a verified customer review. Exceptional construction quality and beautiful interior design. Highly recommended.",
    rating: 5,
    placeholder: true,
  },
];

export const INTERIOR_GALLERY = [
  {
    id: "int-1",
    category: "Living Room",
    image: `${BASE}/photo-1704040686428-7534b262d0d8?w=800&q=80&auto=format&fit=crop`,
    title: "Contemporary Living Space",
  },
  {
    id: "int-2",
    category: "Living Room",
    image: `${BASE}/photo-1646987916641-1f3c8992daa2?w=800&q=80&auto=format&fit=crop`,
    title: "Elegant Living Room",
  },
  {
    id: "int-3",
    category: "Bedroom",
    image: `${BASE}/photo-1562438668-bcf0ca6578f0?w=800&q=80&auto=format&fit=crop`,
    title: "Serene Master Bedroom",
  },
  {
    id: "int-4",
    category: "Bedroom",
    image: `${BASE}/photo-1750420556288-d0e32a6f517b?w=800&q=80&auto=format&fit=crop`,
    title: "Modern Neutral Bedroom",
  },
  {
    id: "int-5",
    category: "Kitchen",
    image: `${BASE}/photo-1502005097973-6a7082348e28?w=800&q=80&auto=format&fit=crop`,
    title: "Premium Modular Kitchen",
  },
  {
    id: "int-6",
    category: "Dining",
    image: `${BASE}/photo-1725257928373-dc6d2ac7b145?w=800&q=80&auto=format&fit=crop`,
    title: "Open Kitchen & Dining",
  },
];
