import { BrowserContext, expect, Page, test } from '@playwright/test';

test('authentication_cookies', async ({
  page,
  context,
}: {
  page: Page;
  context: BrowserContext;
}) => {
  console.log('execution is started as expected');

  const email: string = process.env.TEST_USER_EMAIL || 'admin@practicesoftwaretesting.com';
  const password: string = process.env.TEST_USER_PASSWORD || 'welcome01';
  const adminAuthFileLoc: string = 'auth/admin.json';

  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.getByPlaceholder('Your email').fill(email);
  await page.getByPlaceholder('Your password').fill(password);

  await page.getByTestId('login-submit').click();

  await page.waitForURL('https://practicesoftwaretesting.com/');

  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot('landing_page_screenshot.png', {
    maskColor: 'white',
  });

  context.storageState({ path: adminAuthFileLoc });
});
