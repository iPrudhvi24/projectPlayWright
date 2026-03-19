import { test, Page, APIRequestContext, devices } from '@playwright/test';

export interface UITestInterface {
  beforeEach?: ({ page }: { page: Page }) => Promise<void>;
  afterEach?: ({ page }: { page: Page }) => Promise<void>;
  beforeAll?: ({ page }: { page: Page }) => Promise<void>;
  afterAll?: ({ page }: { page: Page }) => Promise<void>;
  tests: { [name: string]: ({ page }: { page: Page }) => Promise<void> };
}

export interface APITestInterface {
  beforeEach?: ({ request }: { request: APIRequestContext }) => Promise<void>;
  afterEach?: ({ request }: { request: APIRequestContext }) => Promise<void>;
  beforeAll?: ({ request }: { request: APIRequestContext }) => Promise<void>;
  afterAll?: ({ request }: { request: APIRequestContext }) => Promise<void>;
  tests: {
    [name: string]: ({
      request,
    }: {
      request: APIRequestContext;
    }) => Promise<void>;
  };
}

export type TestInterface = UITestInterface | APITestInterface;

export function execute(name: string, testObject: TestInterface) {
  if (testObject.beforeAll) test.beforeAll(testObject.beforeAll);
  if (testObject.afterAll) test.afterAll(testObject.afterAll);
  if (testObject.beforeEach) test.beforeEach(testObject.beforeEach);
  if (testObject.afterEach) test.afterEach(testObject.afterEach);
  test.describe(name, () => {
    Object.entries(testObject.tests).forEach(([name, fun]) => {
      test(name, fun);
    });
  });
}
