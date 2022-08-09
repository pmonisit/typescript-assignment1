"use strict";
// 1. City Directory
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignment4 = exports.assignment3 = exports.checkIsbn = exports.displayData = exports.addData = void 0;
var cityList = [];
const addData = (data) => {
    cityList.push(data);
    (0, exports.displayData)();
    localStorage.setItem("Data", JSON.stringify(cityList));
};
exports.addData = addData;
const displayData = () => {
    let list = document.getElementById("list-view");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    cityList.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayData = displayData;
// 2. ISBN – 10 Validation
const checkIsbn = (isbn) => {
    if (isbn.length != 10)
        return console.log(false);
    let totalSum = 0;
    for (let i = 0; i < 9; i++) {
        let digit = isbn[i] - 0;
        if (0 > digit || 9 < digit)
            return console.log(false);
        totalSum += (digit * (10 - i));
    }
    let lastDigit = isbn[9];
    if (lastDigit != 'X' && (lastDigit < '0' || lastDigit > '9'))
        return console.log(false);
    totalSum += ((lastDigit == 'X') ? 10 : (lastDigit - 0));
    if (totalSum % 11 == 0) {
        return console.log(true);
    }
    else {
        return console.log(false);
    }
};
exports.checkIsbn = checkIsbn;
(0, exports.checkIsbn)("1112223339"); //true
(0, exports.checkIsbn)("111222333"); //false
// 3. Change it up!
const assignment3 = (inputString) => {
    var modifiedString = "";
    for (var i = 0; i < inputString.length; i++) {
        if ((65 <= inputString.charCodeAt(i) && inputString.charCodeAt(i) <= 90) ||
            (97 <= inputString.charCodeAt(i) && inputString.charCodeAt(i) <= 122)) {
            modifiedString += String.fromCharCode(inputString.charCodeAt(i) + 1);
        }
        else {
            modifiedString += inputString.charAt(i);
        }
    }
    return modifiedString.split('').reduce((curr, next) => curr + (/[aeiou]/i.test(next) ? next.toUpperCase() : next.toLowerCase()), "");
};
exports.assignment3 = assignment3;
console.log((0, exports.assignment3)("Cat30")); // Output is dbU30
// 4. Moving Zeroes to the End
const assignment4 = (initialArray) => {
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
(0, exports.assignment4)([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // Output is [false,1,1,2,1,3,"a",0,"0]
