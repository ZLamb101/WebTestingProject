// tests/e2e/pages/TestingStrategyPage.ts
import { Locator, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class TestingStrategyPage extends BasePage {
  // Page-specific elements
  get testingChecklistSection(): Locator {
    return this.page.locator('h3', { hasText: 'Front-End Testing Checklist' })
  }

  get testingPyramidSection(): Locator {
    return this.page.locator('h2', { hasText: 'Front-End Testing Pyramid' })
  }

  get implementationStatusSection(): Locator {
    return this.page.locator('h2', { hasText: 'Current Implementation Status' })
  }

  get testingToolsSection(): Locator {
    return this.page.locator('h2', { hasText: 'Testing Tools & Technologies' })
  }

  get bestPracticesSection(): Locator {
    return this.page.locator('h2', { hasText: 'Key Best Practices' })
  }

  get preDevelopmentCategory(): Locator {
    return this.page.locator('h4', { hasText: 'Pre-Development' })
  }

  get duringDevelopmentCategory(): Locator {
    return this.page.locator('h4', { hasText: 'During Development' })
  }

  get preReleaseCategory(): Locator {
    return this.locator('h4', { hasText: 'Pre-Release' })
  }

  get postReleaseCategory(): Locator {
    return this.page.locator('h4', { hasText: 'Post-Release' })
  }

  // Page-specific actions
  async navigateToTestingStrategy(): Promise<void> {
    await this.navigateToHomepage()
    const link = this.page.locator('text=Testing Strategy')
    await link.scrollIntoViewIfNeeded()
    await link.click({ force: true })
  }

  // Page-specific assertions
  async expectTestingChecklistVisible(): Promise<void> {
    await expect(this.testingChecklistSection).toBeVisible()
  }

  async expectTestingPyramidVisible(): Promise<void> {
    await expect(this.testingPyramidSection).toBeVisible()
  }

  async expectImplementationStatusVisible(): Promise<void> {
    await expect(this.implementationStatusSection).toBeVisible()
  }

  async expectTestingToolsVisible(): Promise<void> {
    await expect(this.testingToolsSection).toBeVisible()
  }

  async expectBestPracticesVisible(): Promise<void> {
    await expect(this.bestPracticesSection).toBeVisible()
  }

  async expectChecklistCategoriesVisible(): Promise<void> {
    await expect(this.preDevelopmentCategory).toBeVisible()
    await expect(this.duringDevelopmentCategory).toBeVisible()
    await expect(this.preReleaseCategory).toBeVisible()
    await expect(this.postReleaseCategory).toBeVisible()
  }

  async expectPyramidStructureVisible(): Promise<void> {
    await expect(this.page.locator('text=E2E Tests (15%)')).toBeVisible()
    await expect(this.page.locator('text=Component Tests (25%)')).toBeVisible()
    await expect(this.page.locator('text=Unit Tests (60%)')).toBeVisible()
  }

  async expectImplementationDetailsVisible(): Promise<void> {
    await expect(this.page.locator('text=Vitest setup with V8 coverage & happy-dom')).toBeVisible()
    await expect(this.page.locator('text=E2E tests with Playwright')).toBeVisible()
  }

  async expectToolCategoriesVisible(): Promise<void> {
    await expect(this.page.locator('h3', { hasText: 'Unit Testing' })).toBeVisible()
    await expect(this.page.locator('h3', { hasText: 'Component Testing' })).toBeVisible()
    await expect(this.page.locator('h3', { hasText: 'E2E Testing' })).toBeVisible()
  }

  // Complete page verification
  async expectPageContentComplete(): Promise<void> {
    await this.expectPageTitle('Front-End Testing Strategy')
    await this.expectTestingChecklistVisible()
    await this.expectTestingPyramidVisible()
    await this.expectImplementationStatusVisible()
    await this.expectTestingToolsVisible()
    await this.expectBestPracticesVisible()
  }
}
