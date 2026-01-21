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
