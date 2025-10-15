// Example of improved test using helpers and constants
import { test, expect } from '@playwright/test'
import { TestHelpers } from './utils/test-helpers'
import { TEST_DATA } from './utils/test-data'

test.describe('Homepage - Improved', () => {
  let helpers: TestHelpers

  test.beforeEach(async ({ page }) => {
    helpers = new TestHelpers(page)
  })

  test('should display homepage content correctly @critical', async ({ page }) => {
    await helpers.navigateToHomepage()
    
    // Check main heading
    await helpers.expectPageTitle(TEST_DATA.pages.home.title)
    
    // Check all sections are visible
    for (const section of TEST_DATA.pages.home.sections) {
      await helpers.expectSectionVisible(section)
    }
  })

  test('should display recent posts on homepage', async ({ page }) => {
    await helpers.navigateToHomepage()
    
    // Check recent posts count
    await helpers.expectRecentPostsCount(TEST_DATA.recentPosts.expectedCount)
    
    // Check first post exists (without hard-coding content)
    const firstPost = page.locator('.grid > article').first()
    await expect(firstPost).toBeVisible()
    
    // Check post has expected metadata structure
    await expect(firstPost.locator('text=min read')).toBeVisible()
  })

  test('should navigate to posts from homepage', async ({ page }) => {
    await helpers.navigateToHomepage()
    
    // Click on "View All Posts" button
    await page.click('text=View All Posts')
    await helpers.expectPageTitle(TEST_DATA.pages.posts.title)
  })

  test('should be responsive on mobile devices', async ({ page }) => {
    await helpers.navigateToHomepage()
    await helpers.testMobileViewport()
    
    // Check that content is still visible and properly laid out
    await helpers.expectPageTitle(TEST_DATA.pages.home.title)
    await helpers.expectSectionVisible('About Me')
    await helpers.expectSectionVisible('Recent Posts')
    
    // Check that recent posts grid adapts to mobile
    await helpers.expectRecentPostsCount(TEST_DATA.recentPosts.expectedCount)
  })
})
