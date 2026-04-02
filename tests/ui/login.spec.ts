import { test } from '@playwright/test';
import { readFile, readFileSync } from 'node:fs';

test.describe('with authentication', () => {
  test.use({
    storageState: 'auth/admin.json',
  });

  test('check the authentication', { tag: '@regression' }, async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com');
    await page.waitForLoadState('networkidle');
    // Assert that the user is logged in by checking for a sign out button or user menu
    await page.getByText('Sign Out').waitFor({ state: 'visible' });
  });
});
