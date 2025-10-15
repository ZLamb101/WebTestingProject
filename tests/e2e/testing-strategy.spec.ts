import { test, expect } from '@playwright/test'

test.describe('Testing Strategy Page', () => {
  test('should display testing strategy content', async ({ page }) => {
    await page.goto('/')
    const testingStrategyLink = page.locator('text=Testing Strategy')
    await testingStrategyLink.scrollIntoViewIfNeeded()
    await testingStrategyLink.click({ force: true })
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Front-End Testing Strategy')
    
    // Check testing checklist
    await expect(page.locator('h3', { hasText: 'Front-End Testing Checklist' })).toBeVisible()
    
    // Check testing pyramid
    await expect(page.locator('h2', { hasText: 'Front-End Testing Pyramid' })).toBeVisible()
    
    // Check implementation status
    await expect(page.locator('h2', { hasText: 'Current Implementation Status' })).toBeVisible()
  })

  test('should display testing checklist with categories', async ({ page }) => {
    await page.goto('/')
    const testingStrategyLink = page.locator('text=Testing Strategy')
    await testingStrategyLink.scrollIntoViewIfNeeded()
    await testingStrategyLink.click({ force: true })
    
    // Check that checklist categories are present (they are h4 elements in the TestingChecklist component)
    await expect(page.locator('h4', { hasText: 'Pre-Development' })).toBeVisible()
    await expect(page.locator('h4', { hasText: 'During Development' })).toBeVisible()
    await expect(page.locator('h4', { hasText: 'Pre-Release' })).toBeVisible()
    await expect(page.locator('h4', { hasText: 'Post-Release' })).toBeVisible()
    
    // Check that checklist items are present
    await expect(page.locator('text=Web requirements analysis completed')).toBeVisible()
    await expect(page.locator('text=Unit tests written (TDD approach)')).toBeVisible()
    await expect(page.locator('text=E2E tests executed')).toBeVisible()
  })

  test('should display testing pyramid visualization', async ({ page }) => {
    await page.goto('/')
    const testingStrategyLink = page.locator('text=Testing Strategy')
    await testingStrategyLink.scrollIntoViewIfNeeded()
    await testingStrategyLink.click({ force: true })
    
    // Check pyramid structure
    await expect(page.locator('text=E2E Tests (15%)')).toBeVisible()
    await expect(page.locator('text=Component Tests (25%)')).toBeVisible()
    await expect(page.locator('text=Unit Tests (60%)')).toBeVisible()
    
    // Check pyramid descriptions
    await expect(page.locator('text=Unit Tests:')).toBeVisible()
    await expect(page.locator('text=Component Tests:')).toBeVisible()
    await expect(page.locator('text=E2E Tests:')).toBeVisible()
  })

  test('should display current implementation status', async ({ page }) => {
    await page.goto('/')
    const testingStrategyLink = page.locator('text=Testing Strategy')
    await testingStrategyLink.scrollIntoViewIfNeeded()
    await testingStrategyLink.click({ force: true })
    
    // Check implemented section
    await expect(page.locator('h3', { hasText: '✅ Implemented' })).toBeVisible()
    await expect(page.locator('text=Vitest setup with V8 coverage & happy-dom')).toBeVisible()
    await expect(page.locator('text=44 tests across 4 test files (97.63% coverage)')).toBeVisible()
    
    // Check next steps section
    await expect(page.locator('h3', { hasText: '🔄 Next Steps' })).toBeVisible()
    await expect(page.locator('text=E2E tests with Playwright')).toBeVisible()
    await expect(page.locator('text=Visual regression testing').first()).toBeVisible()
  })

  test('should display testing tools and technologies', async ({ page }) => {
    await page.goto('/')
    const testingStrategyLink = page.locator('text=Testing Strategy')
    await testingStrategyLink.scrollIntoViewIfNeeded()
    await testingStrategyLink.click({ force: true })
    
    // Check tools section
    await expect(page.locator('h2', { hasText: 'Testing Tools & Technologies' })).toBeVisible()
    
    // Check tool categories
    await expect(page.locator('h3', { hasText: 'Unit Testing' })).toBeVisible()
    await expect(page.locator('h3', { hasText: 'Component Testing' })).toBeVisible()
    await expect(page.locator('h3', { hasText: 'E2E Testing' })).toBeVisible()
    
    // Check specific tools (using more specific selectors to avoid strict mode violations)
    await expect(page.locator('h4:has-text("Vitest")').first()).toBeVisible()
    await expect(page.locator('h4:has-text("React Testing Library")')).toBeVisible()
    await expect(page.locator('h4:has-text("Playwright")')).toBeVisible()
  })

  test('should display best practices section', async ({ page }) => {
    await page.goto('/')
    const testingStrategyLink = page.locator('text=Testing Strategy')
    await testingStrategyLink.scrollIntoViewIfNeeded()
    await testingStrategyLink.click({ force: true })
    
    // Check best practices section
    await expect(page.locator('h2', { hasText: 'Key Best Practices' })).toBeVisible()
    
    // Check practice items
    await expect(page.locator('text=Start testing early in the development cycle')).toBeVisible()
    await expect(page.locator('text=Follow the testing pyramid principle')).toBeVisible()
    await expect(page.locator('text=Test React components in isolation')).toBeVisible()
  })

  test('should be responsive on mobile devices', async ({ page }) => {
    await page.goto('/')
    const testingStrategyLink = page.locator('text=Testing Strategy')
    await testingStrategyLink.scrollIntoViewIfNeeded()
    await testingStrategyLink.click({ force: true })
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check that content is still visible and properly laid out
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h3', { hasText: 'Front-End Testing Checklist' })).toBeVisible()
    await expect(page.locator('h2', { hasText: 'Front-End Testing Pyramid' })).toBeVisible()
    
    // Check that checklist items are still accessible
    await expect(page.locator('text=Web requirements analysis completed')).toBeVisible()
  })
})
