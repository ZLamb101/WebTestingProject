import { test, expect } from '@playwright/test'

test.describe('Navigation @critical', () => {
  test('should navigate between all pages', async ({ page }) => {
    await page.goto('/')
    
    // Test Home page
    await expect(page.locator('h1')).toContainText('Welcome to My Software Testing Blog')
    
    // Navigate to Posts
    await page.click('text=Posts')
    await expect(page.locator('h1')).toContainText('Blog Posts')
    
    // Navigate to Projects
    await page.click('text=Projects')
    await expect(page.locator('h1')).toContainText('Projects')
    
    // Navigate to Testing Strategy
    const testingStrategyLink = page.locator('text=Testing Strategy')
    await testingStrategyLink.scrollIntoViewIfNeeded()
    await testingStrategyLink.click({ force: true })
    await expect(page.locator('h1')).toContainText('Front-End Testing Strategy')
    
    // Navigate back to Home
    await page.click('text=Home')
    await expect(page.locator('h1')).toContainText('Welcome to My Software Testing Blog')
  })

  test('should highlight active navigation link', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Posts')
    
    // Posts link should be active (navigation link specifically)
    const postsLink = page.locator('nav a[href="/WebTestingProject/posts"]')
    await expect(postsLink).toHaveClass(/text-blue-600/)
    
    // Other links should not be active - specifically the "Home" navigation link (not the logo)
    const homeNavLink = page.locator('nav a:has-text("Home")')
    await expect(homeNavLink).toHaveClass(/text-gray-700/)
  })

  test('should navigate via site logo', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Posts')
    
    // Click on site logo/name (the logo has href="/WebTestingProject" without trailing slash)
    await page.click('a[href="/WebTestingProject"]:has-text("Software Testing Blog")')
    await expect(page.locator('h1')).toContainText('Welcome to My Software Testing Blog')
  })

  test('should maintain navigation state across page refreshes', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View Projects')
    
    // Refresh the page
    await page.reload()
    await expect(page.locator('h1')).toContainText('Projects')
    
    // Active link should still be highlighted
    const projectsLink = page.locator('a[href="/WebTestingProject/projects"]')
    await expect(projectsLink).toHaveClass(/text-blue-600/)
  })
})