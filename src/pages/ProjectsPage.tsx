import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  // Sample data - you can replace this with real data later
  const projects = [
    {
      id: 1,
      title: "E-commerce Test Automation Suite",
      description: "Comprehensive test automation framework for e-commerce platforms using Playwright and TypeScript. Includes UI tests, API tests, and performance tests.",
      technologies: ["Playwright", "TypeScript", "Jest", "Docker"],
      category: "Test Automation",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      image: "/api/placeholder/400/250",
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
      image: "/api/placeholder/400/250",
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
      image: "/api/placeholder/400/250",
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
      image: "/api/placeholder/400/250",
      features: [
        "Real-time monitoring",
        "Historical data analysis",
        "Custom metrics",
        "Alert system"
      ]
    }
  ]

  const categories = ["All", "Test Automation", "API Testing", "Mobile Testing", "Performance Testing"]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A collection of testing projects and frameworks I've developed to improve software quality and testing efficiency.
        </p>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h2>
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

      {/* Projects Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            {/* Project Image Placeholder */}
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">🚀</div>
                <div className="text-sm opacity-90">{project.title}</div>
              </div>
            </div>

            <div className="p-6">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800'
                        : project.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-800 transition-colors"
                >
                  View Code
                </a>
                <a
                  href={project.demoUrl}
                  className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-50 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaborating?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          I'm always interested in discussing testing challenges and exploring new opportunities in software quality assurance.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:your.email@example.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
          <Link 
            to="/posts"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Read My Blog
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
