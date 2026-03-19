import { APIRequestContext, APIResponse } from '@playwright/test';

export class BaseApi {
  protected request: APIRequestContext;
  protected baseUrl: string;

  constructor(request: APIRequestContext, baseUrl: string) {
    this.request = request;
    this.baseUrl = baseUrl;
  }

  protected async get(
    endpoint: string,
    params?: Record<string, string>,
  ): Promise<APIResponse> {
    return await this.request.get(`${this.baseUrl}${endpoint}`, { params });
  }

  protected async post(endpoint: string, data?: any): Promise<APIResponse> {
    return await this.request.post(`${this.baseUrl}${endpoint}`, { data });
  }

  protected async put(endpoint: string, data?: any): Promise<APIResponse> {
    return await this.request.put(`${this.baseUrl}${endpoint}`, { data });
  }

  protected async delete(endpoint: string): Promise<APIResponse> {
    return await this.request.delete(`${this.baseUrl}${endpoint}`);
  }

  protected async getJson(response: APIResponse): Promise<any> {
    return await response.json();
  }

  protected async getText(response: APIResponse): Promise<string> {
    return await response.text();
  }

  protected getStatus(response: APIResponse): number {
    return response.status();
  }
}
