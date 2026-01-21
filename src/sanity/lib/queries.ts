import { groq } from 'next-sanity'

// Base project fields query
const projectFields = groq`
  _id,
  _type,
  title,
  "slug": slug.current,
  tagline,
  tags,
  featured,
  links {
    live,
    repo
  },
  caseStudy {
    problem,
    role,
    stack,
    media {
      eyebrow,
      headline,
      sub,
      gradient
    },
    mediaGallery[] {
  caption,
  image {
    asset->{
      _id,
      metadata {
        lqip
      }
    }
  }
},
    keyDecisions[] {
      title,
      bullets
    },
    highlights,
    architecture {
      summary,
      bullets
    },
    tradeoffs[] {
      decision,
      why
    },
    results,
    body
  }
`

// Get all projects
export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  ${projectFields}
}`

// Get featured projects
export const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(_createdAt desc) {
  ${projectFields}
}`

// Get a single project by slug
export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}`

// Get project slugs for static generation
export const projectSlugsQuery = groq`*[_type == "project" && defined(slug.current)] {
  "slug": slug.current
}`

// Get adjacent projects for navigation
export const adjacentProjectsQuery = groq`
  *[_type=="project"] | order(featured desc, _createdAt desc) {
    "slug": slug.current,
    title
  }
`;

// Get CV/profile data
export const cvQuery = groq`*[_type == "cv"][0] {
  _id,
  _type,
  name,
  role,
  positioningStatement,
  location,
  experienceYears,
  focus,
  techStack,
  cvPdfUrl,
  email,
  github,
  linkedin,
  description,
  knownFor,
  experiences[] {
    title,
    meta,
    description,
    stack
  },
  skills {
    frontend,
    backend,
    productInfra
  },
  leadership
}`;

// Get site settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  _id,
  _type,
  siteTitle,
  siteDescription,
  footerText,
  hero {
    locationBadge,
    headline,
    highlightedText,
    subheadline,
    portraitImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    kpis[] {
      label,
      value
    }
  },
  proofStrip[] {
    title,
    value,
    note
  },
  workSection {
    heading,
    description
  },
  pillars[] {
    title,
    body
  },
  contactPage {
    description,
    emailSection {
      description,
      tip
    },
    linksSection {
      description
    },
    availability
  }
}`;
