// tests/e2e/pages/BasePage.ts
import { Page, Locator, expect } from '@playwright/test'

export abstract class BasePage {
  constructor(protected page: Page) {}

  // Common elements
  get navigation(): Locator {
    return this.page.locator('nav')
  }

  get siteLogo(): Locator {
    return this.page.locator('a[href="/WebTestingProject"]:has-text("Software Testing Blog")')
  }

  get homeNavLink(): Locator {
    return this.page.locator('nav a:has-text("Home")')
  }

  get postsNavLink(): Locator {
    return this.page.locator('nav a:has-text("Posts")')
  }

  get projectsNavLink(): Locator {
    return this.page.locator('nav a:has-text("Projects")')
  }

  get testingStrategyNavLink(): Locator {
    return this.page.locator('nav a:has-text("Testing Strategy")')
  }

  get pageTitle(): Locator {
    return this.page.locator('h1')
  }

  get footer(): Locator {
    return this.page.locator('footer')
  }

  // Common actions
  async navigateToHomepage(): Promise<void> {
    await this.page.goto('/')
  }

  async navigateViaLogo(): Promise<void> {
    await this.siteLogo.click()
  }

  async navigateViaNav(navText: string): Promise<void> {
    await this.page.click(`nav a:has-text("${navText}")`)
  }

  async expectPageTitle(expectedTitle: string): Promise<void> {
    await expect(this.pageTitle).toContainText(expectedTitle)
  }

  async expectNavigationVisible(): Promise<void> {
    await expect(this.navigation).toBeVisible()
  }

  async expectActiveNavLink(navText: string): Promise<void> {
    const link = this.page.locator(`nav a:has-text("${navText}")`)
    await expect(link).toHaveClass(/text-blue-600/)
  }

  async expectInactiveNavLink(navText: string): Promise<void> {
    const link = this.page.locator(`nav a:has-text("${navText}")`)
    await expect(link).toHaveClass(/text-gray-700/)
  }

  // Responsive testing
  async setMobileViewport(): Promise<void> {
    await this.page.setViewportSize({ width: 375, height: 667 })
  }

  async setDesktopViewport(): Promise<void> {
    await this.page.setViewportSize({ width: 1200, height: 800 })
  }

  // Wait for page to be ready
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle')
  }
}
