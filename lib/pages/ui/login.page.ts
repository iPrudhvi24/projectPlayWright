import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  readonly email: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(readonly page: Page) {
    super(page);
    this.email = page.getByTestId('email');
    this.password = page.getByTestId('password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }

  async login(email: string, password: string): Promise<void> {
    // First go to login screen and wait for notwrok to be idle.
    await this.goto();
    await super.waitForLoad();

    // Now fill the login form and submit it.
    await this.email.pressSequentially(email);
    await this.password.pressSequentially(password);
    await this.loginBtn.click();
  }

  async goto(): Promise<void> {
    await super.navigateTo('https://practicesoftwaretesting.com/auth/login');
  }
}
