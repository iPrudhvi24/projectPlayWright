"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testData = void 0;
exports.testData = {
    users: {
        validUser: {
            username: process.env.TEST_USER_NAME || 'testuser',
            password: process.env.TEST_USER_PASS || 'password123',
            email: process.env.TEST_USER_EMAIL || 'test@example.com'
        },
        invalidUser: {
            username: 'invalid',
            password: 'wrong',
            email: 'invalid@example.com'
        }
    },
    api: {
        userPayload: {
            name: 'Test User',
            username: 'testuser',
            email: 'test@example.com'
        }
    }
};
