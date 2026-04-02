import test, { APIRequestContext, Page } from "@playwright/test";

export type UITestInterface = {
   beforeEach?: ( { page }: { page: Page; } ) => Promise<void>,
   afterEach?: ( { page }: { page: Page; } ) => Promise<void>,
   beforeAll?: ( { page }: { page: Page; } ) => Promise<void>,
   afterAll?: ( { page }: { page: Page; } ) => Promise<void>,
   tests: {
      [name: string]: ( { page }: { page: Page; } ) => Promise<void>;
   };
};

export type APITestInterface = {
   beforeEach?: ( { request }: { request: APIRequestContext; } ) => Promise<void>,
   afterEach?: ( { request }: { request: APIRequestContext; } ) => Promise<void>,
   beforeAll?: ( { request }: { request: APIRequestContext; } ) => Promise<void>,
   afterAll?: ( { request }: { request: APIRequestContext; } ) => Promise<void>,
   tests: {
      [name: string]: ( { request }: { request: APIRequestContext; } ) => Promise<void>;
   };
};

type TestInterface = UITestInterface | APITestInterface;

export function execute( suiteName: string, testObject: TestInterface ) {
   test.describe( suiteName, () => {
      if ( testObject.beforeAll ) test.beforeAll( testObject.beforeAll );
      if ( testObject.beforeEach ) test.beforeEach( testObject.beforeEach );
      if ( testObject.afterEach ) test.afterEach( testObject.afterEach );
      if ( testObject.afterAll ) test.afterAll( testObject.afterAll );
      Object.entries( testObject.tests ).forEach( ( [name, fn] ) => test( name, fn ) );
   } );
}