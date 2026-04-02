import { APIRequestContext, APIResponse } from '@playwright/test';

export class BaseApi {
  protected request: APIRequestContext;
  protected baseUrl: string;

  constructor(request: APIRequestContext, baseUrl: string) {
    this.request = request;
    this.baseUrl = baseUrl;
  }

  protected async get<T = unknown>(
    endpoint: string,
    params?: Record<string, string>,
  ): Promise<APIResponse> {
    return await this.request.get(`${this.baseUrl}${endpoint}`, { params });
  }

  protected async post<T = unknown>(endpoint: string, data?: T): Promise<APIResponse> {
    return await this.request.post(`${this.baseUrl}${endpoint}`, { data });
  }

  protected async put<T = unknown>(endpoint: string, data?: T): Promise<APIResponse> {
    return await this.request.put(`${this.baseUrl}${endpoint}`, { data });
  }

  protected async delete(endpoint: string): Promise<APIResponse> {
    return await this.request.delete(`${this.baseUrl}${endpoint}`);
  }

  protected async getJson<T = unknown>(response: APIResponse): Promise<T> {
    if (!response.ok()) {
      throw new Error(`API request failed with status ${response.status()}: ${response.statusText()}`);
    }
    const contentType = response.headers()['content-type'] || '';
    if (!contentType.includes('application/json')) {
      throw new Error(`Expected JSON response, but got: ${contentType}`);
    }
    return await response.json() as T;
  }

  protected async getText(response: APIResponse): Promise<string> {
    if (!response.ok()) {
      throw new Error(`API request failed with status ${response.status()}: ${response.statusText()}`);
    }
    return await response.text();
  }

  protected getStatus(response: APIResponse): number {
    return response.status();
  }
}
