import { Link } from 'react-router-dom'

const HomePage = () => {
  // Sample data - you can replace this with real data later
  const recentPosts = [
    {
      id: 1,
      title: "Getting Started with Playwright Testing",
      excerpt: "Learn the fundamentals of automated testing with Playwright and how to set up your first test suite.",
      date: "2024-01-15",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Best Practices for API Testing",
      excerpt: "Discover essential strategies for testing REST APIs effectively and avoiding common pitfalls.",
      date: "2024-01-10",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Test Automation in CI/CD Pipelines",
      excerpt: "Integrate automated tests into your continuous integration workflow for better quality assurance.",
      date: "2024-01-05",
      readTime: "6 min read"
    }
  ]

  return (
    <div className="space-y-12">
      {/* Debug info */}
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
        <strong>Debug Info:</strong> HomePage component is rendering! Current URL: {window.location.href}
      </div>

      {/* Hero Section */}
      <section className="text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Welcome to My Software Testing Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hi! I'm a passionate software tester sharing insights, best practices, 
            and experiences in the world of quality assurance and test automation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">
            I'm a dedicated software testing professional with a passion for quality assurance 
            and test automation. With experience in various testing methodologies, I enjoy 
            exploring new tools and techniques to improve software quality.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This blog is where I share my journey, insights, and learnings in the field of 
            software testing. Whether you're just starting out or looking to advance your 
            testing skills, I hope you'll find valuable content here.
          </p>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
          <Link 
            to="/posts" 
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            View all posts →
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()} • {post.readTime}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  <Link to={`/posts/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/posts/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore My Work</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Check out my projects and see how I apply testing principles in real-world scenarios.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>
          <Link 
            to="/posts"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Read Blog Posts
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
