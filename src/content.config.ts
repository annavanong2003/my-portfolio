import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ }) =>
    z.object({
      title: z.string(),
      description: z.string(),
    }),
});

const illustrationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/illustrations" }),
  schema: ({ }) =>
    z.object({
      title: z.string(),
      description: z.string(),
    }),
});

const recipesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: ({ }) =>
    z.object({
      title: z.string(),
      description: z.string(),
    }),
});

const skillsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/skills" }),
  schema: ({ }) =>
    z.object({
      name: z.string(),
      category: z.string(),
      level: z.string(),
      icon: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
  illustrations: illustrationsCollection,
  recipes: recipesCollection,
  skills: skillsCollection,
};

