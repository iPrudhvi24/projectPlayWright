"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomState = randomState;
var arrays_1 = require("./arrays");
function randomState(country) {
    var states = {
        usa: ['alabama', 'alaska', 'arizona', 'texas', 'california'],
    };
    return (0, arrays_1.randomValueFromArray)(states[country.toLowerCase()]);
}
