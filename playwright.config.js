"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@playwright/test");
var environments_1 = require("./config/environments");
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
var env = (0, environments_1.getCurrentEnvironment)();
/**
 * See https://playwright.dev/docs/test-configuration.
 */
exports.default = (0, test_1.defineConfig)({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [['html'], ['json', { outputFile: 'test-results.json' }]],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        viewport: null,
        headless: true,
        testIdAttribute: 'data-test',
        offline: false,
        locale: 'en-IN',
        timezoneId: 'Asia/Kolkata',
        /* Base URL to use in actions like `await page.goto('')`. */
        baseURL: env.baseUrl,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        /* Take screenshot on failure */
        screenshot: 'only-on-failure',
        /* Record video on failure */
        video: 'on',
    },
    /* Configure projects for major browsers and API */
    projects: [
        {
            name: 'setup',
            testMatch: '/.*\.setup\.ts/',
        },
        {
            name: 'chrome',
            dependencies: ['setup'],
            use: __assign({}, test_1.devices['Desktop Chrome']),
        },
        // {
        //   name: 'firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },
        /* API Testing Project */
        {
            name: 'api',
            use: {
                baseURL: env.apiBaseUrl,
            },
            testMatch: '**/api/**/*.spec.ts',
        },
    ],
    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://localhost:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
