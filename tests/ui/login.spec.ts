import { test } from '@playwright/test';

test.describe('with authentication', async () => {
  test.use({ storageState: '.auth/admin.json' });

  test('check the authentication', { tag: '@regression' }, async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com');

    await page.waitForTimeout(10000);
  });
});
