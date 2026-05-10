"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface PortfolioGalleryProps {
  title?: string
  archiveButton?: {
    text: string
    href: string
  }
  images?: Array<{
    src: string
    alt: string
    title?: string
  }>
  className?: string
  maxHeight?: number
  spacing?: string
  onImageClick?: (index: number) => void
  /**
   * Whether to pause marquee animation on hover (mobile only)
   * @default true
   */
  pauseOnHover?: boolean
  /**
   * Number of times to repeat the content in marquee (mobile only)
   * @default 4
   */
  marqueeRepeat?: number
}

export function PortfolioGallery({
  title = "Browse the archive",
  archiveButton = {
    text: "View gallery",
    href: "#gallery"
  },
  images: customImages,
  className = "",
  maxHeight = 120,
  spacing = "-space-x-72 md:-space-x-80",
  onImageClick,
  pauseOnHover = true,
  marqueeRepeat = 4
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const defaultImages = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=82",
      alt: "Wedding couple photographed on a coastline"
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=82",
      alt: "Editorial portrait in soft window light"
    },
    {
      src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=82",
      alt: "Warm desert landscape at dusk"
    },
    {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=82",
      alt: "Minimal product photograph of a watch"
    },
    {
      src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=82",
      alt: "Moody editorial portrait with studio light"
    },
    {
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=82",
      alt: "Outdoor wedding ceremony surrounded by greenery"
    },
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=82",
      alt: "Close portrait with sculptural lighting"
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=82",
      alt: "Alpine landscape with lake and peaks"
    },
    {
      src: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=82",
      alt: "Luxury fragrance bottle campaign image"
    },
    {
      src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=82",
      alt: "Professional camera close-up"
    }
  ]

  const images = customImages || defaultImages

  return (
    <section aria-label={title} className={`relative min-h-screen px-4 py-20 ${className}`} id="archives">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border bg-background/50 backdrop-blur-sm">
        <div className="relative z-10 px-8 pb-8 pt-16 text-center">
          <h2 className="mb-8 text-balance text-4xl font-bold text-foreground md:text-6xl">{title}</h2>

          <Link
            href={archiveButton.href}
            className="group mb-20 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <span>{archiveButton.text}</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative -mb-[200px] hidden h-[400px] overflow-hidden md:block">
          <div className={`flex ${spacing} items-end justify-center pb-8 pt-40`}>
            {images.map((image, index) => {
              const totalImages = images.length
              const middle = Math.floor(totalImages / 2)
              const distanceFromMiddle = Math.abs(index - middle)
              const staggerOffset = maxHeight - distanceFromMiddle * 20

              const zIndex = totalImages - index

              const isHovered = hoveredIndex === index
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index
              const yOffset = isHovered ? -120 : isOtherHovered ? 0 : -staggerOffset

              return (
                <motion.div
                  key={`${image.src}-${index}`}
                  className="group flex-shrink-0 cursor-pointer"
                  style={{ zIndex }}
                  initial={{
                    transform: "perspective(5000px) rotateY(-45deg) translateY(200px)",
                    opacity: 0
                  }}
                  animate={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(${yOffset}px)`,
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => onImageClick?.(index)}
                >
                  <div
                    className="relative aspect-video w-64 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105 md:w-80 lg:w-96"
                    style={{
                      boxShadow: `
                        rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                        rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                        rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                        rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                      `
                    }}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="h-full w-full object-cover object-left-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="relative block pb-8 md:hidden">
          <div
            className={cn(
              "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
              "flex-row"
            )}
          >
            {Array(marqueeRepeat)
              .fill(0)
              .map((_, repeatIndex) => (
                <div
                  key={repeatIndex}
                  className={cn("flex shrink-0 justify-around [gap:var(--gap)]", "animate-marquee flex-row", {
                    "group-hover:[animation-play-state:paused]": pauseOnHover
                  })}
                >
                  {images.map((image, index) => (
                    <div
                      key={`${repeatIndex}-${image.src}-${index}`}
                      className="group flex-shrink-0 cursor-pointer"
                      onClick={() => onImageClick?.(index)}
                    >
                      <div
                        className="relative aspect-video w-64 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105"
                        style={{
                          boxShadow: `
                            rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                            rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                            rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                            rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                          `
                        }}
                      >
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="h-full w-full object-cover object-left-top"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}