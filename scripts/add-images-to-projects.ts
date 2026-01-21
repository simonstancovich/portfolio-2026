/**
 * Script to add random images to Sanity projects
 * Run with: npx tsx scripts/add-images-to-projects.ts
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-19',
  token: process.env.SANITY_API_TOKEN, // You'll need to add this to your .env
  useCdn: false,
})

// Image URLs from Unsplash related to each project theme
const projectImages: Record<string, Array<{ url: string; caption: string }>> = {
  ecotracker: [
    {
      url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80',
      caption: 'Carbon footprint dashboard showing real-time tracking',
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
      caption: 'Mobile app interface with sustainability insights',
    },
    {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
      caption: 'Data visualization of carbon reduction progress',
    },
  ],
  'design-system-hub': [
    {
      url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80',
      caption: 'Design system components library interface',
    },
    {
      url: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1600&q=80',
      caption: 'Component documentation and token system',
    },
    {
      url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80',
      caption: 'Design system in action across multiple products',
    },
  ],
  'ai-code-reviewer': [
    {
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80',
      caption: 'AI-powered code review interface',
    },
    {
      url: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1600&q=80',
      caption: 'Code analysis dashboard with suggestions',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1600&q=80',
      caption: 'Machine learning model training interface',
    },
  ],
}

async function uploadImageFromUrl(url: string, filename: string) {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`)
    
    const buffer = await response.arrayBuffer()
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      filename,
      contentType: response.headers.get('content-type') || 'image/jpeg',
    })
    
    return asset._id
  } catch (error) {
    console.error(`Error uploading image from ${url}:`, error)
    throw error
  }
}

async function addImagesToProject(slug: string, images: Array<{ url: string; caption: string }>) {
  try {
    // First, get the project
    const projects = await client.fetch(
      `*[_type == "project" && slug.current == $slug][0] { _id }`,
      { slug }
    )

    if (!projects) {
      console.error(`Project with slug "${slug}" not found`)
      return
    }

    const projectId = projects._id

    // Upload all images and create gallery items
    const galleryItems = await Promise.all(
      images.map(async (img, index) => {
        const imageAssetId = await uploadImageFromUrl(
          img.url,
          `${slug}-image-${index + 1}.jpg`
        )

        return {
          _type: 'object',
          _key: `gallery-item-${index}`,
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAssetId,
            },
          },
          caption: img.caption,
        }
      })
    )

    // Update the project with the media gallery
    await client
      .patch(projectId)
      .set({ 'caseStudy.mediaGallery': galleryItems })
      .commit()

    console.log(`✓ Added ${galleryItems.length} images to "${slug}"`)
  } catch (error) {
    console.error(`Error adding images to project "${slug}":`, error)
  }
}

async function main() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('Error: SANITY_API_TOKEN environment variable is required')
    console.error('Add it to your .env file or export it before running this script')
    process.exit(1)
  }

  console.log('Adding images to projects...\n')

  for (const [slug, images] of Object.entries(projectImages)) {
    await addImagesToProject(slug, images)
  }

  console.log('\n✓ Done!')
}

main().catch((error) => {
  console.error('Script error:', error)
  process.exit(1)
})
