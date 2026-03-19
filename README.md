# Enterprise UI & API Automation Testing Framework

This framework provides a comprehensive solution for both UI and API automation testing using Playwright, following Page Object Model (POM) design pattern and object-style test organization.

## Features

- **Page Object Model (POM)**: Clean separation of page logic and test logic
- **Object-Style Tests**: Tests organized in objects with setup/teardown methods
- **UI & API Testing**: Support for both web UI and API automation
- **Multi-Environment Support**: Configurable environments (dev, staging, prod)
- **Parallel Execution**: Tests run in parallel for faster execution
- **Rich Reporting**: HTML and JSON reports with screenshots and videos
- **TypeScript Support**: Full TypeScript implementation for better development experience

## Project Structure

```
automation/
├── pages/                 # Page Object classes for UI testing
│   ├── basePage.ts       # Base page class with common methods
│   └── homePage.ts       # Example page object
├── apis/                  # API classes for API testing
│   ├── baseApi.ts        # Base API class with common methods
│   └── userApi.ts        # Example API class
├── tests/
│   ├── ui/               # UI test files
│   │   ├── sampleUITestObject.ts
│   │   ├── uiTests.spec.ts
│   │   └── example.spec.ts
│   ├── api/              # API test files
│   │   ├── sampleAPITestObject.ts
│   │   └── apiTests.spec.ts
│   ├── utils/            # Test utilities
│   │   └── utils.ts      # Test execution utilities
│   └── test-data/        # Test data files
│       └── testData.ts
├── config/               # Configuration files
│   └── environments.ts   # Environment configurations
├── playwright.config.ts  # Playwright configuration
├── package.json          # Project dependencies and scripts
└── README.md            # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npm run install-browsers
```

## Configuration

### Environments

Configure different environments in `config/environments.ts`:

```typescript
export const environments = {
  dev: {
    baseUrl: 'https://dev.example.com',
    apiBaseUrl: 'https://dev-api.example.com',
  },
  // ... other environments
};
```

Set the environment using `TEST_ENV` variable:
```bash
TEST_ENV=staging npm run test
```

## Writing Tests

### UI Tests

1. Create a Page Object class in `pages/`:

```typescript
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  async login(username: string, password: string) {
    await this.fillInput('#username', username);
    await this.fillInput('#password', password);
    await this.clickElement('#login-button');
  }
}
```

2. Create a test object in `tests/ui/`:

```typescript
import { UITestInterface } from '../utils/utils';
import { LoginPage } from '../../pages/loginPage';

export const loginTests: UITestInterface = {
  beforeEach: async ({ page }) => {
    // Setup
  },
  tests: {
    '@smoke login with valid credentials': async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.login('user', 'pass');
      // Assertions
    },
  },
};
```

3. Create a spec file:

```typescript
import { executeUI } from '../utils/utils';
import { loginTests } from './loginTests';

executeUI('Login Tests', loginTests);
```

### API Tests

1. Create an API class in `apis/`:

```typescript
import { BaseApi } from './baseApi';

export class UserApi extends BaseApi {
  async getUsers() {
    const response = await this.get('/users');
    return this.getJson(response);
  }
}
```

2. Create a test object in `tests/api/`:

```typescript
import { APITestInterface } from '../utils/utils';
import { UserApi } from '../../apis/userApi';

export const userAPITests: APITestInterface = {
  tests: {
    '@smoke get users': async ({ request }) => {
      const userApi = new UserApi(request);
      const users = await userApi.getUsers();
      expect(users.length).toBeGreaterThan(0);
    },
  },
};
```

## Running Tests

### All Tests
```bash
npm test
```

### UI Tests Only
```bash
npm run test:ui
```

### API Tests Only
```bash
npm run test:api
```

### Headed Mode (with browser UI)
```bash
npm run test:headed
```

### Debug Mode
```bash
npm run test:debug
```

### View Reports
```bash
npm run report
```

## Test Tags

Use tags to categorize tests:
- `@smoke`: Critical functionality tests
- `@regression`: Full regression tests
- `@wip`: Work in progress

Run tests with specific tags:
```bash
npx playwright test --grep "@smoke"
```

## Best Practices

1. **Page Objects**: Keep UI logic in page objects, tests should focus on what to test, not how
2. **Test Data**: Use separate data files for test inputs
3. **Assertions**: Use descriptive assertion messages
4. **Selectors**: Prefer data-testid or semantic selectors over CSS/XPath
5. **Parallel Execution**: Tests are designed to run in parallel
6. **Environment Variables**: Use environment configs for different test environments

## CI/CD Integration

Add to your CI pipeline:

```yaml
- name: Run Tests
  run: |
    npm ci
    npm run install-browsers
    npm test
```

## Contributing

1. Follow the established patterns for page objects and test objects
2. Add appropriate tags to tests
3. Update documentation for new features
4. Ensure tests pass in CI before merging