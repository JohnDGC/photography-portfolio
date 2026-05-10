import type { NextConfig } from "next"

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "photography-portfolio"
const isGitHubActions = process.env.GITHUB_ACTIONS === "true"
const isUserOrOrganizationPage = repositoryName.endsWith(".github.io")
const computedBasePath = isGitHubActions && !isUserOrOrganizationPage ? `/${repositoryName}` : ""
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? computedBasePath

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true
  }
}

export default nextConfig