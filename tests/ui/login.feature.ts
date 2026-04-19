import {After, Before, Given, setDefaultTimeout, Then, When,} from '@cucumber/cucumber';
import {Browser, BrowserContext, chromium, expect, Page,} from '@playwright/test';
import {LoginPage} from '../../lib/pages/ui/login.page';

setDefaultTimeout(30000); // 30 seconds timeout

let browser: Browser;
let context: BrowserContext;
let page: Page;
let loginPage: LoginPage;

// Initialize browser and context before each scenario
Before(async () => {
    browser = await chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
});

// Clean up after each scenario
After(async () => {
    await context.close();
    await browser.close();
});

Given('I navigate to the Website login screen', async () => {
    console.log('Starting navigation to login screen...');
    await loginPage.goto();
    await page.waitForLoadState('networkidle');
    console.log('Navigation complete');
});

When('I entered valid credential', async () => {
    await loginPage.login('random@practicesoftwaretesting.com', 'Prudhvi@1224');
});

Then('click on login button', async () => await loginPage.loginBtn.click());

Then(
    'User should be logged into the application successfully',
    async ({page}: { page: Page }) => {
        await page.getByRole('link', {name: 'Home'}).click();
        expect(await loginPage.getTitle()).toBe(
            'Practice Software Testing - Toolshop - v5.0',
        );

        let names: Set<string> = new Set<string>();

        names.add('prudhvi').add('cuttamanchi').add('divya').add('cuttamanchi');

        names.forEach((name: string, nameAgain: string, names: Set<string>): void => console.log(name));
    },
);
