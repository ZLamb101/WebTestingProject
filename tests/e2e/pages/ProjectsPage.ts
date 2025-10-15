// tests/e2e/pages/ProjectsPage.ts
import { Locator, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class ProjectsPage extends BasePage {
  // Page-specific elements
  get projectsGrid(): Locator {
    return this.page.locator('.grid > div')
  }

  get firstProject(): Locator {
    return this.projectsGrid.first()
  }

  get allCategoryButton(): Locator {
    return this.page.locator('button', { hasText: 'All' })
  }

  get testAutomationCategoryButton(): Locator {
    return this.page.locator('button', { hasText: 'Test Automation' })
  }

  get apiTestingCategoryButton(): Locator {
    return this.page.locator('button', { hasText: 'API Testing' })
  }

  get webPerformanceCategoryButton(): Locator {
    return this.page.locator('button', { hasText: 'Web Performance' })
  }

  get visualTestingCategoryButton(): Locator {
    return this.page.locator('button', { hasText: 'Visual Testing' })
  }

  // Page-specific actions
  async navigateToProjects(): Promise<void> {
    await this.navigateToHomepage()
    await this.page.click('text=View Projects')
  }

  async clickCategory(categoryName: string): Promise<void> {
    await this.page.click(`button:has-text("${categoryName}")`)
  }

  async clickFirstProject(): Promise<void> {
    await this.firstProject.click()
  }

  // Page-specific assertions
  async expectProjectsCount(expectedCount: number): Promise<void> {
    await expect(this.projectsGrid).toHaveCount(expectedCount)
  }

  async expectFirstProjectVisible(): Promise<void> {
    await expect(this.firstProject).toBeVisible()
  }

  async expectFirstProjectHasStatus(): Promise<void> {
    await expect(this.firstProject.locator('text=Completed')).toBeVisible()
  }

  async expectFirstProjectHasTechnologies(): Promise<void> {
    await expect(this.firstProject.locator('span', { hasText: 'Playwright' })).toBeVisible()
    await expect(this.firstProject.locator('span', { hasText: 'TypeScript' })).toBeVisible()
  }

  async expectFirstProjectHasFeatures(): Promise<void> {
    await expect(this.firstProject.locator('text=Cross-browser testing')).toBeVisible()
  }

  async expectFirstProjectHasImageArea(): Promise<void> {
    await expect(this.firstProject.locator('.h-48')).toBeVisible()
  }

  async expectFirstProjectHasContentArea(): Promise<void> {
    await expect(this.firstProject.locator('.p-6')).toBeVisible()
  }

  async expectFirstProjectHasTitle(): Promise<void> {
    await expect(this.firstProject.locator('h3')).toBeVisible()
  }

  async expectCategoryButtonsVisible(): Promise<void> {
    await expect(this.allCategoryButton).toBeVisible()
    await expect(this.testAutomationCategoryButton).toBeVisible()
    await expect(this.apiTestingCategoryButton).toBeVisible()
    await expect(this.webPerformanceCategoryButton).toBeVisible()
    await expect(this.visualTestingCategoryButton).toBeVisible()
  }

  // Complete page verification
  async expectPageContentComplete(): Promise<void> {
    await this.expectPageTitle('Projects')
    await this.expectCategoryButtonsVisible()
    await this.expectFirstProjectVisible()
  }
}
