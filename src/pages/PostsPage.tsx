import { Link } from 'react-router-dom'
import { allPosts, categories } from '../data/content'

const PostsPage = () => {

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
