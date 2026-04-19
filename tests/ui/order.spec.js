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
var test_1 = require("@playwright/test");
var login_page_1 = require("@pages/ui/login.page");
var states_helper_1 = require("@helpers/states.helper");
test_1.default.use({ headless: true });
test_1.default.describe('place an order for the product', function () {
    (0, test_1.default)('book a product', function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, test_1.default.step('login to the application', function () { return __awaiter(void 0, void 0, void 0, function () {
                        var email, password, loginPage;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    email = 'random@practicesoftwaretesting.com';
                                    password = 'Prudhvi@1224';
                                    loginPage = new login_page_1.LoginPage(page);
                                    return [4 /*yield*/, loginPage.login(email, password)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, test_1.default.step('go to the home screen', function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, page.getByRole('link', { name: 'Home' }).click()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, test_1.default.step('search for the item', function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, page.getByTestId('search-query').focus()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, page.getByTestId('search-query').pressSequentially('pliers')];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, page.getByRole('button', { name: 'Search' }).press('Enter')];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, test_1.default.step('get the product from the filtered products list', function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, page
                                            .getByTestId('search_completed')
                                            .filter({ hasText: 'pliers' })
                                            .click()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 4:
                    _c.sent();
                    return [4 /*yield*/, test_1.default.step('page should go to the products page', function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                (0, test_1.expect)(page.getByAltText('Pliers')).toBeTruthy();
                                return [2 /*return*/];
                            });
                        }); })];
                case 5:
                    _c.sent();
                    return [4 /*yield*/, test_1.default.step('click on add to cart', function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, page.getByRole('button', { name: 'Add to cart' }).click()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 6:
                    _c.sent();
                    return [4 /*yield*/, test_1.default.step('assertion', function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, (0, test_1.expect)(page.getByRole('alert', { name: 'Product added to shopping cart' })).toBeVisible()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, (0, test_1.expect)(page.getByTestId('nav-cart').getByTestId('cart-quantity')).toHaveText('1')];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, test_1.default.step('go to kart', function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        page.getByTestId('nav-cart').click();
                                        return [4 /*yield*/, page.getByRole('button', { name: 'Proceed to checkout' }).click()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 8:
                    _c.sent();
                    return [4 /*yield*/, test_1.default.step('perform login action', function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, page
                                            .getByTestId('email')
                                            .pressSequentially('admin@practicesoftwaretesting.com')];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, page.getByTestId('password').pressSequentially('welcome01')];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, page.getByRole('button', { name: 'Login' }).click()];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, page.getByRole('button', { name: 'Proceed to checkout' }).click()];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 9:
                    _c.sent();
                    return [4 /*yield*/, test_1.default.step('Fill your delivery address...', function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, page.getByPlaceholder('Your street').fill('ramula vaari veedhi')];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, page.getByPlaceholder('Your city').fill('chittor')];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, page.getByPlaceholder('state').fill((0, states_helper_1.randomState)('USA'))];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, page.getByPlaceholder('Your country').pressSequentially('India')];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, page
                                                .getByPlaceholder('Your Postcode *')
                                                .pressSequentially('517127')];
                                    case 5:
                                        _a.sent();
                                        return [4 /*yield*/, page.getByRole('button', { name: 'Proceed to checkout' }).click()];
                                    case 6:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 10:
                    _c.sent();
                    return [4 /*yield*/, test_1.default.step('Making payment', function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, page.getByTestId('payment-method').selectOption({ index: 2 })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, page.getByRole('button', { name: 'confirm' }).click()];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, (0, test_1.expect)(page.getByTestId('payment-success-message')).toHaveText('Payment was successful')];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 11:
                    _c.sent();
                    return [4 /*yield*/, test_1.default.step('Terminate the page and the instances', function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, page.close()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 12:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
