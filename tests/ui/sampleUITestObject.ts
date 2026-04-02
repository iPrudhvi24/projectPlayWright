import { Page } from '@playwright/test';
import { UITestInterface } from '../utils/test.type';
import { HomePage } from '../../lib/pages/ui/homePage';

export const sampleUITestsObject: UITestInterface = {
  beforeEach: async ({ page }: { page: Page }) => {
    // Setup code that runs before each test
    console.log('Setting up before each UI test');
  },
  afterEach: async ({ page }: { page: Page }) => {
    // Cleanup code that runs after each test
    console.log('Cleaning up after each UI test');
  },
  tests: {
    '@smoke has title': async ({ page }: { page: Page }) => {
      const homePage = new HomePage(page);
      await homePage.navigateTo('https://playwright.dev/');
      await homePage.verifyTitleContains('Playwright');
    },

    '@smoke @regression get started link': async ({ page }: { page: Page }) => {
      const homePage = new HomePage(page);
      await homePage.navigateTo('https://playwright.dev/');
      await homePage.clickGetStarted();
      await homePage.verifyInstallationHeadingVisible();
    },
  },
};
