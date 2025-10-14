import TestingChecklist from '../components/TestingChecklist'

const TestingStrategyPage = () => {
  const testingChecklistItems = [
    // Pre-Development
    { id: 'req-analysis', text: 'Web requirements analysis completed', category: 'Pre-Development' },
    { id: 'test-plan', text: 'Front-end test plan created', category: 'Pre-Development' },
    { id: 'env-setup', text: 'Testing environment setup', category: 'Pre-Development' },
    { id: 'tool-selection', text: 'Web testing tools selected', category: 'Pre-Development' },
    { id: 'team-training', text: 'Team training completed', category: 'Pre-Development' },
    
    // During Development
    { id: 'unit-tests', text: 'Unit tests written (TDD approach)', category: 'During Development' },
    { id: 'component-tests', text: 'React component tests implemented', category: 'During Development' },
    { id: 'visual-tests', text: 'Visual regression tests added', category: 'During Development' },
    { id: 'code-coverage', text: 'Code coverage > 80%', category: 'During Development' },
    { id: 'code-reviews', text: 'Code reviews include test review', category: 'During Development' },
    
    // Pre-Release
    { id: 'e2e-tests', text: 'E2E tests executed', category: 'Pre-Release' },
    { id: 'cross-browser', text: 'Cross-browser testing completed', category: 'Pre-Release' },
    { id: 'performance', text: 'Core Web Vitals testing done', category: 'Pre-Release' },
    { id: 'accessibility', text: 'Accessibility testing verified', category: 'Pre-Release' },
    { id: 'responsive', text: 'Responsive design testing completed', category: 'Pre-Release' },
    { id: 'regression', text: 'Regression testing passed', category: 'Pre-Release' },
    
    // Post-Release
    { id: 'monitoring', text: 'Production monitoring active', category: 'Post-Release' },
    { id: 'error-tracking', text: 'Error tracking configured', category: 'Post-Release' },
    { id: 'performance-monitoring', text: 'Performance monitoring setup', category: 'Post-Release' },
    { id: 'user-feedback', text: 'User feedback collection', category: 'Post-Release' },
    { id: 'metrics-analysis', text: 'Test metrics analysis', category: 'Post-Release' }
  ]

  const testingTools = [
    {
      category: 'Unit Testing',
      tools: [
        { name: 'Vitest', purpose: 'Fast unit testing with Vite integration', type: 'Essential' },
        { name: 'V8 Coverage', purpose: 'Native coverage reporting', type: 'Essential' },
        { name: 'Jest', purpose: 'Alternative testing framework', type: 'Alternative' }
      ]
    },
    {
      category: 'Component Testing',
      tools: [
        { name: 'React Testing Library', purpose: 'Component testing utilities', type: 'Essential' },
        { name: 'Vitest', purpose: 'Test runner for components', type: 'Essential' },
        { name: 'jsdom', purpose: 'DOM environment for testing', type: 'Essential' }
      ]
    },
    {
      category: 'E2E Testing',
      tools: [
        { name: 'Playwright', purpose: 'Cross-browser automation', type: 'Essential' },
        { name: 'Cypress', purpose: 'Developer-friendly E2E testing', type: 'Essential' },
        { name: 'Selenium', purpose: 'Web browser automation', type: 'Legacy' }
      ]
    },
    {
      category: 'Visual Testing',
      tools: [
        { name: 'Percy', purpose: 'Visual regression testing', type: 'Essential' },
        { name: 'Chromatic', purpose: 'Component visual testing', type: 'Essential' },
        { name: 'Applitools', purpose: 'AI-powered visual testing', type: 'Advanced' }
      ]
    },
    {
      category: 'Performance Testing',
      tools: [
        { name: 'Lighthouse', purpose: 'Core Web Vitals auditing', type: 'Essential' },
        { name: 'WebPageTest', purpose: 'Detailed performance analysis', type: 'Essential' },
        { name: 'Chrome DevTools', purpose: 'Performance profiling', type: 'Essential' }
      ]
    },
    {
      category: 'Accessibility Testing',
      tools: [
        { name: 'axe-core', purpose: 'Accessibility testing engine', type: 'Essential' },
        { name: 'WAVE', purpose: 'Web accessibility evaluation', type: 'Essential' },
        { name: 'Lighthouse', purpose: 'Accessibility auditing', type: 'Essential' }
      ]
    },
    {
      category: 'Responsive Testing',
      tools: [
        { name: 'Browser DevTools', purpose: 'Viewport testing', type: 'Essential' },
        { name: 'Responsive Design Mode', purpose: 'Multi-device simulation', type: 'Essential' },
        { name: 'BrowserStack', purpose: 'Real device testing', type: 'Advanced' }
      ]
    }
  ]

  const testingPhases = [
    {
      phase: 'Test Design & Development',
      duration: '2-3 weeks',
      activities: [
        'Design React component test cases',
        'Set up Playwright/Cypress E2E framework',
        'Create visual regression test strategy',
        'Implement Jest + Testing Library setup',
        'Establish CI/CD integration with GitHub Actions'
      ]
    },
    {
      phase: 'Test Environment Setup',
      duration: '1 week',
      activities: [
        'Configure cross-browser testing environments',
        'Set up responsive design testing',
        'Implement Core Web Vitals monitoring',
        'Create test data management for web apps',
        'Establish accessibility testing tools'
      ]
    },
    {
      phase: 'Test Execution',
      duration: 'Ongoing',
      activities: [
        'Execute automated E2E test suites',
        'Perform cross-browser compatibility testing',
        'Conduct responsive design testing',
        'Monitor Core Web Vitals performance',
        'Execute accessibility compliance testing'
      ]
    },
    {
      phase: 'Test Reporting & Analysis',
      duration: 'Ongoing',
      activities: [
        'Generate test execution reports',
        'Analyze Core Web Vitals metrics',
        'Track cross-browser compatibility issues',
        'Monitor accessibility compliance scores',
        'Document front-end testing best practices'
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Front-End Testing Strategy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive guide to implementing a complete front-end testing lifecycle 
          that ensures quality, reliability, and maintainability of web applications.
        </p>
      </div>

      {/* Testing Checklist */}
      <TestingChecklist 
        title="Front-End Testing Checklist"
        items={testingChecklistItems}
      />

      {/* Front-End Testing Pyramid */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Front-End Testing Pyramid</h2>
        <div className="flex justify-center">
          <div className="text-center">
            <div className="relative">
              {/* E2E Tests */}
              <div className="w-32 h-16 bg-blue-100 border-2 border-blue-300 rounded-t-lg flex items-center justify-center">
                <span className="text-sm font-medium text-blue-800">E2E Tests (15%)</span>
              </div>
              {/* Component Tests */}
              <div className="w-48 h-20 bg-green-100 border-2 border-green-300 flex items-center justify-center">
                <span className="text-sm font-medium text-green-800">Component Tests (25%)</span>
              </div>
              {/* Unit Tests */}
              <div className="w-64 h-24 bg-purple-100 border-2 border-purple-300 rounded-b-lg flex items-center justify-center">
                <span className="text-sm font-medium text-purple-800">Unit Tests (60%)</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p><strong>Unit Tests:</strong> Utility functions, hooks, pure functions</p>
              <p><strong>Component Tests:</strong> React components, props, user interactions</p>
              <p><strong>E2E Tests:</strong> Critical user journeys, cross-browser testing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Implementation Status */}
      <div className="bg-green-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Implementation Status</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Implemented</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Vitest setup with V8 coverage
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                19 unit tests (100% coverage on utilities)
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                CI/CD integration with GitHub Actions
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Coverage thresholds (70% minimum)
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Test scripts: test, test:coverage, test:ui
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-3">🔄 Next Steps</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">○</span>
                React component tests with Testing Library
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">○</span>
                E2E tests with Playwright
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">○</span>
                Visual regression testing
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">○</span>
                Accessibility testing
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">○</span>
                Performance testing
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Current Coverage</h4>
          <div className="text-sm text-gray-600">
            <p><strong>Utility Functions:</strong> 100% coverage (formatDate, getStatusColor, truncateText, getPlaceholderImage)</p>
            <p><strong>Overall Project:</strong> 2.98% (expected - only utility functions tested so far)</p>
          </div>
        </div>
      </div>

      {/* Testing Phases */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Testing Lifecycle Phases</h2>
        <div className="space-y-6">
          {testingPhases.map((phase, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {phase.duration}
                </span>
              </div>
              <ul className="space-y-1">
                {phase.activities.map((activity, activityIndex) => (
                  <li key={activityIndex} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Testing Tools */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Testing Tools & Technologies</h2>
        <div className="space-y-6">
          {testingTools.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{category.category}</h3>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{tool.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        tool.type === 'Essential' 
                          ? 'bg-green-100 text-green-800'
                          : tool.type === 'Advanced'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {tool.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{tool.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Gates */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality Gates</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-green-600">80%</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Code Coverage</h3>
            <p className="text-sm text-gray-600">Minimum test coverage requirement</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-blue-600">5%</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Defect Escape Rate</h3>
            <p className="text-sm text-gray-600">Maximum acceptable defect escape rate</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-purple-600">90%</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Accessibility Score</h3>
            <p className="text-sm text-gray-600">Minimum accessibility compliance</p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Best Practices</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Start testing early in the development cycle</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Follow the testing pyramid principle</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Automate repetitive testing tasks</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Integrate testing into CI/CD pipeline</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Test React components in isolation</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Prioritize Core Web Vitals performance</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Test across multiple browsers and devices</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Implement visual regression testing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestingStrategyPage
