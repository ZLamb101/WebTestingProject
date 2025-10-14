import { getPlaceholderImage } from '../utils/helpers'

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  tags: string[]
  content?: string
}

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  category: string
  status: 'Completed' | 'In Progress' | 'Planning'
  githubUrl: string
  demoUrl: string
  image: string
  features: string[]
}

export const recentPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Playwright Testing",
    excerpt: "Learn the fundamentals of automated testing with Playwright and how to set up your first test suite.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Automation",
    tags: ["Playwright", "E2E Testing", "JavaScript"]
  },
  {
    id: 2,
    title: "Best Practices for API Testing",
    excerpt: "Discover essential strategies for testing REST APIs effectively and avoiding common pitfalls.",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "API Testing",
    tags: ["REST API", "Postman", "Testing Strategies"]
  },
  {
    id: 3,
    title: "Test Automation in CI/CD Pipelines",
    excerpt: "Integrate automated tests into your continuous integration workflow for better quality assurance.",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "DevOps",
    tags: ["CI/CD", "Jenkins", "Quality Gates"]
  }
]

export const allPosts: BlogPost[] = [
  ...recentPosts,
  {
    id: 4,
    title: "Comprehensive Front-End Testing Strategy",
    excerpt: "A complete guide to front-end software testing lifecycle covering all phases from requirements analysis to test reporting. Includes testing types, tools, best practices, and implementation roadmap.",
    date: "2025-01-20",
    readTime: "15 min read",
    category: "Testing Strategy",
    tags: ["Testing Lifecycle", "Front-End Testing", "Quality Assurance", "Test Automation", "STLC"]
  },
  {
    id: 5,
    title: "Responsive Web Design Testing",
    excerpt: "Comprehensive guide to testing responsive web applications across different viewports and devices.",
    date: "2025-01-01",
    readTime: "8 min read",
    category: "Responsive Testing",
    tags: ["Responsive Design", "Viewport Testing", "CSS Grid", "Flexbox"]
  },
  {
    id: 6,
    title: "Web Performance Testing",
    excerpt: "Understanding Core Web Vitals, page load optimization, and performance testing techniques for web applications.",
    date: "2025-12-28",
    readTime: "9 min read",
    category: "Performance",
    tags: ["Core Web Vitals", "Lighthouse", "Performance", "Optimization"]
  },
  {
    id: 7,
    title: "Web Security Testing",
    excerpt: "Essential security testing techniques for web applications including XSS, CSRF, and OWASP Top 10.",
    date: "2025-12-20",
    readTime: "6 min read",
    category: "Security",
    tags: ["Web Security", "XSS", "CSRF", "OWASP"]
  }
]

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Test Automation Suite",
    description: "Comprehensive test automation framework for e-commerce platforms using Playwright and TypeScript. Includes UI tests, API tests, and performance tests.",
    technologies: ["Playwright", "TypeScript", "Jest", "Docker"],
    category: "Test Automation",
    status: "Completed",
    githubUrl: "#",
    demoUrl: "#",
    image: getPlaceholderImage(),
    features: [
      "Cross-browser testing",
      "API integration testing", 
      "Performance monitoring",
      "CI/CD integration"
    ]
  },
  {
    id: 2,
    title: "API Testing Framework",
    description: "A robust API testing framework built with Postman and Newman, featuring automated test execution and comprehensive reporting.",
    technologies: ["Postman", "Newman", "JavaScript", "Jenkins"],
    category: "API Testing",
    status: "In Progress",
    githubUrl: "#",
    demoUrl: "#",
    image: getPlaceholderImage(),
    features: [
      "Automated test execution",
      "Dynamic test data generation",
      "Comprehensive reporting",
      "Environment management"
    ]
  },
  {
    id: 3,
    title: "Visual Regression Testing Suite",
    description: "A comprehensive visual testing framework for web applications using Percy and custom screenshot comparison tools.",
    technologies: ["Percy", "Playwright", "JavaScript", "GitHub Actions"],
    category: "Visual Testing",
    status: "Completed",
    githubUrl: "#",
    demoUrl: "#",
    image: getPlaceholderImage(),
    features: [
      "Automated screenshot comparison",
      "Cross-browser visual testing",
      "Design system validation",
      "CI/CD integration"
    ]
  },
  {
    id: 4,
    title: "Web Performance Monitoring Dashboard",
    description: "A React-based dashboard for monitoring Core Web Vitals and performance metrics using Lighthouse and custom analytics.",
    technologies: ["React", "Lighthouse", "Node.js", "Chart.js"],
    category: "Web Performance",
    status: "Completed",
    githubUrl: "#",
    demoUrl: "#",
    image: getPlaceholderImage(),
    features: [
      "Core Web Vitals tracking",
      "Performance trend analysis",
      "Real-time alerts",
      "Historical reporting"
    ]
  }
]

export const categories = ["All", "Automation", "API Testing", "DevOps", "Responsive Testing", "Performance", "Security", "Testing Strategy"]
export const projectCategories = ["All", "Test Automation", "API Testing", "Web Performance", "Visual Testing"]
