import { defineCollection, z } from "astro:content";

const partner = defineCollection({
  type: "content",
  schema: z.object({
    partnerName: z.string(),
    partnerAddress: z.object({
      street: z.string(),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
    }),
    partnerLogo: z.string().url(),
    partnerPrivacyUrl: z.string().url(),
  }),
});

export const collections = { partner };
