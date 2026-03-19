import { test as setup } from '@playwright/test';

setup('login', async ({ page, context }) => {
  const email: string = 'admin@practicesoftwaretesting.com';
  const password: string = 'welcome01';
  const adminAuthFileLoc: string = '.auth/admin.json';

  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.getByPlaceholder('Your email').fill(email);
  await page.getByPlaceholder('Your password').fill(password);

  await page.getByTestId('login-submit').click();

  await page.waitForURL('https://practicesoftwaretesting.com/');

  context.storageState({ path: adminAuthFileLoc });
});
