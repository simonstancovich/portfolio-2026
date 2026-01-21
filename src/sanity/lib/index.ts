// Client exports
export { client, clientWithCdn } from './client'

// Query exports
export {
  projectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
} from './queries'

// Type exports
export type {
  Project,
  ProjectLinks,
  ProjectMedia,
  ProjectKeyDecision,
  ProjectArchitecture,
  ProjectTradeoff,
  ProjectCaseStudy,
  SanityDocument,
} from './types'

// Function exports
export {
  getProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectSlugs,
} from './projects'
