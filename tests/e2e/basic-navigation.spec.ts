import { test, expect } from '@playwright/test'

test.describe('Basic Navigation', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Welcome to My Software Testing Blog')
  })

  test('should navigate to posts page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Posts')
    await expect(page.locator('h1')).toContainText('Blog Posts')
  })

  test('should navigate to projects page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Projects')
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
