// tests/e2e/utils/test-helpers.ts
import { Page, Locator, expect } from '@playwright/test'

export class TestHelpers {
  constructor(private page: Page) {}

  async navigateToHomepage() {
    await this.page.goto('/')
  }

  async navigateToPosts() {
    await this.page.goto('/')
    await this.page.click('text=View All Posts')
  }

  async navigateToProjects() {
    await this.page.goto('/')
    await this.page.click('text=View Projects')
  }

  async navigateToTestingStrategy() {
    await this.page.goto('/')
    const link = this.page.locator('text=Testing Strategy')
    await link.scrollIntoViewIfNeeded()
    await link.click({ force: true })
  }

  async navigateViaNav(navText: string) {
    await this.page.click(`nav a:has-text("${navText}")`)
  }

  // Content verification helpers
  async expectPageTitle(expectedTitle: string) {
    await expect(this.page.locator('h1')).toContainText(expectedTitle)
  }

  async expectSectionVisible(sectionText: string) {
    await expect(this.page.locator('h2', { hasText: sectionText })).toBeVisible()
  }

  async expectRecentPostsCount(expectedCount: number) {
    const posts = this.page.locator('.grid > article')
    await expect(posts).toHaveCount(expectedCount)
  }

  async expectProjectsCount(expectedCount: number) {
    const projects = this.page.locator('.grid > div')
    await expect(projects).toHaveCount(expectedCount)
  }

  // Responsive testing helpers
  async testMobileViewport() {
    await this.page.setViewportSize({ width: 375, height: 667 })
  }

  async testDesktopViewport() {
    await this.page.setViewportSize({ width: 1200, height: 800 })
  }

  // Navigation state helpers
  async expectActiveNavLink(navText: string) {
    const link = this.page.locator(`nav a:has-text("${navText}")`)
    await expect(link).toHaveClass(/text-blue-600/)
  }

  async expectInactiveNavLink(navText: string) {
    const link = this.page.locator(`nav a:has-text("${navText}")`)
    await expect(link).toHaveClass(/text-gray-700/)
  }
}
