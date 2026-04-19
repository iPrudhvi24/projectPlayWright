"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomValueFromArray = randomValueFromArray;
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
