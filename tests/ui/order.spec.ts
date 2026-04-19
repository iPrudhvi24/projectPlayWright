import test, { expect, Page } from '@playwright/test';
import { LoginPage } from '@pages/ui/login.page';
import registerNewUser from '@dataFactory/registerUser.data';
import { randomState } from '@helpers/states.helper';

test.use({ headless: true });
test.describe('place an order for the product', () => {
  test('book a product', async ({ page }: { page: Page }) => {
    await test.step('login to the application', async () => {
      const email: string = 'random@practicesoftwaretesting.com';
      const password: string = 'Prudhvi@1224';

      // await registerNewUser(email, password);

      const loginPage: LoginPage = new LoginPage(page);

      await loginPage.login(email, password);
    });

    await test.step('go to the home screen', async () => {
      await page.getByRole('link', { name: 'Home' }).click();
    });

    await test.step('search for the item', async () => {
      await page.getByTestId('search-query').focus();
      await page.getByTestId('search-query').pressSequentially('pliers');
      await page.getByRole('button', { name: 'Search' }).press('Enter');
    });

    await test.step('get the product from the filtered products list', async () => {
      await page
        .getByTestId('search_completed')
        .filter({ hasText: 'pliers' })
        .click();
    });

    await test.step('page should go to the products page', async () => {
      expect(page.getByAltText('Pliers')).toBeTruthy();
    });

    await test.step('click on add to cart', async () => {
      await page.getByRole('button', { name: 'Add to cart' }).click();
    });

    await test.step('assertion', async () => {
      await expect(
        page.getByRole('alert', { name: 'Product added to shopping cart' }),
      ).toBeVisible();

      await expect(
        page.getByTestId('nav-cart').getByTestId('cart-quantity'),
      ).toHaveText('1');
    });

    await test.step('go to kart', async () => {
      page.getByTestId('nav-cart').click();

      await page.getByRole('button', { name: 'Proceed to checkout' }).click();
    });

    await test.step('perform login action', async () => {
      await page
        .getByTestId('email')
        .pressSequentially('admin@practicesoftwaretesting.com');
      await page.getByTestId('password').pressSequentially('welcome01');
      await page.getByRole('button', { name: 'Login' }).click();

      await page.getByRole('button', { name: 'Proceed to checkout' }).click();
    });

    await test.step('Fill your delivery address...', async () => {
      await page.getByPlaceholder('Your street').fill('ramula vaari veedhi');
      await page.getByPlaceholder('Your city').fill('chittor');
      await page.getByPlaceholder('state').fill(randomState('USA'));
      await page.getByPlaceholder('Your country').pressSequentially('India');
      await page
        .getByPlaceholder('Your Postcode *')
        .pressSequentially('517127');

      await page.getByRole('button', { name: 'Proceed to checkout' }).click();
    });

    await test.step('Making payment', async () => {
      await page.getByTestId('payment-method').selectOption({ index: 2 });

      await page.getByRole('button', { name: 'confirm' }).click();

      await expect(page.getByTestId('payment-success-message')).toHaveText(
        'Payment was successful',
      );
    });

    await test.step('Terminate the page and the instances', async () => {
      await page.close();
    });
  });
});
