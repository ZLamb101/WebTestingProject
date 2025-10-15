// tests/e2e/pages/PostsPage.ts
import { Locator, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class PostsPage extends BasePage {
  // Page-specific elements
  get postsGrid(): Locator {
    return this.page.locator('article')
  }

  get firstPost(): Locator {
    return this.postsGrid.first()
  }

  get allCategoryButton(): Locator {
    return this.page.locator('button', { hasText: 'All' })
  }

  get automationCategoryButton(): Locator {
    return this.page.locator('button', { hasText: 'Automation' })
  }

  get apiTestingCategoryButton(): Locator {
    return this.page.locator('button', { hasText: 'API Testing' })
  }

  get devOpsCategoryButton(): Locator {
    return this.page.locator('button', { hasText: 'DevOps' })
  }

  // Page-specific actions
  async navigateToPosts(): Promise<void> {
    await this.navigateToHomepage()
    await this.page.click('text=View All Posts')
  }

  async clickCategory(categoryName: string): Promise<void> {
    await this.page.click(`button:has-text("${categoryName}")`)
  }

  async clickFirstPost(): Promise<void> {
    await this.firstPost.click()
  }

  // Page-specific assertions
  async expectPostsCount(expectedCount: number): Promise<void> {
    await expect(this.postsGrid).toHaveCount(expectedCount)
  }

  async expectFirstPostVisible(): Promise<void> {
    await expect(this.firstPost).toBeVisible()
  }

  async expectFirstPostHasDate(): Promise<void> {
    await expect(this.firstPost.locator('text=/\\d+\\/\\d+\\/\\d+/')).toBeVisible()
  }

  async expectFirstPostHasReadTime(): Promise<void> {
    await expect(this.firstPost.locator('text=min read')).toBeVisible()
  }

  async expectFirstPostHasCategory(): Promise<void> {
    await expect(this.firstPost.locator('text=Automation')).toBeVisible()
  }

  async expectCategoryButtonsVisible(): Promise<void> {
    await expect(this.allCategoryButton).toBeVisible()
    await expect(this.automationCategoryButton).toBeVisible()
    await expect(this.apiTestingCategoryButton).toBeVisible()
    await expect(this.devOpsCategoryButton).toBeVisible()
  }

  // Complete page verification
  async expectPageContentComplete(): Promise<void> {
    await this.expectPageTitle('Blog Posts')
    await this.expectCategoryButtonsVisible()
    await this.expectFirstPostVisible()
  }
}
