import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=webdriverIO');

  // Wait for the search results page to load and click the WebdriverIO link
  const wdioLink = page.getByRole('link', { name: /WebdriverIO/i });
  await expect(wdioLink).toBeVisible();
  await wdioLink.first().click();

  // Wait for the Get Started link and click it
  const getStarted = page.getByRole('link', { name: /Get Started/i });
  await expect(getStarted).toBeVisible();
  await getStarted.click();

  // Wait for Core Concepts button and click it
  const coreConcepts = page.getByRole('button', { name: /Core Concepts/i });
  await expect(coreConcepts).toBeVisible();
  await coreConcepts.click();

  // Wait for Getting Started link in contentinfo and click it
  const gettingStarted = page
    .getByRole('contentinfo')
    .getByRole('link', { name: /Getting Started/i });
  await expect(gettingStarted).toBeVisible();
  await gettingStarted.click();

  // Wait for Setup Types link and click it
  const setupTypes = page.getByRole('link', { name: /Setup Types/i });
  await expect(setupTypes).toBeVisible();
  await setupTypes.click();

  // Click Chrome DevTools and WebDriver tabs
  const chromeDevToolsTab = page.getByRole('tab', { name: /Chrome DevTools/i });
  const webDriverTab = page.getByRole('tab', { name: /WebDriver/i });
  await expect(chromeDevToolsTab).toBeVisible();
  await expect(webDriverTab).toBeVisible();
  await chromeDevToolsTab.click();
  await webDriverTab.click();
  await chromeDevToolsTab.click();
  await webDriverTab.click();
  await webDriverTab.click();
});
