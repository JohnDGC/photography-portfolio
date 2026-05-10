import type { Metadata } from "next"
import type { ReactNode } from "react"

import { photographer } from "@/lib/portfolio"
import "./globals.css"

export const metadata: Metadata = {
  title: `${photographer.name} | Fotógrafo Profesional`,
  description: photographer.tagline,
  keywords: [
    "fotógrafo profesional",
    "fotografía de bodas",
    "fotografía de retratos",
    "fotografía editorial",
    "fotógrafo en Colombia",
    "quinceañeras",
    "fotografía Bogotá",
    "fotografía Medellín"
  ],
  authors: [{ name: photographer.name }],
  openGraph: {
    title: `${photographer.name} | Fotógrafo Profesional`,
    description: photographer.tagline,
    type: "website",
    images: [
      {
        url: photographer.profileImage,
        width: 1400,
        height: 933,
        alt: `Fotografía de perfil de ${photographer.name}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${photographer.name} | Fotógrafo Profesional`,
    description: photographer.tagline,
    images: [photographer.profileImage]
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}