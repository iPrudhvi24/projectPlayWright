import test, { Page, APIRequestContext } from '@playwright/test';

type TestInterface = UITestInterface | APITestInterface;

export type UITestInterface = {
  beforeEach?: ({ page }: { page: Page }) => Promise<void>;
  afterEach?: ({ page }: { page: Page }) => Promise<void>;
  beforeAll?: ({ page }: { page: Page }) => Promise<void>;
  afterAll?: ({ page }: { page: Page }) => Promise<void>;
  tests: {
    [testName: string]: (context: { page: Page }) => Promise<void>;
  };
};

export type APITestInterface = {
  beforeEach?: ({ request }: { request: APIRequestContext }) => Promise<void>;
  afterEach?: ({ request }: { request: APIRequestContext }) => Promise<void>;
  beforeAll?: ({ request }: { request: APIRequestContext }) => Promise<void>;
  afterAll?: ({ request }: { request: APIRequestContext }) => Promise<void>;
  tests: {
    [testName: string]: ({
      request,
    }: {
      request: APIRequestContext;
    }) => Promise<void>;
  };
};

export default function executeSuite(
  suiteDescription: string,
  testsObject: TestInterface,
) {
  test.describe(suiteDescription, () => {
    if (testsObject.beforeAll) test.beforeAll(testsObject.beforeAll);
    if (testsObject.beforeEach) test.beforeEach(testsObject.beforeEach);
    if (testsObject.afterEach) test.afterEach(testsObject.afterEach);
    if (testsObject.afterAll) test.afterAll(testsObject.afterAll);

    Object.entries(testsObject.tests).forEach(([testName, testFn]) =>
      test(testName, testFn),
    );
  });
}

// Export execute as an alias for backward compatibility
export const execute = executeSuite;
