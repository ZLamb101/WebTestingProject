export const SITE_CONFIG = {
  name: 'Software Testing Blog',
  description: 'A modern, responsive blog website showcasing software testing expertise and serving as a professional portfolio.',
  url: 'https://zlamb101.github.io/WebTestingProject',
  author: 'Zane Lamb', // Update with your actual name
  email: 'zanelamb@live.com', // Update with your actual email
  github: 'https://github.com/ZLamb101', // Update with your actual GitHub
  linkedin: 'https://linkedin.com/in/Zanelamb', // Update with your actual LinkedIn
} as const

export const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Posts', path: '/posts' },
  { name: 'Projects', path: '/projects' },
  { name: 'Testing Strategy', path: '/testing-strategy' },
] as const

export const SOCIAL_LINKS = {
  github: 'https://github.com/ZLamb101',
  linkedin: 'https://linkedin.com/in/yourprofile',
  email: 'mailto:zanelamb@live.com',
} as const
