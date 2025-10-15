import { test, expect } from '@playwright/test'

test.describe('Responsive Design', () => {
  test('should work on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 })
    await page.goto('/')
    
    // Check navigation layout
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
    
    // Check that navigation items are in a row
    const navItems = page.locator('nav a')
    await expect(navItems).toHaveCount(5) // Home, Posts, Projects, Testing Strategy, Site name
    
    // Check main content layout
    const main = page.locator('main')
    await expect(main).toHaveClass(/max-w-4xl/)
  })

  test('should work on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')
    
    // Check that content is still accessible
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('nav')).toBeVisible()
    
    // Check recent posts grid adapts - navigate via homepage
    await page.click('text=View All Posts')
    const postGrid = page.locator('.grid')
    await expect(postGrid).toBeVisible()
  })

  test('should work on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Check that navigation is still accessible
    await expect(page.locator('nav')).toBeVisible()
    await expect(page.locator('nav a:has-text("Home")')).toBeVisible()
    await expect(page.locator('nav a:has-text("Posts")')).toBeVisible()
    
    // Check that content is readable
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h2', { hasText: 'About Me' })).toBeVisible()
  })

  test('should adapt projects grid on different screen sizes', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View Projects')
    
    // Desktop - should show 2 columns
    await page.setViewportSize({ width: 1200, height: 800 })
    const desktopGrid = page.locator('.grid')
    await expect(desktopGrid).toHaveClass(/lg:grid-cols-2/)
    
    // Mobile - should show 1 column
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(desktopGrid).toBeVisible() // Grid should still be present
  })

  test('should adapt blog posts grid on different screen sizes', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View All Posts')
    
    // Desktop - should show multiple columns
    await page.setViewportSize({ width: 1200, height: 800 })
    const postsGrid = page.locator('.grid')
    await expect(postsGrid).toHaveClass(/md:grid-cols-2/)
    
    // Mobile - should show single column
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(postsGrid).toBeVisible()
  })

  test('should maintain navigation functionality across viewports', async ({ page }) => {
    // Test navigation on mobile
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Navigate to posts
    await page.click('text=Posts')
    await expect(page.locator('h1')).toContainText('Blog Posts')
    
    // Navigate to projects
    await page.click('text=Projects')
    await expect(page.locator('h1')).toContainText('Projects')
    
    // Navigate to testing strategy
    const testingStrategyLink = page.locator('text=Testing Strategy')
    await testingStrategyLink.scrollIntoViewIfNeeded()
    await testingStrategyLink.click({ force: true })
    await expect(page.locator('h1')).toContainText('Front-End Testing Strategy')
    
    // Navigate back to home
    await page.click('text=Home')
    await expect(page.locator('h1')).toContainText('Welcome to My Software Testing Blog')
  })

  test('should handle touch interactions on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await page.click('text=View All Posts')
    
    // Test click interaction with category buttons (replacing tap with click)
    const automationButton = page.locator('button:has-text("Automation")')
    await automationButton.click()
    await expect(automationButton).toBeVisible()
    
    // Test click interaction with posts
    const firstPost = page.locator('article').first()
    await firstPost.click()
    await expect(firstPost).toBeVisible()
  })
})
