import { Page, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  private readonly getStartedLink = 'text=Get started';

  constructor(page: Page) {
    super(page);
  }

  async clickGetStarted(): Promise<void> {
    await this.page.click(this.getStartedLink);
  }

  async verifyInstallationHeadingVisible(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  }

  async verifyTitleContains(text: string): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(text));
  }
}