export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-19'

// Use defaults for build time if env vars are not set (e.g., in CI/Vercel)
// These will be overridden by actual env vars at runtime
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Default projectId for build time (should be set in Vercel environment variables)
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sfzi5jj2'
