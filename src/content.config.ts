import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

function getPostLikeCollection(foldername: string) {
  return defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${foldername}` }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        modDate: z.coerce.date().optional(),
        categories: z.array(z.string()),
        draft: z.boolean().default(false).optional(),
        description: z.string().optional(),
        customData: z.string().optional(),
        banner: image()
          .refine(img => Math.max(img.width, img.height) <= 4096, { message: 'Width and height of the banner must less than 4096 pixels' })
          .optional(),
        author: z.string().optional(),
        commentsUrl: z.string().optional(),
        source: z.optional(z.object({ url: z.string(), title: z.string() })),
        enclosure: z.optional(z.object({ url: z.string(), length: z.number(), type: z.string() })),
        pin: z.boolean().default(false).optional(),
      }),
  })
}

const posts = getPostLikeCollection('posts')
const manifiestos = getPostLikeCollection('manifiestos')

const spec = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/spec' }),
})

const signatures = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/signatures' }),
  schema: () =>
    z.object({
      name: z.string(),
      review: z.string(),
    }),
})

export const collections = {
  posts,
  spec,
  signatures,
  manifiestos,
}
