import registerNewUser from '@dataFactory/registerUser.data';
import raisePaymentIssue from '@dataFactory/serviceContact.data';
import { LoginPage } from '@pages/ui/login.page';
import test from '@playwright/test';
import { readFile, readFileSync } from 'fs';

test.use({ headless: false });
test.describe('customer message', () => {
  test('validate cutomer issue', async ({ page, context }) => {
    // prepare all the details for making a request
    const name: string = 'prudhvi c';
    const email: string = 'prudhvi@gmail.com';
    const message: string =
      'Again am seeing the same payment issue, please look into it asap and resolve it. This issue is persisting frequently, Thanks!';

    // register a new user
    const newUser: { [name: string]: string } = await registerNewUser(
      '@gmail.com',
      'welcome01',
    );

    let loginPage: LoginPage = new LoginPage(page);

    await loginPage.login(newUser.email, newUser.password);

    await context.storageState({ path: '../../auth/message.json' });

    const response: { [name: string]: any } = await JSON.parse(
      readFileSync('../../auth/message.json', 'utf-8'),
    );

    // make an api call for accepting the issue from the user
    await raisePaymentIssue(
      name,
      newUser.email,
      message,
      String(response?.cookies?.[0]?.value),
    );

    loginPage = new LoginPage(page);

    await loginPage.login('admin@practicesoftwaretesting.com', 'welcome01');

    await page.getByRole('button', { name: /John Doe/i }).click();

    await page.getByRole('menuitem', { name: 'Messages' }).click();
  });
});
