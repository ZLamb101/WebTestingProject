// tests/e2e/improved/projects-improved.spec.ts
import { test, expect } from '@playwright/test'
import { ProjectsPage } from '../pages/ProjectsPage'
import { TEST_DATA } from '../utils/test-data'

test.describe('Projects - Improved', () => {
  let projectsPage: ProjectsPage

  test.beforeEach(async ({ page }) => {
    projectsPage = new ProjectsPage(page)
    await projectsPage.navigateToProjects()
  })

  test('should display all projects @critical', async () => {
    await projectsPage.expectPageContentComplete()
    await projectsPage.expectProjectsCount(TEST_DATA.projects.expectedCount)
  })

  test('should display project categories', async () => {
    await projectsPage.expectCategoryButtonsVisible()
  })

  test('should display project metadata correctly', async () => {
    await projectsPage.expectFirstProjectVisible()
    await projectsPage.expectFirstProjectHasStatus()
    await projectsPage.expectFirstProjectHasTechnologies()
    await projectsPage.expectFirstProjectHasFeatures()
  })

  test('should have proper project card layout', async () => {
    await projectsPage.expectFirstProjectHasImageArea()
    await projectsPage.expectFirstProjectHasContentArea()
    await projectsPage.expectFirstProjectHasTitle()
  })

  test('should be responsive on different screen sizes', async () => {
    // Test desktop layout
    await projectsPage.setDesktopViewport()
    await projectsPage.expectFirstProjectVisible()
    
    // Test mobile layout
    await projectsPage.setMobileViewport()
    await projectsPage.expectPageTitle(TEST_DATA.pages.projects.title)
    await projectsPage.expectFirstProjectVisible()
  })
})
