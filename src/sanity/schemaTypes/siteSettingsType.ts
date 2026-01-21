import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    // Site Metadata
    defineField({
      name: "siteTitle",
      type: "string",
      title: "Site Title",
      description: "Main site title (used in metadata)",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "siteDescription",
      type: "text",
      title: "Site Description",
      description: "Meta description for SEO",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "footerText",
      type: "string",
      title: "Footer Text",
      description: "Text to display in footer (year will be added automatically)",
      validation: (r) => r.required(),
    }),

    // Hero Section
    defineField({
      name: "hero",
      type: "object",
      title: "Hero Section",
      fields: [
        defineField({
          name: "locationBadge",
          type: "string",
          title: "Location Badge",
          description: "e.g., 'Stockholm • Full-stack • React / TypeScript / Node'",
        }),
        defineField({
          name: "headline",
          type: "text",
          title: "Headline",
          description: "Main headline text",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "highlightedText",
          type: "string",
          title: "Highlighted Text",
          description: "Text to highlight in the headline (e.g., 'high-taste')",
        }),
        defineField({
          name: "subheadline",
          type: "text",
          title: "Subheadline",
          description: "Subheadline text below the main headline",
        }),
        defineField({
          name: "portraitImage",
          type: "image",
          title: "Portrait Image",
          description: "Your portrait photo",
          options: { hotspot: true },
        }),
        defineField({
          name: "kpis",
          type: "array",
          title: "KPIs",
          description: "Key performance indicators to display",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({
                  name: "value",
                  type: "string",
                  validation: (r) => r.required(),
                }),
              ],
              preview: {
                select: {
                  title: "label",
                  subtitle: "value",
                },
              },
            },
          ],
          validation: (r) => r.max(4),
        }),
      ],
    }),

    // Proof Strip
    defineField({
      name: "proofStrip",
      type: "array",
      title: "Proof Strip Items",
      description: "Items to display in the proof strip section",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "value",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "note",
              type: "text",
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "value",
            },
          },
        },
      ],
    }),

    // Homepage Work Section
    defineField({
      name: "workSection",
      type: "object",
      title: "Work Section",
      fields: [
        defineField({
          name: "heading",
          type: "string",
          title: "Heading",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "description",
          type: "text",
          title: "Description",
          validation: (r) => r.required(),
        }),
      ],
    }),

    // Homepage Pillars
    defineField({
      name: "pillars",
      type: "array",
      title: "Pillars",
      description: "Three pillar cards displayed on homepage",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "body",
              type: "text",
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
      validation: (r) => r.max(3),
    }),

    // Contact Page
    defineField({
      name: "contactPage",
      type: "object",
      title: "Contact Page",
      fields: [
        defineField({
          name: "description",
          type: "text",
          title: "Page Description",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "emailSection",
          type: "object",
          title: "Email Section",
          fields: [
            defineField({
              name: "description",
              type: "text",
              title: "Description",
            }),
            defineField({
              name: "tip",
              type: "text",
              title: "Tip Text",
            }),
          ],
        }),
        defineField({
          name: "linksSection",
          type: "object",
          title: "Links Section",
          fields: [
            defineField({
              name: "description",
              type: "text",
              title: "Description",
            }),
          ],
        }),
        defineField({
          name: "availability",
          type: "string",
          title: "Availability Text",
          description: "e.g., 'Open to: full-time • contract • consulting'",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "siteTitle",
    },
    prepare({ title }: { title?: string }) {
      return {
        title: title || "Site Settings",
        subtitle: "Global site configuration",
      };
    },
  },
});
