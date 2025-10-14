import { Link } from 'react-router-dom'

const PostsPage = () => {
  // Sample data - you can replace this with real data later
  const allPosts = [
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
    },
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

  const categories = ["All", "Automation", "API Testing", "DevOps", "Mobile Testing", "Performance", "Security"]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Posts</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore my thoughts, experiences, and insights on software testing and quality assurance.
        </p>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {allPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span>{new Date(post.date).toLocaleDateString()} • {post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                <Link to={`/posts/${post.id}`}>
                  {post.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read More Link */}
              <Link 
                to={`/posts/${post.id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Read full post →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-md cursor-not-allowed">
              Previous
            </button>
            <span className="px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">
              1
            </span>
            <span className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md">
              2
            </span>
            <span className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md">
              3
            </span>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostsPage
