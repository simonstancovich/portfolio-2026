import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Client for server-side usage (no CDN for fresh data)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN for server-side to get fresh data
  perspective: 'published', // Only fetch published content
})

// Client for client-side usage (with CDN for performance)
export const clientWithCdn = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Enable CDN for client-side performance
  perspective: 'published',
})
