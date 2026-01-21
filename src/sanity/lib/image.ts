import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

/**
 * Get optimized image URL with common presets
 */
export function getImageUrl(
  source: SanityImageSource | null | undefined,
  options?: {
    width?: number
    height?: number
    quality?: number
    format?: 'webp' | 'jpg' | 'png'
    fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
  }
): string | null {
  if (!source) return null

  const { width, height, quality = 85, format, fit } = options || {}

  let imageUrl = urlFor(source)

  if (width) imageUrl = imageUrl.width(width)
  if (height) imageUrl = imageUrl.height(height)
  if (quality) imageUrl = imageUrl.quality(quality)
  if (format) imageUrl = imageUrl.format(format)
  if (fit) imageUrl = imageUrl.fit(fit)

  return imageUrl.url()
}

/**
 * Get image dimensions for Next.js Image component
 */
export function getImageDimensions(
  source: SanityImageSource | null | undefined
): { width: number; height: number; aspectRatio: number } | null {
  if (!source) return null

  // If source has metadata, use it
  if (
    typeof source === 'object' &&
    'asset' in source &&
    source.asset &&
    'metadata' in source.asset &&
    source.asset.metadata &&
    'dimensions' in source.asset.metadata &&
    source.asset.metadata.dimensions
  ) {
    const { width, height, aspectRatio } = source.asset.metadata.dimensions
    return { width, height, aspectRatio }
  }

  // Fallback to common aspect ratio
  return { width: 1600, height: 900, aspectRatio: 16 / 9 }
}

/**
 * Get alt text from image source
 */
export function getImageAlt(
  source: SanityImageSource | null | undefined,
  fallback?: string
): string {
  if (!source) return fallback || ''

  if (typeof source === 'object' && 'alt' in source && source.alt) {
    return source.alt
  }

  return fallback || ''
}

/**
 * Check if image source exists
 */
export function hasImage(source: SanityImageSource | null | undefined): boolean {
  if (!source) return false

  if (typeof source === 'object' && 'asset' in source) {
    return !!source.asset
  }

  return !!source
}

/**
 * Common image presets for different use cases
 */
export const imagePresets = {
  thumbnail: { width: 200, height: 200, quality: 75 },
  small: { width: 400, quality: 80 },
  medium: { width: 800, quality: 85 },
  large: { width: 1200, quality: 90 },
  xlarge: { width: 1600, quality: 90 },
  xxlarge: { width: 2200, quality: 95 },
  hero: { width: 1920, height: 1080, quality: 90 },
} as const

/**
 * Get optimized image URL using a preset
 */
export function getImageUrlPreset(
  source: SanityImageSource | null | undefined,
  preset: keyof typeof imagePresets
): string | null {
  if (!source) return null

  const presetOptions = imagePresets[preset]
  return getImageUrl(source, presetOptions)
}
