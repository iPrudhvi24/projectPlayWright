import { Page, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickGetStarted(): Promise<void> {
    await this.page.getByRole('link', { name: 'Get started' }).click();
  }

  async verifyInstallationHeadingVisible(): Promise<void> {
    await expect(
      this.page.getByRole('heading', { name: 'Installation' }),
    ).toBeVisible();
  }

  async verifyTitleContains(text: string): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(text));
  }
}
