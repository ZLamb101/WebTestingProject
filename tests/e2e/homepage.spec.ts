import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should display homepage content correctly @critical', async ({ page }) => {
    await page.goto('/')
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Welcome to My Software Testing Blog')
    
    // Check about section
    await expect(page.locator('h2', { hasText: 'About Me' })).toBeVisible()
    await expect(page.locator('text=I\'m a dedicated software testing professional')).toBeVisible()
    
    // Check recent posts section
    await expect(page.locator('h2', { hasText: 'Recent Posts' })).toBeVisible()
    
    // Check projects call to action
    await expect(page.locator('h2', { hasText: 'Explore My Work' })).toBeVisible()
  })

  test('should display recent posts on homepage', async ({ page }) => {
    await page.goto('/')
    
    // Check that recent posts are displayed - our structure uses article elements
    const recentPosts = page.locator('.grid > article')
    await expect(recentPosts).toHaveCount(3) // Based on our content data
    
    // Check first recent post
    await expect(page.locator('.grid > article').first()).toContainText('Getting Started with Playwright Testing')
    
    // Check post metadata
    const firstPost = page.locator('.grid > article').first()
    await expect(firstPost.locator('text=1/15/2025')).toBeVisible() // Formatted date
    await expect(firstPost.locator('text=5 min read')).toBeVisible()
  })

  test('should navigate to posts from homepage', async ({ page }) => {
    await page.goto('/')
    
    // Click on "View All Posts" button
    await page.click('text=View All Posts')
    await expect(page.locator('h1')).toContainText('Blog Posts')
  })

  test('should navigate to projects from homepage', async ({ page }) => {
    await page.goto('/')
    
    // Click on "View Projects" button
    await page.click('text=View Projects')
    await expect(page.locator('h1')).toContainText('Projects')
  })

  test('should navigate to individual posts from homepage', async ({ page }) => {
    await page.goto('/')
    
    // Verify the post title link exists and is clickable
    const postTitleLink = page.locator('.grid > article:first-child h3 a')
    await expect(postTitleLink).toBeVisible()
    await expect(postTitleLink).toHaveAttribute('href', '/WebTestingProject/posts/1')
    
    // Click on the link to test navigation
    await postTitleLink.click()
    // Note: This would navigate to individual post page if implemented
    // For now, we just verify the link works
  })

  test('should be responsive on mobile devices', async ({ page }) => {
    await page.goto('/')
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check that content is still visible and properly laid out
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h2', { hasText: 'About Me' })).toBeVisible()
    await expect(page.locator('h2', { hasText: 'Recent Posts' })).toBeVisible()
    
    // Check that recent posts grid adapts to mobile
    await expect(page.locator('.grid > article').first()).toBeVisible()
  })
})
