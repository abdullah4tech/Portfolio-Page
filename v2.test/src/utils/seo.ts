export const SITE_CONFIG = {
  name: 'Abdullah O. Mustapha',
  title: 'Abdullah O. Mustapha | Software Engineer & Full-Stack Developer',
  description: 'Dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.',
  url: 'https://abdullahmustapha.xyz',
  image: 'https://abdullahmustapha.xyz/og-image.jpg',
  email: 'abdullahmu4life@gmail.com',
  twitter: '@abdullah4tech_',
  github: 'https://github.com/abdullah4tech',
  linkedin: 'https://linkedin.com/in/abdullah4tech',
  keywords: [
    'Abdullah Mustapha',
    'Software Engineer',
    'Full-Stack Developer',
    'Vue.js',
    'TypeScript',
    'JavaScript',
    'Web Development',
    'Portfolio',
    'Scalable Applications',
    'UI/UX',
    'Frontend Development',
    'Backend Development'
  ]
}

export interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  noIndex?: boolean
  canonical?: string
}

export const generateMetaTags = (config: SEOConfig = {}) => {
  const {
    title = SITE_CONFIG.title,
    description = SITE_CONFIG.description,
    keywords = SITE_CONFIG.keywords,
    image = SITE_CONFIG.image,
    url = SITE_CONFIG.url,
    type = 'website',
    noIndex = false,
    canonical = url
  } = config

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { name: 'author', content: SITE_CONFIG.name },
      { name: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow' },
      { name: 'googlebot', content: noIndex ? 'noindex, nofollow' : 'index, follow' },

      // Open Graph / Facebook
      { property: 'og:type', content: type },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: 'Abdullah Mustapha Portfolio' },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `${SITE_CONFIG.name} - Software Engineer Portfolio` },
      { property: 'og:locale', content: 'en_US' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: SITE_CONFIG.twitter },
      { name: 'twitter:creator', content: SITE_CONFIG.twitter },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:image:alt', content: `${SITE_CONFIG.name} - Software Engineer Portfolio` },

      // Additional SEO
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'application-name', content: 'Abdullah Mustapha Portfolio' },
      { name: 'apple-mobile-web-app-title', content: 'Abdullah Portfolio' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    ],
    link: [
      { rel: 'canonical', href: canonical },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ]
  }
}

export const generateStructuredData = (config: {
  type?: 'Person' | 'Organization' | 'WebSite'
  additionalProperties?: Record<string, any>
} = {}) => {
  const { type = 'Person', additionalProperties = {} } = config

  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  if (type === 'Person') {
    return {
      ...baseData,
      name: SITE_CONFIG.name,
      jobTitle: 'Software Engineer',
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      email: SITE_CONFIG.email,
      sameAs: [
        SITE_CONFIG.github,
        `https://twitter.com/${SITE_CONFIG.twitter.replace('@', '')}`,
        SITE_CONFIG.linkedin
      ],
      knowsAbout: [
        'Software Engineering',
        'Full-Stack Development',
        'Vue.js',
        'TypeScript',
        'JavaScript',
        'Web Development',
        'User Interface Design',
        'Scalable Applications',
        'Frontend Development',
        'Backend Development'
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance'
      },
      ...additionalProperties
    }
  }

  if (type === 'WebSite') {
    return {
      ...baseData,
      name: SITE_CONFIG.title,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      author: {
        '@type': 'Person',
        name: SITE_CONFIG.name
      },
      ...additionalProperties
    }
  }

  return { ...baseData, ...additionalProperties }
}

export const generateBreadcrumbs = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}
