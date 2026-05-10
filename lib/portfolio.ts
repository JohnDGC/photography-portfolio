export type PortfolioCategory = "All" | "Weddings" | "Portraits" | "Editorial" | "Landscapes" | "Product"

export interface PortfolioItem {
  id: string
  title: string
  category: Exclude<PortfolioCategory, "All">
  src: string
  alt: string
  location: string
  year: string
  featured?: boolean
  orientation: "wide" | "tall" | "square"
}

export interface ServicePackage {
  name: string
  price: string
  description: string
  features: string[]
}

export const photographer = {
  name: "Arielle Vale",
  tagline: "Editorial wedding, portrait, and destination photography with cinematic restraint.",
  location: "Available worldwide from Lisbon",
  email: "hello@ariellevale.studio",
  phone: "+351 912 000 884",
  profileImage:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=82",
  heroImage:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2200&q=82",
  bio:
    "I create quiet, emotionally precise photographs for people who value atmosphere as much as documentation. My work blends natural light, editorial composition, and a documentary sense of timing so each gallery feels intimate, cinematic, and alive.",
  approach:
    "Every commission begins with listening. I plan carefully, direct lightly, and leave room for the unscripted gestures that make images feel personal instead of performed."
}

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Behance", href: "https://behance.net/" },
  { label: "Pinterest", href: "https://pinterest.com/" }
]

export const portfolioCategories: PortfolioCategory[] = ["All", "Weddings", "Portraits", "Editorial", "Landscapes", "Product"]

export const portfolioItems: PortfolioItem[] = [
  {
    id: "coastal-vows",
    title: "Coastal Vows",
    category: "Weddings",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1300&q=82",
    alt: "Newly married couple embracing on a windy coastline",
    location: "Comporta, Portugal",
    year: "2026",
    featured: true,
    orientation: "tall"
  },
  {
    id: "atelier-portrait",
    title: "Atelier Portrait",
    category: "Portraits",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1300&q=82",
    alt: "Editorial portrait of a woman in soft window light",
    location: "Paris, France",
    year: "2025",
    orientation: "wide"
  },
  {
    id: "desert-line",
    title: "Desert Line",
    category: "Landscapes",
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1300&q=82",
    alt: "Open desert landscape with warm evening light",
    location: "Marrakesh, Morocco",
    year: "2025",
    orientation: "wide"
  },
  {
    id: "table-study",
    title: "Table Study",
    category: "Product",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1300&q=82",
    alt: "Minimal product photograph of a watch on a neutral surface",
    location: "Studio",
    year: "2026",
    orientation: "square"
  },
  {
    id: "midnight-editorial",
    title: "Midnight Editorial",
    category: "Editorial",
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1300&q=82",
    alt: "Moody editorial portrait with dramatic studio light",
    location: "Milan, Italy",
    year: "2025",
    orientation: "tall"
  },
  {
    id: "garden-ceremony",
    title: "Garden Ceremony",
    category: "Weddings",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1300&q=82",
    alt: "Outdoor wedding ceremony surrounded by greenery",
    location: "Sintra, Portugal",
    year: "2026",
    orientation: "wide"
  },
  {
    id: "studio-silhouette",
    title: "Studio Silhouette",
    category: "Portraits",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1300&q=82",
    alt: "Close portrait with sculptural lighting and neutral styling",
    location: "Lisbon, Portugal",
    year: "2025",
    orientation: "square"
  },
  {
    id: "alpine-stillness",
    title: "Alpine Stillness",
    category: "Landscapes",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1300&q=82",
    alt: "Mountain lake beneath dramatic alpine peaks",
    location: "Dolomites, Italy",
    year: "2024",
    orientation: "tall"
  },
  {
    id: "fragrance-campaign",
    title: "Fragrance Campaign",
    category: "Product",
    src: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1300&q=82",
    alt: "Luxury fragrance bottle photographed with warm highlights",
    location: "Studio",
    year: "2026",
    orientation: "wide"
  }
]

export const servicePackages: ServicePackage[] = [
  {
    name: "Portrait Session",
    price: "$650",
    description: "A focused session for personal branding, artists, founders, and refined editorial portraits.",
    features: ["90-minute shoot", "Two looks or locations", "35 edited images", "Private online gallery"]
  },
  {
    name: "Wedding Story",
    price: "$4,800",
    description: "Full-day coverage shaped around atmosphere, family, movement, and the quiet in-between frames.",
    features: ["8 hours coverage", "Timeline consultation", "500+ edited images", "Preview gallery in 72 hours"]
  },
  {
    name: "Brand Campaign",
    price: "$2,400",
    description: "Visual direction and photography for product launches, hospitality brands, and creative teams.",
    features: ["Creative planning call", "Half-day production", "Usage-ready image set", "Commercial license"]
  }
]

export const testimonials = [
  {
    quote:
      "Arielle made the whole day feel calm and intentional. The images look like us, only more cinematic than we knew our life could feel.",
    name: "Marina & Theo",
    role: "Wedding clients"
  },
  {
    quote:
      "The campaign library gave our launch a complete visual language. Every frame felt precise, warm, and commercially useful.",
    name: "Elena Costa",
    role: "Creative director, Noema"
  }
]

export function filterPortfolioItems(items: PortfolioItem[], category: PortfolioCategory) {
  return category === "All" ? items : items.filter((item) => item.category === category)
}

export function getFeaturedPortfolioItem(items: PortfolioItem[]) {
  const featured = items.find((item) => item.featured)

  if (!featured) {
    throw new Error("Portfolio collection needs one featured image")
  }

  return featured
}