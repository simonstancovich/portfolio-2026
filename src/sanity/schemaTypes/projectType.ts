import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "tagline", type: "string" }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.max(8),
    }),
    defineField({ name: "featured", type: "boolean" }),

    defineField({
      name: "links",
      type: "object",
      fields: [
        defineField({ name: "live", type: "url" }),
        defineField({ name: "repo", type: "url" }),
      ],
    }),

    defineField({
      name: "caseStudy",
      type: "object",
      fields: [
        defineField({ name: "problem", type: "text" }),
        defineField({ name: "role", type: "text" }),
        defineField({
          name: "stack",
          type: "array",
          of: [{ type: "string" }],
        }),

        defineField({
          name: "media",
          type: "object",
          fields: [
            defineField({ name: "eyebrow", type: "string" }),
            defineField({ name: "headline", type: "string" }),
            defineField({ name: "sub", type: "string" }),
            defineField({
              name: "gradient",
              type: "string",
              options: {
                list: [
                  { title: "Mix", value: "mix" },
                  { title: "Violet", value: "violet" },
                  { title: "Cyan", value: "cyan" },
                ],
                layout: "radio",
              },
              initialValue: "mix",
            }),
          ],
        }),

        defineField({
          name: "mediaGallery",
          title: "Media gallery",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "image",
                  type: "image",
                  options: { hotspot: true },
                  validation: (r) => r.required(),
                }),
                defineField({ name: "caption", type: "string" }),
              ],
              preview: {
                select: { title: "caption", media: "image" },
                prepare({ title, media }: { title?: string; media?: { _type: string; asset?: { _ref: string } } }) {
                  return { title: title || "Media item", media: media as any };
                },
              },
            },
          ],
        }),

        defineField({
          name: "keyDecisions",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", type: "string" }),
                defineField({
                  name: "bullets",
                  type: "array",
                  of: [{ type: "string" }],
                }),
              ],
            },
          ],
        }),

        defineField({
          name: "highlights",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "architecture",
          type: "object",
          fields: [
            defineField({ name: "summary", type: "text" }),
            defineField({
              name: "bullets",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),
        defineField({
          name: "tradeoffs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "decision", type: "string" }),
                defineField({ name: "why", type: "text" }),
              ],
            },
          ],
        }),
        defineField({
          name: "results",
          type: "array",
          of: [{ type: "string" }],
        }),

        // Longform body (Portable Text)
        defineField({
          name: "body",
          title: "Case study body",
          type: "array",
          of: [{ type: "block" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tagline",
    },
  },
});
