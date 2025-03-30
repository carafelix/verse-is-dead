import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: 'El verso murió',
    subtitle: 'Tipografías',
    author: 'NeoEnanos',
    description: 'Partidarios del choclón',
    website: 'https://elversomurio.cl',
    pageSize: 5,
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/carafelix/verse-is-dead',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'telegram',
        href: 'https://t.me/burocrata',
      },
      {
        name: 'email',
        href: 'mailto:enano@elversomurio.cl',
      },
    ],
    navLinks: [
      {
        name: 'Manifest',
        href: '/',
      },
      {
        name: 'Poetry',
        href: '/categories/Poesía',
      },
      {
        name: 'Material',
        href: '/categories/Anexo',
      },
      // {
      //   name: 'Authors',
      //   href: '/authors',
      // },
      // {
      //   name: 'Archive',
      //   href: '/archive',
      // },
      // {
      //   name: 'Categories',
      //   href: '/categories',
      // },

    ],
    footer: [
      '© %year %author',
    ],
  },
  appearance: {
    theme: 'dark',
    locale: 'es-es',
  },
  seo: {
    twitter: '',
    meta: [],
    link: [],
  },
}
