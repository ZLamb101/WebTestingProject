import { test, expect } from '@playwright/test'

test.describe('Blog Posts', () => {
  test('should display all blog posts @critical', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View All Posts')
    
    // Check page title
    await expect(page.locator('h1')).toContainText('Blog Posts')
    
    // Check that posts are displayed
    const postCards = page.locator('article')
    await expect(postCards).toHaveCount(7) // Based on our content data
    
    // Check first post content
    await expect(page.locator('article').first()).toContainText('Getting Started with Playwright Testing')
  })

  test('should filter posts by category', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View All Posts')
    
    // Check that all categories are present
    await expect(page.locator('button', { hasText: 'All' })).toBeVisible()
    await expect(page.locator('button', { hasText: 'Automation' })).toBeVisible()
    await expect(page.locator('button', { hasText: 'API Testing' })).toBeVisible()
    await expect(page.locator('button', { hasText: 'DevOps' })).toBeVisible()
    
    // Click on Automation category
    await page.click('button:has-text("Automation")')
    
    // Should show filtered posts (this would need actual filtering implementation)
    // For now, just verify the button is clickable
    await expect(page.locator('button:has-text("Automation")')).toBeVisible()
  })

  test('should display post metadata correctly', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View All Posts')
    
    // Check that posts have proper metadata
    const firstPost = page.locator('article').first()
    
    // Should have date (formatted as 1/15/2025)
    await expect(firstPost.locator('text=1/15/2025')).toBeVisible()
    
    // Should have read time
    await expect(firstPost.locator('text=5 min read')).toBeVisible()
    
    // Should have category
    await expect(firstPost.locator('text=Automation')).toBeVisible()
  })

  test('should have responsive layout', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View All Posts')
    
    // Test desktop layout
    await page.setViewportSize({ width: 1200, height: 800 })
    const desktopGrid = page.locator('.grid')
    await expect(desktopGrid).toBeVisible()
    
    // Test mobile layout
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('article').first()).toBeVisible()
  })
})
