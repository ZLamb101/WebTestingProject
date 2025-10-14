import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import ProjectsPage from './pages/ProjectsPage'
import TestingStrategyPage from './pages/TestingStrategyPage'
import { Routes, Route } from 'react-router-dom'

// Testable App component without Router wrapper
const TestableApp = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/testing-strategy" element={<TestingStrategyPage />} />
      </Routes>
    </Layout>
  )
}

// Helper to render App with specific route
const renderWithRoute = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <TestableApp />
    </MemoryRouter>
  )
}

describe('App Routing', () => {
  describe('route rendering', () => {
    it('renders HomePage for root route', () => {
      renderWithRoute(['/'])
      
      expect(screen.getByText('Welcome to My Software Testing Blog')).toBeInTheDocument()
      expect(screen.getByText('About Me')).toBeInTheDocument()
    })

    it('renders PostsPage for /posts route', () => {
      renderWithRoute(['/posts'])
      
      expect(screen.getByText('Blog Posts')).toBeInTheDocument()
      expect(screen.getByText('Categories')).toBeInTheDocument()
    })

    it('renders ProjectsPage for /projects route', () => {
      renderWithRoute(['/projects'])
      
      expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
      expect(screen.getByText('Filter by Category')).toBeInTheDocument()
    })

    it('renders TestingStrategyPage for /testing-strategy route', () => {
      renderWithRoute(['/testing-strategy'])
      
      expect(screen.getByText('Front-End Testing Strategy')).toBeInTheDocument()
      expect(screen.getByText('Front-End Testing Checklist')).toBeInTheDocument()
    })
  })

  describe('navigation', () => {
    it('has correct navigation links', () => {
      renderWithRoute(['/'])
      
      expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Posts' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Testing Strategy' })).toBeInTheDocument()
    })

    it('navigation links have correct href attributes', () => {
      renderWithRoute(['/'])
      
      expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
      expect(screen.getByRole('link', { name: 'Posts' })).toHaveAttribute('href', '/posts')
      expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects')
      expect(screen.getByRole('link', { name: 'Testing Strategy' })).toHaveAttribute('href', '/testing-strategy')
    })

    it('site name link points to home', () => {
      renderWithRoute(['/'])
      
      const siteNameLink = screen.getByRole('link', { name: 'Software Testing Blog' })
      expect(siteNameLink).toHaveAttribute('href', '/')
    })

    it('highlights active navigation link', () => {
      renderWithRoute(['/posts'])
      
      const postsLink = screen.getByRole('link', { name: 'Posts' })
      expect(postsLink).toHaveClass('text-blue-600', 'bg-blue-50')
      
      // Other links should not be active
      const homeLink = screen.getByRole('link', { name: 'Home' })
      expect(homeLink).toHaveClass('text-gray-700')
    })
  })

  describe('layout consistency', () => {
    it('renders layout on all routes', () => {
      const routes = ['/', '/posts', '/projects', '/testing-strategy']
      
      routes.forEach(route => {
        const { unmount } = renderWithRoute([route])
        
        // Check that layout elements are present
        expect(screen.getByRole('navigation')).toBeInTheDocument()
        expect(screen.getByRole('main')).toBeInTheDocument()
        expect(screen.getByText(/© \d{4}/)).toBeInTheDocument()
        
        unmount()
      })
    })

    it('main content area is present on all routes', () => {
      const routes = ['/', '/posts', '/projects', '/testing-strategy']
      
      routes.forEach(route => {
        const { unmount } = renderWithRoute([route])
        
        const main = screen.getByRole('main')
        expect(main).toBeInTheDocument()
        expect(main).toHaveClass('max-w-4xl', 'mx-auto')
        
        unmount()
      })
    })
  })

  describe('edge cases', () => {
    it('handles unknown routes gracefully', () => {
      renderWithRoute(['/unknown-route'])
      
      // Should still render the layout
      expect(screen.getByRole('navigation')).toBeInTheDocument()
      expect(screen.getByRole('main')).toBeInTheDocument()
    })

    it('handles empty route', () => {
      renderWithRoute([''])
      
      // Should render home page
      expect(screen.getByText('Welcome to My Software Testing Blog')).toBeInTheDocument()
    })
  })

  describe('basename configuration', () => {
    it('works with root route', () => {
      // Test that the app works with the root route
      renderWithRoute(['/'])
      
      expect(screen.getByText('Welcome to My Software Testing Blog')).toBeInTheDocument()
    })
  })
})
