export const environments = {
  dev: {
    baseUrl: 'https://dev.example.com',
    apiBaseUrl: 'https://dev-api.example.com',
  },
  staging: {
    baseUrl: 'https://staging.example.com',
    apiBaseUrl: 'https://staging-api.example.com',
  },
  prod: {
    baseUrl: 'https://example.com',
    apiBaseUrl: 'https://api.example.com',
  },
};

export const getCurrentEnvironment = () => {
  const env = process.env.TEST_ENV || 'dev';
  return environments[env as keyof typeof environments];
};