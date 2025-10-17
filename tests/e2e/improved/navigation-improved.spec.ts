// tests/e2e/improved/navigation-improved.spec.ts
import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { PostsPage } from '../pages/PostsPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { TestingStrategyPage } from '../pages/TestingStrategyPage'
import { TEST_DATA } from '../utils/test-data'

test.describe('Navigation - Improved @critical', () => {
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

  test('should navigate between all pages', async () => {
    // Start at home
    await homePage.navigateToHomepage()
    await homePage.expectPageTitle(TEST_DATA.pages.home.title)
    
    // Navigate to Posts
    await homePage.navigateViaNav('Posts')
    await postsPage.expectPageTitle(TEST_DATA.pages.posts.title)
    
    // Navigate to Projects
    await homePage.navigateViaNav('Projects')
    await projectsPage.expectPageTitle(TEST_DATA.pages.projects.title)
    
    // Navigate to Testing Strategy
    await testingStrategyPage.navigateToTestingStrategy()
    await testingStrategyPage.expectPageTitle(TEST_DATA.pages.testingStrategy.title)
    
    // Navigate back to Home
    await homePage.navigateViaNav('Home')
    await homePage.expectPageTitle(TEST_DATA.pages.home.title)
  })

  test('should highlight active navigation link', async () => {
    await homePage.navigateToHomepage()
    await homePage.navigateViaNav('Posts')
    
    // Posts link should be active
    await homePage.expectActiveNavLink('Posts')
    
    // Home link should not be active
    await homePage.expectInactiveNavLink('Home')
  })

  test('should navigate via site logo', async () => {
    await homePage.navigateToHomepage()
    await homePage.navigateViaNav('Posts')
    
    // Click on site logo
    await homePage.navigateViaLogo()
    await homePage.expectPageTitle(TEST_DATA.pages.home.title)
  })

  test('should maintain navigation state across page refreshes', async () => {
    await homePage.navigateToHomepage()
    await homePage.navigateViaNav('Projects')
    
    // Refresh the page
    await homePage.page.reload()
    await projectsPage.expectPageTitle(TEST_DATA.pages.projects.title)
    
    // Active link should still be highlighted
    await homePage.expectActiveNavLink('Projects')
  })
})
