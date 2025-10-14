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
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Automation",
    tags: ["Playwright", "E2E Testing", "JavaScript"]
  },
  {
    id: 2,
    title: "Best Practices for API Testing",
    excerpt: "Discover essential strategies for testing REST APIs effectively and avoiding common pitfalls.",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "API Testing",
    tags: ["REST API", "Postman", "Testing Strategies"]
  },
  {
    id: 3,
    title: "Test Automation in CI/CD Pipelines",
    excerpt: "Integrate automated tests into your continuous integration workflow for better quality assurance.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "DevOps",
    tags: ["CI/CD", "Jenkins", "Quality Gates"]
  }
]

export const allPosts: BlogPost[] = [
  ...recentPosts,
  {
    id: 4,
    title: "Mobile App Testing Strategies",
    excerpt: "Comprehensive guide to testing mobile applications across different platforms and devices.",
    date: "2024-01-01",
    readTime: "8 min read",
    category: "Mobile Testing",
    tags: ["Mobile Apps", "iOS", "Android"]
  },
  {
    id: 5,
    title: "Performance Testing Fundamentals",
    excerpt: "Understanding load testing, stress testing, and performance optimization techniques.",
    date: "2023-12-28",
    readTime: "9 min read",
    category: "Performance",
    tags: ["Load Testing", "JMeter", "Performance"]
  },
  {
    id: 6,
    title: "Security Testing Best Practices",
    excerpt: "Essential security testing techniques to protect your applications from vulnerabilities.",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "Security",
    tags: ["Security Testing", "OWASP", "Penetration Testing"]
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
    title: "Mobile App Testing Toolkit",
    description: "A comprehensive testing toolkit for mobile applications, supporting both iOS and Android platforms with Appium and TestNG.",
    technologies: ["Appium", "TestNG", "Java", "Selenium Grid"],
    category: "Mobile Testing",
    status: "Completed",
    githubUrl: "#",
    demoUrl: "#",
    image: getPlaceholderImage(),
    features: [
      "Cross-platform testing",
      "Real device testing",
      "Parallel execution",
      "Detailed reporting"
    ]
  },
  {
    id: 4,
    title: "Performance Testing Dashboard",
    description: "A web-based dashboard for monitoring and analyzing performance test results using JMeter and custom reporting tools.",
    technologies: ["JMeter", "React", "Node.js", "MongoDB"],
    category: "Performance Testing",
    status: "Planning",
    githubUrl: "#",
    demoUrl: "#",
    image: getPlaceholderImage(),
    features: [
      "Real-time monitoring",
      "Historical data analysis",
      "Custom metrics",
      "Alert system"
    ]
  }
]

export const categories = ["All", "Automation", "API Testing", "DevOps", "Mobile Testing", "Performance", "Security"]
export const projectCategories = ["All", "Test Automation", "API Testing", "Mobile Testing", "Performance Testing"]
