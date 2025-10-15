// tests/e2e/improved/critical-smoke-improved.spec.ts
import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { PostsPage } from '../pages/PostsPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { TestingStrategyPage } from '../pages/TestingStrategyPage'
import { TEST_DATA } from '../utils/test-data'

test.describe('Critical Smoke Tests - Improved @critical', () => {
  let homePage: HomePage
  let postsPage: PostsPage
  let projectsPage: ProjectsPage
  let testingStrategyPage: TestingStrategyPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    postsPage = new PostsPage(page)
    projectsPage = new ProjectsPage(page)
    testingStrategyPage = new TestingStrategyPage(page)
  })

  test('should load homepage and display core content', async () => {
    await homePage.navigateToHomepage()
    
    // Critical: Homepage loads
    await homePage.expectPageTitle(TEST_DATA.pages.home.title)
    
    // Critical: Navigation works
    await homePage.expectNavigationVisible()
    await homePage.postsNavLink.toBeVisible()
    await homePage.projectsNavLink.toBeVisible()
    
    // Critical: Core content sections
    await homePage.expectAboutSectionVisible()
    await homePage.expectRecentPostsSectionVisible()
  })

  test('should navigate to posts page', async () => {
    await homePage.navigateToHomepage()
    await homePage.navigateViaNav('Posts')
    await postsPage.expectPageTitle(TEST_DATA.pages.posts.title)
  })

  test('should navigate to projects page', async () => {
    await homePage.navigateToHomepage()
    await homePage.navigateViaNav('Projects')
    await projectsPage.expectPageTitle(TEST_DATA.pages.projects.title)
  })

  test('should navigate to testing strategy page', async () => {
    await testingStrategyPage.navigateToTestingStrategy()
    await testingStrategyPage.expectPageTitle(TEST_DATA.pages.testingStrategy.title)
  })
})
