import { client } from './client'
import {
  projectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
} from './queries'
import type { Project } from './types'

/**
 * Fetch all projects from Sanity
 */
export async function getProjects(): Promise<Project[]> {
  return await client.fetch<Project[]>(projectsQuery)
}

/**
 * Fetch only featured projects
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  return await client.fetch<Project[]>(featuredProjectsQuery)
}

/**
 * Fetch a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const project = await client.fetch<Project | null>(projectBySlugQuery, { slug })
  return project || null
}

/**
 * Get all project slugs for static generation
 */
export async function getProjectSlugs(): Promise<{ slug: string }[]> {
  return await client.fetch<{ slug: string }[]>(projectSlugsQuery)
}
