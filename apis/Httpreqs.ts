import { APIResponse } from '@playwright/test';

export interface Httpreqs {
 
  get(endpoint: string, params?: Record<string, string>): Promise<APIResponse>;
  post(endpoint: string, data?: any): Promise<APIResponse>;

  put(endpoint: string, data?: any): Promise<APIResponse>;

  delete(endpoint: string): Promise<APIResponse>;
  getJson(response: APIResponse): Promise<any>;

  getText(response: APIResponse): Promise<string>;

  getStatus(response: APIResponse): number;
}
