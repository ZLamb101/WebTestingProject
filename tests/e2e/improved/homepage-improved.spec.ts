// tests/e2e/improved/homepage-improved.spec.ts
import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { TEST_DATA } from '../utils/test-data'

test.describe('Homepage - Improved', () => {
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.navigateToHomepage()
  })

  test('should display homepage content correctly @critical', async () => {
    await homePage.expectPageContentComplete()
  })

  test('should display recent posts on homepage', async () => {
    await homePage.expectRecentPostsCount(TEST_DATA.recentPosts.expectedCount)
    await homePage.expectFirstPostVisible()
    await homePage.expectFirstPostHasReadTime()
  })

  test('should navigate to posts from homepage', async () => {
    await homePage.navigateToPosts()
    await homePage.expectPageTitle(TEST_DATA.pages.posts.title)
  })

  test('should navigate to projects from homepage', async () => {
    await homePage.navigateToProjects()
    await homePage.expectPageTitle(TEST_DATA.pages.projects.title)
  })

  test('should navigate to individual posts from homepage', async () => {
    await homePage.expectFirstPostLinkHref(`${TEST_DATA.urls.basename}/posts/1`)
    await homePage.clickFirstPostTitle()
    // Note: Individual post page not implemented yet
  })

  test('should be responsive on mobile devices', async () => {
    await homePage.setMobileViewport()
    
    // Check that content is still visible and properly laid out
    await homePage.expectPageTitle(TEST_DATA.pages.home.title)
    await homePage.expectAboutSectionVisible()
    await homePage.expectRecentPostsSectionVisible()
    
    // Check that recent posts grid adapts to mobile
    await homePage.expectRecentPostsCount(TEST_DATA.recentPosts.expectedCount)
  })
})
