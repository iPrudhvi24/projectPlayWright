import { APITestInterface } from '../utils/test.type';
import { APIRequestContext, expect } from '@playwright/test';
import { UserApi } from '../../lib/pages/api/userApi';

export const sampleAPITestsObject: APITestInterface = {
  beforeEach: async ({ request }: { request: APIRequestContext }) => {
    // Setup code that runs before each test
    console.log('Setting up before each API test');
  },
  afterEach: async ({ request }: { request: APIRequestContext }) => {
    // Cleanup code that runs after each test
    console.log('Cleaning up after each API test');
  },
  tests: {
    '@smoke get users': async ({ request }: { request: APIRequestContext }) => {
      const userApi = new UserApi(request);
      const users = await userApi.getUsers();
      expect(users.length).toBeGreaterThan(0);
    },

    '@smoke get user by id': async ({
      request,
    }: {
      request: APIRequestContext;
    }) => {
      const userApi = new UserApi(request);
      const user = await userApi.getUserById(1);
      expect(user.id).toBe(1);
      expect(user.name).toBeDefined();
    },

    '@smoke create user': async ({
      request,
    }: {
      request: APIRequestContext;
    }) => {
      const userApi = new UserApi(request);
      const newUser = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
      };
      const createdUser = await userApi.createUser(newUser);
      expect(createdUser.name).toBe(newUser.name);
      expect(createdUser.id).toBeDefined();
    },
  },
};
