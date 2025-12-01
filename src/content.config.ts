import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
    }),
});

const illustrationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/illustrations" }),
  schema: ({ }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
    }),
});

const recipesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: ({ }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
  illustrations: illustrationsCollection,
  recipes: recipesCollection,
};

