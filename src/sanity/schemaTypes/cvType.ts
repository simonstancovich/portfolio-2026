import { defineField, defineType } from "sanity";

export const cvType = defineType({
  name: "cv",
  title: "CV / Profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "positioningStatement",
      type: "text",
      title: "Positioning statement",
      description: "Short description of what you do",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "experienceYears",
      type: "string",
      title: "Years of experience",
      description: "e.g., '8+ years experience'",
    }),
    defineField({
      name: "focus",
      type: "string",
      description: "e.g., 'Web & Mobile'",
    }),
    defineField({
      name: "techStack",
      type: "string",
      title: "Tech stack",
      description: "e.g., 'React · Next.js · Node · NestJS'",
    }),
    defineField({
      name: "cvPdfUrl",
      type: "url",
      title: "CV PDF URL",
      description: "URL to the PDF version of your CV",
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      description: "Contact email address",
    }),
    defineField({
      name: "github",
      type: "url",
      title: "GitHub URL",
      description: "GitHub profile URL",
    }),
    defineField({
      name: "linkedin",
      type: "url",
      title: "LinkedIn URL",
      description: "LinkedIn profile URL (optional)",
    }),
    defineField({
      name: "description",
      type: "text",
      description: "Full description paragraph",
    }),
    defineField({
      name: "knownFor",
      type: "array",
      title: "What I'm known for",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "experiences",
      type: "array",
      title: "Selected experience",
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
              name: "meta",
              type: "string",
              description: "e.g., '2022 – 2025' or 'Startup project'",
            }),
            defineField({
              name: "description",
              type: "text",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "stack",
              type: "string",
              description: "e.g., 'React · TypeScript · Node.js'",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "meta",
            },
          },
        },
      ],
    }),
    defineField({
      name: "skills",
      type: "object",
      title: "Skills",
      fields: [
        defineField({
          name: "frontend",
          type: "string",
          description: "e.g., 'React, Next.js, React Native, TypeScript, Tailwind'",
        }),
        defineField({
          name: "backend",
          type: "string",
          description: "e.g., 'Node.js, NestJS, PostgreSQL, Prisma, Firebase'",
        }),
        defineField({
          name: "productInfra",
          type: "string",
          title: "Product & Infrastructure",
          description: "e.g., 'Payments (Stripe), Maps (Google Maps), Auth, CI/CD'",
        }),
      ],
    }),
    defineField({
      name: "leadership",
      type: "text",
      title: "Leadership",
      description: "Paragraph about leadership experience",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
    },
  },
});
