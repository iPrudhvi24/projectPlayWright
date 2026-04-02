import { UITestInterface } from '../utils/test.type';
import { Browser, Page, chromium, expect } from '@playwright/test';

export const sampleTestsObject: UITestInterface = {
  beforeEach: async ({ page }: { page: Page }) => {
    // Setup code that runs before each test
    console.log('Setting up before each test');
  },
  afterEach: async ({ page }: { page: Page }) => {
    // Cleanup code that runs after each test
    console.log('Cleaning up after each test');
  },
  tests: {
    '@smoke has title': async ({ page }: { page: Page }) => {
      await page.goto('https://playwright.dev/');
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/);
    },

    '@smoke @regression get started link': async ({ page }: { page: Page }) => {
      await page.goto('https://playwright.dev/');

      // Click the get started link.
      await page.getByRole('link', { name: 'Get started' }).click();

      // Expects page to have a heading with the name of Installation.
      await expect(
        page.getByRole('heading', { name: 'Installation' }),
      ).toBeVisible();
    },
  },
};
