export type PortfolioCategory = "All" | "Bodas" | "Retratos" | "Editorial" | "Paisajes" | "XV Años"

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
  name: "Carlos Alvarez",
  tagline: "Cuento historias eternas con imágenes. Bodas, XV años, eventos y fotografía de estudio con alma colombiana.",
  location: "Disponible en toda Colombia y el mundo",
  email: "hola@carlosalvarez.foto",
  phone: "+57 300 000 0000",
  profileImage:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=82",
  heroImage:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2200&q=82",
  bio:
    "Creo fotografías que capturan lo que las palabras no alcanzan a decir. Mi trabajo combina la luz natural, la composición editorial y el instinto documental para que cada galería se sienta íntima, cinematográfica y completamente tuya.",
  approach:
    "Cada sesión comienza escuchando. Planifico con cuidado, dirijo con suavidad y dejo espacio para los gestos espontáneos que hacen que una imagen se sienta real, no ensayada."
}

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/carlosalvarez_photo/" },
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "WhatsApp", href: "https://wa.me/573000000000" }
]

export const portfolioCategories: PortfolioCategory[] = ["All", "Bodas", "Retratos", "Editorial", "Paisajes", "XV Años"]

export const portfolioItems: PortfolioItem[] = [
  {
    id: "votos-en-cartagena",
    title: "Votos en Cartagena",
    category: "Bodas",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1300&q=82",
    alt: "Pareja recién casada en las murallas de Cartagena al atardecer",
    location: "Cartagena, Colombia",
    year: "2026",
    featured: true,
    orientation: "tall"
  },
  {
    id: "retrato-en-el-estudio",
    title: "Retrato en el Estudio",
    category: "Retratos",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1300&q=82",
    alt: "Retrato editorial de una mujer con luz suave de ventana",
    location: "Bogotá, Colombia",
    year: "2025",
    orientation: "wide"
  },
  {
    id: "amanecer-en-los-andes",
    title: "Amanecer en los Andes",
    category: "Paisajes",
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1300&q=82",
    alt: "Paisaje andino con luz dorada al amanecer",
    location: "Boyacá, Colombia",
    year: "2025",
    orientation: "wide"
  },
  {
    id: "quinceanera-medellin",
    title: "Quinceañera en Medellín",
    category: "XV Años",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1300&q=82",
    alt: "Sesión de quinceañera con vestido elegante en estudio",
    location: "Medellín, Colombia",
    year: "2026",
    orientation: "square"
  },
  {
    id: "editorial-nocturno",
    title: "Editorial Nocturno",
    category: "Editorial",
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1300&q=82",
    alt: "Retrato editorial dramático con iluminación de estudio",
    location: "Bogotá, Colombia",
    year: "2025",
    orientation: "tall"
  },
  {
    id: "boda-en-hacienda",
    title: "Boda en Hacienda",
    category: "Bodas",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1300&q=82",
    alt: "Ceremonia de boda al aire libre rodeada de vegetación tropical",
    location: "Valle del Cauca, Colombia",
    year: "2026",
    orientation: "wide"
  },
  {
    id: "silueta-en-estudio",
    title: "Silueta en Estudio",
    category: "Retratos",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1300&q=82",
    alt: "Retrato íntimo con iluminación escultórica y estilo neutro",
    location: "Cali, Colombia",
    year: "2025",
    orientation: "square"
  },
  {
    id: "sierra-nevada",
    title: "Sierra Nevada",
    category: "Paisajes",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1300&q=82",
    alt: "Lago de montaña bajo picos imponentes de la Sierra Nevada",
    location: "Santa Marta, Colombia",
    year: "2024",
    orientation: "tall"
  },
  {
    id: "quinceanera-bogota",
    title: "Quinceañera Bogotá",
    category: "XV Años",
    src: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1300&q=82",
    alt: "Sesión de quinceañera con detalles dorados y luz cálida",
    location: "Bogotá, Colombia",
    year: "2026",
    orientation: "wide"
  }
]

export const servicePackages: ServicePackage[] = [
  {
    name: "Sesión de Retratos",
    price: "$800.000 COP",
    description: "Sesión enfocada para marcas personales, artistas, empresarios y retratos editoriales refinados.",
    features: ["Sesión de 90 minutos", "Dos looks o locaciones", "35 imágenes editadas", "Galería privada en línea"]
  },
  {
    name: "Historia de Boda",
    price: "$4.500.000 COP",
    description: "Cobertura de día completo moldeada alrededor de la atmósfera, la familia, el movimiento y los momentos íntimos.",
    features: ["8 horas de cobertura", "Consulta de cronograma", "500+ imágenes editadas", "Vista previa en 72 horas"]
  },
  {
    name: "Quinceañera Completa",
    price: "$2.800.000 COP",
    description: "Cobertura integral para celebraciones de quinceañera: sesión previa, ceremonia y recepción con entrega premium.",
    features: ["Sesión previa incluida", "Ceremonia y recepción", "300+ imágenes editadas", "Álbum digital de regalo"]
  },
  {
    name: "Fotografía Familiar",
    price: "$600.000 COP",
    description: "Sesión cálida y natural para familias que quieren preservar momentos auténticos con un toque artístico.",
    features: ["Sesión de 60 minutos", "Locación a elección", "25 imágenes editadas", "Galería privada en línea"]
  },
  {
    name: "Campaña de Marca",
    price: "$3.200.000 COP",
    description: "Dirección visual y fotografía para lanzamientos de productos, marcas de hospitalidad y equipos creativos.",
    features: ["Llamada de planeación creativa", "Medio día de producción", "Imágenes listas para uso comercial", "Licencia comercial incluida"]
  },
  {
    name: "Evento Corporativo",
    price: "$1.500.000 COP",
    description: "Cobertura profesional de eventos empresariales, conferencias, lanzamientos y celebraciones corporativas.",
    features: ["Hasta 4 horas de cobertura", "Entrega en 5 días hábiles", "150+ imágenes editadas", "Derechos de uso empresarial"]
  }
]

export const testimonials = [
  {
    quote:
      "Carlos hizo que todo el día se sintiera tranquilo e intencional. Las imágenes nos representan perfectamente, solo que más cinematográficas de lo que pensábamos que nuestra vida podría verse.",
    name: "Valentina y Sebastián",
    role: "Clientes de boda"
  },
  {
    quote:
      "Las fotos de la quinceañera de mi hija superaron todas nuestras expectativas. Carlos tiene un don para capturar la emoción genuina en cada momento.",
    name: "Lorena Gómez",
    role: "Madre de quinceañera"
  },
  {
    quote:
      "El portafolio visual que creó para nuestra marca le dio a nuestro lanzamiento un lenguaje completo. Cada imagen fue precisa, cálida y comercialmente efectiva.",
    name: "Andrés Morales",
    role: "Director creativo, Estudio Nómada"
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