import { APIRequestContext, expect } from '@playwright/test';
import { BaseApi } from './baseApi';

export class UserApi extends BaseApi {
  constructor(
    request: APIRequestContext,
    baseUrl: string = 'https://jsonplaceholder.typicode.com',
  ) {
    super(request, baseUrl);
  }

  async getUsers(): Promise<any[]> {
    const response = await super.get('/users');
    expect(response.status()).toBe(200);
    return await super.getJson(response);
  }

  async getUserById(id: number): Promise<any> {
    const response = await super.get(`/users/${id}`);
    expect(response.status()).toBe(200);
    return await super.getJson(response);
  }

  async createUser(userData: any): Promise<any> {
    const response = await super.post('/users', userData);
    expect(response.status()).toBe(201);
    return await super.getJson(response);
  }
}
