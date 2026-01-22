import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity document base type
export interface SanityDocument {
  _id: string
  _type: string
  _createdAt?: string
  _updatedAt?: string
  _rev?: string
}

// Project types matching the Sanity schema
export interface ProjectLinks {
  live?: string
  repo?: string
}

export interface ProjectMedia {
  eyebrow?: string
  headline?: string
  sub?: string
  gradient?: 'violet' | 'cyan' | 'mix'
}

export interface ProjectMediaGalleryItem {
  image?: {
    asset?: {
      _id: string
      url: string
      metadata?: {
        dimensions?: {
          width: number
          height: number
          aspectRatio: number
        }
        lqip?: string
      }
    }
    alt?: string
  }
  caption?: string
}

export interface ProjectKeyDecision {
  title: string
  bullets: string[]
}

export interface ProjectArchitecture {
  summary: string
  bullets: string[]
}

export interface ProjectTradeoff {
  decision: string
  why: string
}

export interface ProjectCaseStudy {
  problem: string
  role: string
  stack: string[]
  media?: ProjectMedia
  mediaGallery?: ProjectMediaGalleryItem[]
  keyDecisions: ProjectKeyDecision[]
  highlights: string[]
  architecture: ProjectArchitecture
  tradeoffs: ProjectTradeoff[]
  results: string[]
  body?: PortableTextBlock[]
}

export interface Project extends SanityDocument {
  _type: 'project'
  title: string
  slug: string
  tagline?: string
  tags?: string[]
  featured?: boolean
  links?: ProjectLinks
  caseStudy: ProjectCaseStudy
  mediaGallery?: { image: SanityImageSource; caption?: string }[]
}

// CV/Profile types
export interface CVExperience {
  title: string
  meta?: string
  description: string
  stack?: string
}

export interface CVSkills {
  frontend?: string
  backend?: string
  productInfra?: string
}

export interface CV extends SanityDocument {
  _type: 'cv'
  name: string
  role: string
  positioningStatement?: string
  location?: string
  experienceYears?: string
  focus?: string
  techStack?: string
  cvPdf?: {
    asset?: {
      _id: string
      url: string
      originalFilename?: string
      size?: number
      mimeType?: string
    }
  }
  email?: string
  github?: string
  linkedin?: string
  description?: string
  knownFor?: string[]
  experiences?: CVExperience[]
  skills?: CVSkills
  leadership?: string
}

// Site Settings types
export interface HeroKPI {
  label: string
  value: string
}

export interface Hero {
  locationBadge?: string
  headline?: string
  highlightedText?: string
  subheadline?: string
  portraitImage?: SanityImageSource
  kpis?: HeroKPI[]
}

export interface ProofStripItem {
  title: string
  value: string
  note: string
}

export interface WorkSection {
  heading?: string
  description?: string
}

export interface Pillar {
  title: string
  body: string
}

export interface ContactEmailSection {
  description?: string
  tip?: string
}

export interface ContactLinksSection {
  description?: string
}

export interface ContactPage {
  description?: string
  emailSection?: ContactEmailSection
  linksSection?: ContactLinksSection
  availability?: string
}

export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings'
  siteTitle: string
  siteDescription: string
  footerText: string
  hero?: Hero
  proofStrip?: ProofStripItem[]
  workSection?: WorkSection
  pillars?: Pillar[]
  contactPage?: ContactPage
}
