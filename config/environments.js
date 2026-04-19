"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentEnvironment = exports.environments = void 0;
exports.environments = {
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
var getCurrentEnvironment = function () {
    var env = process.env.TEST_ENV || 'dev';
    var envConfig = exports.environments[env];
    if (!envConfig) {
        throw new Error("Invalid TEST_ENV: \"".concat(env, "\". Allowed values are: ").concat(Object.keys(exports.environments).join(', ')));
    }
    return envConfig;
};
exports.getCurrentEnvironment = getCurrentEnvironment;
