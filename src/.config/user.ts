import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: 'El verso murió',
    subtitle: '...Tipografías...',
    author: 'NeoEnanos',
    description: 'Partidarios del choclón',
    website: 'https://elversomurio.cl',
    pageSize: Infinity,
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
        href: 'mailto:tribilin@elversomurio.cl',
      },
    ],
    navLinks: [

      {
        name: 'Manifest',
        href: '/manifiests/',
      },
      {
        name: 'Poetry',
        href: '/poetry',
      },
      {
        name: 'Brain',
        href: '/brain',
      },
      // {
      //   name: 'Posts',
      //   href: '/posts',
      // },
      // {
      //   name: 'Authors',
      //   href: '/authors',
      // },
      // {
      //   name: 'Archive',
      //   href: '/archive',
      // },
      {
        name: 'Categories',
        href: '/categories',
      },

      {
        name: 'Chat',
        href: '/xat',
      },

    ],
    footer: [
      '© %year %author',
    ],
  },
  appearance: {
    theme: 'dark',
    locale: 'es-es',
  },
  analytics: {
    posthogAnalyticsId: 'phc_ePvCXCEx2aScDEtVEXcGBfwyjXQ5JaSwJ8Tc2QN3ldu',
  },
  seo: {
    twitter: '',
    meta: [],
    link: [],
  },
  comment: {
    twikoo: { lang: 'es', envId: '', region: '' },
  },
}
