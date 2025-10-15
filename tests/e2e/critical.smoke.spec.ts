import { test, expect } from '@playwright/test'

test.describe('Critical Smoke Tests', () => {
  test('should load homepage and display core content', async ({ page }) => {
    await page.goto('/')
    
    // Critical: Homepage loads
    await expect(page.locator('h1')).toContainText('Welcome to My Software Testing Blog')
    
    // Critical: Navigation works (use specific nav selectors to avoid strict mode violations)
    await expect(page.locator('nav')).toBeVisible()
    await expect(page.locator('nav a:has-text("Posts")')).toBeVisible()
    await expect(page.locator('nav a:has-text("Projects")')).toBeVisible()
    
    // Critical: Core content sections
    await expect(page.locator('h2', { hasText: 'About Me' })).toBeVisible()
    await expect(page.locator('h2', { hasText: 'Recent Posts' })).toBeVisible()
  })

  test('should navigate to posts page', async ({ page }) => {
    await page.goto('/')
    await page.click('nav a:has-text("Posts")')
    await expect(page.locator('h1')).toContainText('Blog Posts')
  })

  test('should navigate to projects page', async ({ page }) => {
    await page.goto('/')
    await page.click('nav a:has-text("Projects")')
    await expect(page.locator('h1')).toContainText('Projects')
  })

  test('should navigate to testing strategy page', async ({ page }) => {
    await page.goto('/')
    const testingStrategyLink = page.locator('text=Testing Strategy')
    await testingStrategyLink.scrollIntoViewIfNeeded()
    await testingStrategyLink.click({ force: true })
    await expect(page.locator('h1')).toContainText('Front-End Testing Strategy')
  })
})
