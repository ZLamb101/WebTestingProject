export const SITE_CONFIG = {
  name: 'Software Testing Blog',
  description: 'A modern, responsive blog website showcasing software testing expertise and serving as a professional portfolio.',
  url: 'https://zlamb101.github.io/WebTestingProject',
  author: 'Your Name', // Update with your actual name
  email: 'your.email@example.com', // Update with your actual email
  github: 'https://github.com/ZLamb101', // Update with your actual GitHub
  linkedin: 'https://linkedin.com/in/yourprofile', // Update with your actual LinkedIn
} as const

export const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Posts', path: '/posts' },
  { name: 'Projects', path: '/projects' },
] as const

export const SOCIAL_LINKS = {
  github: 'https://github.com/ZLamb101',
  linkedin: 'https://linkedin.com/in/yourprofile',
  email: 'mailto:your.email@example.com',
} as const
