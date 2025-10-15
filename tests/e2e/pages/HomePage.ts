// tests/e2e/pages/HomePage.ts
import { Locator, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class HomePage extends BasePage {
  // Page-specific elements
  get aboutSection(): Locator {
    return this.page.locator('h2', { hasText: 'About Me' })
  }

  get recentPostsSection(): Locator {
    return this.page.locator('h2', { hasText: 'Recent Posts' })
  }

  get exploreWorkSection(): Locator {
    return this.page.locator('h2', { hasText: 'Explore My Work' })
  }

  get recentPostsGrid(): Locator {
    return this.page.locator('.grid > article')
  }

  get firstRecentPost(): Locator {
    return this.recentPostsGrid.first()
  }

  get viewAllPostsButton(): Locator {
    return this.page.locator('text=View All Posts')
  }

  get viewProjectsButton(): Locator {
    return this.page.locator('text=View Projects')
  }

  get firstPostTitleLink(): Locator {
    return this.page.locator('.grid > article:first-child h3 a')
  }

  get aboutMeText(): Locator {
    return this.page.locator('text=I\'m a dedicated software testing professional')
  }

  // Page-specific actions
  async navigateToPosts(): Promise<void> {
    await this.viewAllPostsButton.click()
  }

  async navigateToProjects(): Promise<void> {
    await this.viewProjectsButton.click()
  }

  async clickFirstPostTitle(): Promise<void> {
    await this.firstPostTitleLink.click()
  }

  // Page-specific assertions
  async expectAboutSectionVisible(): Promise<void> {
    await expect(this.aboutSection).toBeVisible()
  }

  async expectRecentPostsSectionVisible(): Promise<void> {
    await expect(this.recentPostsSection).toBeVisible()
  }

  async expectExploreWorkSectionVisible(): Promise<void> {
    await expect(this.exploreWorkSection).toBeVisible()
  }

  async expectRecentPostsCount(expectedCount: number): Promise<void> {
    await expect(this.recentPostsGrid).toHaveCount(expectedCount)
  }

  async expectFirstPostVisible(): Promise<void> {
    await expect(this.firstRecentPost).toBeVisible()
  }

  async expectFirstPostHasReadTime(): Promise<void> {
    await expect(this.firstRecentPost.locator('text=min read')).toBeVisible()
  }

  async expectAboutMeTextVisible(): Promise<void> {
    await expect(this.aboutMeText).toBeVisible()
  }

  async expectFirstPostLinkHref(expectedHref: string): Promise<void> {
    await expect(this.firstPostTitleLink).toHaveAttribute('href', expectedHref)
  }

  // Complete page verification
  async expectPageContentComplete(): Promise<void> {
    await this.expectPageTitle('Welcome to My Software Testing Blog')
    await this.expectAboutSectionVisible()
    await this.expectRecentPostsSectionVisible()
    await this.expectExploreWorkSectionVisible()
    await this.expectAboutMeTextVisible()
  }
}
