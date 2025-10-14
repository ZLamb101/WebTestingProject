import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import { SITE_CONFIG, NAVIGATION_ITEMS } from '../utils/constants'

// Helper to render Layout with Router
const renderWithRouter = (children: React.ReactNode) => {
  return render(
    <BrowserRouter>
      <Layout>{children}</Layout>
    </BrowserRouter>
  )
}

describe('Layout', () => {
  describe('complete layout structure', () => {
    it('renders all layout elements correctly', () => {
      renderWithRouter(<div data-testid="test-content">Test content</div>)
      
      // Test site branding
      expect(screen.getByText(SITE_CONFIG.name)).toBeInTheDocument()
      
      // Test navigation structure
      expect(screen.getByRole('navigation')).toBeInTheDocument()
      expect(screen.getByRole('main')).toBeInTheDocument()
      
      // Test all navigation items
      NAVIGATION_ITEMS.forEach(item => {
        const link = screen.getByRole('link', { name: item.name })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', item.path)
      })
      
      // Test children content
      expect(screen.getByTestId('test-content')).toBeInTheDocument()
      
      // Test footer
      expect(screen.getByText(/© \d{4}/)).toBeInTheDocument()
      expect(screen.getByText(/Built with/)).toBeInTheDocument()
    })
  })

  describe('navigation functionality', () => {
    it('home link points to root', () => {
      renderWithRouter(<div>Test content</div>)
      
      const homeLink = screen.getByRole('link', { name: SITE_CONFIG.name })
      expect(homeLink).toHaveAttribute('href', '/')
    })

    it('has proper accessibility structure', () => {
      renderWithRouter(<div>Test content</div>)
      
      expect(screen.getByRole('navigation')).toBeInTheDocument()
      expect(screen.getByRole('main')).toBeInTheDocument()
    })
  })

  describe('responsive behavior', () => {
    it('has visible navigation', () => {
      renderWithRouter(<div>Test content</div>)
      
      const nav = screen.getByRole('navigation')
      expect(nav).toBeVisible()
    })

    it('has proper main content container', () => {
      renderWithRouter(<div>Test content</div>)
      
      const main = screen.getByRole('main')
      expect(main).toBeVisible()
    })
  })
})
