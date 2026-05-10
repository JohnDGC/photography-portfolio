import type { Metadata } from "next"
import type { ReactNode } from "react"

import { photographer } from "@/lib/portfolio"
import "./globals.css"

export const metadata: Metadata = {
  title: `${photographer.name} | Professional Photographer Portfolio`,
  description: photographer.tagline,
  keywords: [
    "professional photographer",
    "wedding photography",
    "portrait photography",
    "editorial photography",
    "destination photographer"
  ],
  authors: [{ name: photographer.name }],
  openGraph: {
    title: `${photographer.name} | Professional Photographer Portfolio`,
    description: photographer.tagline,
    type: "website",
    images: [
      {
        url: photographer.profileImage,
        width: 1400,
        height: 933,
        alt: `Portrait of ${photographer.name}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${photographer.name} | Professional Photographer Portfolio`,
    description: photographer.tagline,
    images: [photographer.profileImage]
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}