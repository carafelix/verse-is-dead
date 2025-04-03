import type { CollectionEntry } from 'astro:content'

export type Post = CollectionEntry<'posts'>
export type Manifiesto = CollectionEntry<'manifiestos'>
export * from './themeConfig.ts'
