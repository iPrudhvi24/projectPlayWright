import test, { Page, APIRequestContext } from '@playwright/test';

type TestInterface = UITestInterface | APITestInterface;

export type UITestInterface = {
  beforeEach?: (context: { page: Page }) => Promise<void>;
  afterEach?: (context: { page: Page }) => Promise<void>;
  beforeAll?: (context: { page: Page }) => Promise<void>;
  afterAll?: (context: { page: Page }) => Promise<void>;
  tests: {
    [testName: string]: (context: { page: Page }) => Promise<void>;
  };
};

export type APITestInterface = {
  beforeEach?: (context: { request: APIRequestContext }) => Promise<void>;
  afterEach?: (context: { request: APIRequestContext }) => Promise<void>;
  beforeAll?: (context: { request: APIRequestContext }) => Promise<void>;
  afterAll?: (context: { request: APIRequestContext }) => Promise<void>;
  tests: {
    [testName: string]: (context: {
      request: APIRequestContext;
    }) => Promise<void>;
  };
};

export default function executeSuite(
  suiteDescription: string,
  testsObject: TestInterface,
) {
  test.describe(suiteDescription, () => {
    // Handle beforeAll hook
    if (testsObject.beforeAll) {
      test.beforeAll(testsObject.beforeAll);
    }

    // Handle beforeEach hook
    if (testsObject.beforeEach) {
      test.beforeEach(testsObject.beforeEach);
    }

    // Handle afterEach hook
    if (testsObject.afterEach) {
      test.afterEach(testsObject.afterEach);
    }

    // Handle afterAll hook
    if (testsObject.afterAll) {
      test.afterAll(testsObject.afterAll);
    }

    // Execute test functions
    Object.entries(testsObject.tests).forEach(([testName, testFn]) => {
      test(testName, testFn);
    });
  });
}

// Export execute as an alias for backward compatibility
export const execute = executeSuite;
