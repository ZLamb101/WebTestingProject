// tests/e2e/utils/test-data.ts
export const TEST_DATA = {
  pages: {
    home: {
      title: 'Welcome to My Software Testing Blog',
      sections: ['About Me', 'Recent Posts', 'Explore My Work'],
      aboutMeText: 'I\'m a dedicated software testing professional'
    },
    posts: {
      title: 'Blog Posts',
      expectedCount: 7, // Based on allPosts in content.ts
      categories: ['All', 'Automation', 'API Testing', 'DevOps', 'Responsive Testing', 'Performance', 'Security', 'Testing Strategy']
    },
    projects: {
      title: 'Projects',
      expectedCount: 4, // Based on projects in content.ts
      categories: ['All', 'Test Automation', 'API Testing', 'Web Performance', 'Visual Testing']
    },
    testingStrategy: {
      title: 'Front-End Testing Strategy',
      sections: [
        'Front-End Testing Checklist',
        'Front-End Testing Pyramid', 
        'Current Implementation Status',
        'Testing Tools & Technologies',
        'Key Best Practices'
      ]
    }
  },
  
  recentPosts: {
    expectedCount: 3, // Based on recentPosts in content.ts
    firstPost: {
      readTime: '5 min read',
      category: 'Automation'
    }
  },

  projects: {
    expectedCount: 4, // Based on projects in content.ts
    firstProject: {
      status: 'Completed',
      technologies: ['Playwright', 'TypeScript'],
      features: ['Cross-browser testing']
    }
  },

  navigation: {
    items: ['Home', 'Posts', 'Projects', 'Testing Strategy'],
    logoText: 'Software Testing Blog'
  },

  responsive: {
    mobile: { width: 375, height: 667 },
    desktop: { width: 1200, height: 800 }
  },

  // URLs and paths
  urls: {
    home: '/',
    posts: '/posts',
    projects: '/projects',
    testingStrategy: '/testing-strategy',
    basename: '/WebTestingProject'
  },

  // Test patterns for flexible assertions
  patterns: {
    date: /\d+\/\d+\/\d+/, // Matches dates like "1/15/2025"
    readTime: /min read/, // Matches "5 min read"
    status: /Completed|In Progress|Planning/,
    technology: /Playwright|TypeScript|React|Node\.js/
  }
} as const

// Type definitions for better IDE support
export type PageData = typeof TEST_DATA.pages
export type NavigationData = typeof TEST_DATA.navigation
export type ResponsiveData = typeof TEST_DATA.responsive