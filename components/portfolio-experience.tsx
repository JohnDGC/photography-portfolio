"use client"

import { FormEvent, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Aperture,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  X
} from "lucide-react"

import { PortfolioGallery } from "@/components/ui/portfolio-gallery"
import { cn } from "@/lib/utils"
import {
  filterPortfolioItems,
  getFeaturedPortfolioItem,
  photographer,
  portfolioCategories,
  portfolioItems,
  servicePackages,
  socialLinks,
  testimonials,
  type PortfolioCategory
} from "@/lib/portfolio"

const navItems = [
  { label: "Work", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
}

const portfolioGalleryImages = portfolioItems.map((item) => ({
  src: item.src,
  alt: item.alt,
  title: item.title
}))

export function PortfolioExperience() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All")
  const [activeImageId, setActiveImageId] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState("")

  const filteredItems = useMemo(
    () => filterPortfolioItems(portfolioItems, activeCategory),
    [activeCategory]
  )
  const featuredItem = getFeaturedPortfolioItem(portfolioItems)
  const activeImageIndex = portfolioItems.findIndex((item) => item.id === activeImageId)
  const activeImage = activeImageIndex >= 0 ? portfolioItems[activeImageIndex] : null

  useEffect(() => {
    if (!activeImage) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImageId(null)
      }

      if (event.key === "ArrowRight") {
        setActiveImageId(portfolioItems[(activeImageIndex + 1) % portfolioItems.length].id)
      }

      if (event.key === "ArrowLeft") {
        setActiveImageId(portfolioItems[(activeImageIndex - 1 + portfolioItems.length) % portfolioItems.length].id)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeImage, activeImageIndex])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormStatus("Thanks. Your inquiry is ready for follow-up within one business day.")
    event.currentTarget.reset()
  }

  function openArchiveImage(index: number) {
    const item = portfolioItems[index]

    if (item) {
      setActiveImageId(item.id)
    }
  }

  function goToNextImage() {
    if (activeImageIndex < 0) {
      return
    }

    setActiveImageId(portfolioItems[(activeImageIndex + 1) % portfolioItems.length].id)
  }

  function goToPreviousImage() {
    if (activeImageIndex < 0) {
      return
    }

    setActiveImageId(portfolioItems[(activeImageIndex - 1 + portfolioItems.length) % portfolioItems.length].id)
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: photographer.name,
    description: photographer.tagline,
    image: photographer.profileImage,
    email: photographer.email,
    telephone: photographer.phone,
    areaServed: "Worldwide",
    serviceType: ["Wedding photography", "Portrait photography", "Editorial photography", "Product photography"]
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <section id="home" className="relative min-h-screen overflow-hidden">
        <img
          src={photographer.profileImage}
          alt={`Portrait of photographer ${photographer.name}`}
          className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.92),rgba(8,7,5,0.62),rgba(8,7,5,0.12))]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(0deg,#0b0a08,rgba(11,10,8,0))]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
            className="max-w-4xl"
          >
            <motion.p variants={fadeUp} className="mb-5 flex items-center gap-3 text-sm font-medium text-champagne">
              <Aperture className="h-4 w-4" />
              {photographer.location}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-6xl font-semibold leading-none text-paper sm:text-7xl md:text-8xl"
            >
              {photographer.name}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-paper/78 md:text-xl">
              {photographer.tagline}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#gallery"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-paper px-6 py-4 text-sm font-bold text-ink transition hover:bg-champagne"
              >
                View portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-md border border-white/20 px-6 py-4 text-sm font-bold text-paper transition hover:border-champagne hover:text-champagne"
              >
                Book a commission
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-14 grid max-w-3xl grid-cols-3 gap-4 border-t border-white/14 pt-6 text-paper/80"
          >
            <HeroStat value="12+" label="Years behind the camera" />
            <HeroStat value="38" label="Destination commissions" />
            <HeroStat value="72h" label="Preview gallery delivery" />
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="relative px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Portfolio"
            title="A visual library shaped by light, restraint, and atmosphere."
            description="Browse selected commissions across weddings, portraits, editorial stories, landscapes, and commercial work."
          />

          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Portfolio categories">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-md border px-4 py-2 text-sm font-medium transition",
                  activeCategory === category
                    ? "border-champagne bg-champagne text-ink"
                    : "border-white/14 text-paper/70 hover:border-paper/45 hover:text-paper"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="masonry-gallery mt-10">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.button
                  layout
                  key={item.id}
                  type="button"
                  className="masonry-item group block w-full overflow-hidden rounded-md border border-white/10 bg-white/[0.03] text-left transition hover:border-champagne/70"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ duration: 0.28, delay: index * 0.03 }}
                  onClick={() => setActiveImageId(item.id)}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden",
                      item.orientation === "tall" && "aspect-[4/5]",
                      item.orientation === "wide" && "aspect-[5/3]",
                      item.orientation === "square" && "aspect-square"
                    )}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,7,5,0.76),rgba(8,7,5,0.05)_52%)] opacity-80 transition group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-sm font-medium text-champagne">{item.category}</p>
                      <h3 className="mt-1 font-serif text-3xl font-semibold text-paper">{item.title}</h3>
                      <p className="mt-2 text-sm text-paper/68">
                        {item.location} / {item.year}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <PortfolioGallery
        title="Selected frames in motion"
        archiveButton={{ text: "Start a project", href: "#contact" }}
        images={portfolioGalleryImages}
        className="bg-[#100f0d]"
        maxHeight={150}
        onImageClick={openArchiveImage}
      />

      <section id="about" className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-md border border-white/10"
          >
            <img
              src={photographer.heroImage}
              alt={`Camera and studio detail for ${photographer.name}`}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,7,5,0.72),rgba(8,7,5,0.02))]" />
            <p className="absolute bottom-5 left-5 max-w-xs text-sm leading-6 text-paper/78">
              Featured image: {featuredItem.title}, {featuredItem.location}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p variants={fadeUp} className="text-sm font-bold uppercase text-champagne">
              About me
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-serif text-5xl font-semibold leading-none md:text-6xl">
              Photographs with the patience of film and the clarity of modern editorial work.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-8 text-lg leading-8 text-paper/74">
              {photographer.bio}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-paper/74">
              {photographer.approach}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                ["Light", "Natural-first, shaped only when the frame needs it."],
                ["Pace", "Gentle direction with space for real movement."],
                ["Finish", "Warm tones, clean skin, and restrained contrast."]
              ].map(([label, text]) => (
                <div key={label} className="border-t border-white/14 pt-4">
                  <h3 className="font-serif text-2xl font-semibold text-paper">{label}</h3>
                  <p className="mt-2 text-sm leading-6 text-paper/62">{text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-[#12100d] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Services"
            title="Clear packages for portrait, wedding, and campaign work."
            description="Each commission includes planning, direction, retouching, and a private delivery gallery. Custom quotes are available for travel and multi-day productions."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {servicePackages.map((service, index) => (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-md border border-white/10 bg-white/[0.035] p-7 transition hover:border-champagne/60 hover:bg-white/[0.055]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-3xl font-semibold text-paper">{service.name}</h3>
                  <p className="text-2xl font-bold text-champagne">{service.price}</p>
                </div>
                <p className="mt-5 min-h-24 leading-7 text-paper/68">{service.description}</p>
                <ul className="mt-7 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-paper/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-moss" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10" aria-labelledby="testimonials-title">
        <div className="mx-auto max-w-7xl">
          <h2 id="testimonials-title" className="font-serif text-5xl font-semibold leading-none md:text-6xl">
            Notes from recent clients
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-md border border-white/10 bg-white/[0.03] p-7">
                <blockquote className="font-serif text-3xl leading-tight text-paper">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 text-sm text-paper/65">
                  <span className="font-bold text-champagne">{testimonial.name}</span> / {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase text-champagne">Contact</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none md:text-7xl">
              Tell me what you want the photographs to remember.
            </h2>
            <div className="mt-9 space-y-5 text-paper/75">
              <a className="flex items-center gap-3 transition hover:text-champagne" href={`mailto:${photographer.email}`}>
                <Mail className="h-5 w-5 text-champagne" />
                {photographer.email}
              </a>
              <a className="flex items-center gap-3 transition hover:text-champagne" href={`tel:${photographer.phone}`}>
                <Phone className="h-5 w-5 text-champagne" />
                {photographer.phone}
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-champagne" />
                {photographer.location}
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/14 px-4 py-3 text-sm font-bold text-paper/78 transition hover:border-champagne hover:text-champagne"
                >
                  <ExternalLink className="h-4 w-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-md border border-white/10 bg-white/[0.035] p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-bold text-paper/78">
                Name
                <input
                  name="name"
                  required
                  className="w-full rounded-md border border-white/10 bg-black/24 px-4 py-3 text-paper placeholder:text-paper/35"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2 text-sm font-bold text-paper/78">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-white/10 bg-black/24 px-4 py-3 text-paper placeholder:text-paper/35"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 block space-y-2 text-sm font-bold text-paper/78">
              Project type
              <input
                name="project"
                className="w-full rounded-md border border-white/10 bg-black/24 px-4 py-3 text-paper placeholder:text-paper/35"
                placeholder="Wedding, portrait, campaign, travel..."
              />
            </label>
            <label className="mt-4 block space-y-2 text-sm font-bold text-paper/78">
              Message
              <textarea
                name="message"
                required
                rows={6}
                className="w-full resize-none rounded-md border border-white/10 bg-black/24 px-4 py-3 text-paper placeholder:text-paper/35"
                placeholder="Share your date, location, mood, and what matters most."
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-md bg-champagne px-6 py-4 text-sm font-bold text-ink transition hover:bg-paper"
            >
              Send inquiry
              <Send className="h-4 w-4" />
            </button>
            {formStatus ? <p className="mt-4 text-sm text-moss">{formStatus}</p> : null}
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-sm text-paper/52 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>{photographer.name} / Professional photography portfolio</p>
          <a href="#home" className="transition hover:text-champagne">
            Back to top
          </a>
        </div>
      </footer>

      <Lightbox
        activeImage={activeImage}
        onClose={() => setActiveImageId(null)}
        onNext={goToNextImage}
        onPrevious={goToPreviousImage}
      />
    </main>
  )
}

function SiteHeader({
  isMenuOpen,
  setIsMenuOpen
}: {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10" aria-label="Primary">
        <a href="#home" className="font-serif text-2xl font-semibold text-paper">
          {photographer.name}
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-paper/68 transition hover:text-champagne">
              {item.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/14 text-paper md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-ink md:hidden"
          >
            <div className="grid gap-1 px-5 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-sm font-bold text-paper/78 hover:bg-white/[0.06] hover:text-champagne"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl font-semibold text-paper md:text-4xl">{value}</p>
      <p className="mt-1 text-xs leading-5 text-paper/55 sm:text-sm">{label}</p>
    </div>
  )
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.1 }}
      className="max-w-4xl"
    >
      <motion.p variants={fadeUp} className="text-sm font-bold uppercase text-champagne">
        {eyebrow}
      </motion.p>
      <motion.h2 variants={fadeUp} className="mt-4 font-serif text-5xl font-semibold leading-none md:text-7xl">
        {title}
      </motion.h2>
      <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-paper/66">
        {description}
      </motion.p>
    </motion.div>
  )
}

function Lightbox({
  activeImage,
  onClose,
  onNext,
  onPrevious
}: {
  activeImage: (typeof portfolioItems)[number] | null
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}) {
  return (
    <AnimatePresence>
      {activeImage ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/88 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/8 text-paper transition hover:border-champagne hover:text-champagne"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/15 bg-white/8 text-paper transition hover:border-champagne hover:text-champagne sm:inline-flex"
            onClick={(event) => {
              event.stopPropagation()
              onPrevious()
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/15 bg-white/8 text-paper transition hover:border-champagne hover:text-champagne sm:inline-flex"
            onClick={(event) => {
              event.stopPropagation()
              onNext()
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <motion.figure
            className="w-full max-w-5xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[78vh] w-full rounded-md object-contain"
              decoding="async"
            />
            <figcaption className="mt-4 flex flex-col gap-1 text-paper sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-champagne">{activeImage.category}</p>
                <h2 className="font-serif text-3xl font-semibold">{activeImage.title}</h2>
              </div>
              <p className="text-sm text-paper/60">
                {activeImage.location} / {activeImage.year}
              </p>
            </figcaption>
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}