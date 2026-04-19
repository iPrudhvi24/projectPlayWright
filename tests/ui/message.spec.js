"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var registerUser_data_1 = require("@dataFactory/registerUser.data");
var serviceContact_data_1 = require("@dataFactory/serviceContact.data");
var login_page_1 = require("@pages/ui/login.page");
var test_1 = require("@playwright/test");
var fs_1 = require("fs");
test_1.default.use({ headless: false });
test_1.default.describe('customer message', function () {
    (0, test_1.default)('validate cutomer issue', function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var name, email, message, newUser, loginPage, response;
        var _c, _d;
        var page = _b.page, context = _b.context;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    name = 'prudhvi c';
                    email = 'prudhvi@gmail.com';
                    message = 'Again am seeing the same payment issue, please look into it asap and resolve it. This issue is persisting frequently, Thanks!';
                    return [4 /*yield*/, (0, registerUser_data_1.default)('@gmail.com', 'welcome01')];
                case 1:
                    newUser = _e.sent();
                    loginPage = new login_page_1.LoginPage(page);
                    return [4 /*yield*/, loginPage.login(newUser.email, newUser.password)];
                case 2:
                    _e.sent();
                    return [4 /*yield*/, context.storageState({ path: '../../auth/message.json' })];
                case 3:
                    _e.sent();
                    return [4 /*yield*/, JSON.parse((0, fs_1.readFileSync)('../../auth/message.json', 'utf-8'))];
                case 4:
                    response = _e.sent();
                    // make an api call for accepting the issue from the user
                    return [4 /*yield*/, (0, serviceContact_data_1.default)(name, newUser.email, message, String((_d = (_c = response === null || response === void 0 ? void 0 : response.cookies) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.value))];
                case 5:
                    // make an api call for accepting the issue from the user
                    _e.sent();
                    loginPage = new login_page_1.LoginPage(page);
                    return [4 /*yield*/, loginPage.login('admin@practicesoftwaretesting.com', 'welcome01')];
                case 6:
                    _e.sent();
                    return [4 /*yield*/, page.getByRole('button', { name: /John Doe/i }).click()];
                case 7:
                    _e.sent();
                    return [4 /*yield*/, page.getByRole('menuitem', { name: 'Messages' }).click()];
                case 8:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
