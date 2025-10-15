import { defineConfig, devices } from '@playwright/test'

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests/e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Use more workers on CI for faster execution */
  workers: process.env.CI ? 4 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:5173/WebTestingProject',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /* Take screenshot on failure */
    screenshot: 'only-on-failure',
    /* Record video on failure */
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    /* Primary browser for all tests - fastest and most reliable */
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Uncomment to run headed by default
        // headless: false,
      },
    },

    /* Secondary browsers for critical tests only */
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      testMatch: /.*\.(smoke|critical)\.spec\.ts/,
    },

    // Skip WebKit in CI due to system dependency issues
    ...(process.env.CI ? [] : [{
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      testMatch: /.*\.(smoke|critical)\.spec\.ts/,
    }]),

    /* Microsoft Edge - runs in both CI and local */
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
      testMatch: /.*\.(smoke|critical)\.spec\.ts/,
    },

    /* Mobile testing for responsive tests only */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
      testMatch: /.*\.(responsive|mobile)\.spec\.ts/,
    },
    // Skip Mobile Safari in CI due to WebKit dependency issues
    ...(process.env.CI ? [] : [{
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
      testMatch: /.*\.(responsive|mobile)\.spec\.ts/,
    }]),

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
})
