"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignment4 = void 0;
// 4. Moving Zeroes to the End
const assignment4 = () => {
    var initialArray = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
    var zero = [];
    var notZero = [];
    for (let i = 0; i < initialArray.length; i++) {
        if (initialArray[i] === 0) {
            zero.push(initialArray[i]);
        }
        else {
            notZero.push(initialArray[i]);
        }
    }
    console.log(notZero.concat(zero));
};
exports.assignment4 = assignment4;
(0, exports.assignment4)();
