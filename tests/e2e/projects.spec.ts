import { test, expect } from '@playwright/test'

test.describe('Projects', () => {
  test('should display all projects', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View Projects')
    
    // Check page title
    await expect(page.locator('h1')).toContainText('Projects')
    
    // Check that projects are displayed - our grid contains project cards
    const projectCards = page.locator('.grid > div')
    await expect(projectCards).toHaveCount(4) // Based on our content data
    
    // Check first project content
    await expect(page.locator('.grid > div').first()).toContainText('E-commerce Test Automation Suite')
  })

  test('should display project categories', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View Projects')
    
    // Check that all project categories are present
    await expect(page.locator('button', { hasText: 'All' })).toBeVisible()
    await expect(page.locator('button', { hasText: 'Test Automation' })).toBeVisible()
    await expect(page.locator('button', { hasText: 'API Testing' })).toBeVisible()
    await expect(page.locator('button', { hasText: 'Web Performance' })).toBeVisible()
    await expect(page.locator('button', { hasText: 'Visual Testing' })).toBeVisible()
  })

  test('should display project metadata correctly', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View Projects')
    
    // Check that projects have proper metadata
    const firstProject = page.locator('.grid > div').first()
    
    // Should have status badge
    await expect(firstProject.locator('text=Completed')).toBeVisible()
    
    // Should have technologies
    await expect(firstProject.locator('span', { hasText: 'Playwright' })).toBeVisible()
    await expect(firstProject.locator('span', { hasText: 'TypeScript' })).toBeVisible()
    
    // Should have features list
    await expect(firstProject.locator('text=Cross-browser testing')).toBeVisible()
  })

  test('should have proper project card layout', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View Projects')
    
    // Check project card structure
    const projectCard = page.locator('.grid > div').first()
    
    // Should have image area
    await expect(projectCard.locator('.h-48')).toBeVisible()
    
    // Should have content area
    await expect(projectCard.locator('.p-6')).toBeVisible()
    
    // Should have title
    await expect(projectCard.locator('h3')).toBeVisible()
  })

  test('should be responsive on different screen sizes', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View Projects')
    
    // Test desktop layout
    await page.setViewportSize({ width: 1200, height: 800 })
    const desktopGrid = page.locator('.grid')
    await expect(desktopGrid).toBeVisible()
    
    // Test mobile layout
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('.grid > div').first()).toBeVisible()
  })
})
