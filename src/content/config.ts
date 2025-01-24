import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    projectUrl: z.string().url(),
    liveUrl: z.string().url(),
    description: z.string(),
  }),
});

export const collections = {
  projects,
};
