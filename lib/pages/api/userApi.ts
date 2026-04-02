import { APIRequestContext, expect } from '@playwright/test';
import { BaseApi } from './baseApi';

export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
}

export class UserApi extends BaseApi {
  constructor(
    request: APIRequestContext,
    baseUrl: string = 'https://jsonplaceholder.typicode.com',
  ) {
    super(request, baseUrl);
  }

  async getUsers(): Promise<User[]> {
    const response = await super.get<User[]>('/users');
    expect(response.status()).toBe(200);
    return await super.getJson<User[]>(response);
  }

  async getUserById(id: number): Promise<User> {
    const response = await super.get<User>(`/users/${id}`);
    expect(response.status()).toBe(200);
    return await super.getJson<User>(response);
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const response = await super.post<Omit<User, 'id'>>('/users', userData);
    expect(response.status()).toBe(201);
    return await super.getJson<User>(response);
  }
}
