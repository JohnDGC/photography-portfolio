import { describe, expect, it } from "vitest"

import {
  filterPortfolioItems,
  getFeaturedPortfolioItem,
  portfolioItems
} from "../lib/portfolio"

describe("portfolio data helpers", () => {
  it("returns the complete collection for the All category", () => {
    expect(filterPortfolioItems(portfolioItems, "All")).toHaveLength(portfolioItems.length)
  })

  it("filters portfolio items by category", () => {
    const portraits = filterPortfolioItems(portfolioItems, "Retratos")

    expect(portraits.length).toBeGreaterThan(0)
    expect(portraits.every((item) => item.category === "Retratos")).toBe(true)
  })

  it("finds the featured hero image", () => {
    const featured = getFeaturedPortfolioItem(portfolioItems)

    expect(featured.featured).toBe(true)
    expect(featured.src).toContain("images.unsplash.com")
  })
})