"use strict";
// 1. City Directory
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignment4 = exports.assignment3 = exports.checkIsbn = exports.clearStorage = exports.displayData = exports.addData = void 0;
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
const clearStorage = () => localStorage.clear();
exports.clearStorage = clearStorage;
var render = (data) => {
    var app = document.getElementById('list-view');
    var cityHTMLString = '<ul>' +
        data.map((cityDirectory) => {
            return '<li>' +
                '<strong>Title: </strong>' + cityDirectory.city + '<br/>' +
                '<strong>Subtitle: </strong>' + cityDirectory.country + '<br/>' +
                '<strong>Author: </strong>' + cityDirectory.population + '<br/>' +
                '</li>';
        }).join('');
    +'</ul>';
    app.innerHTML = cityHTMLString;
};
render(cityList);
var handleSearch = (event) => {
    event.preventDefault();
    // Get the search terms from the input field
    var searchTerm = event.target.elements['search'].value;
    // Tokenize the search terms and remove empty spaces
    var tokens = searchTerm
        .toLowerCase()
        .split(' ')
        .filter((token) => {
        return token.trim() !== '';
    });
    if (tokens.length) {
        //  Create a regular expression of all the search terms
        var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
        var filteredList = cityList.filter((cityDirectory) => {
            // Create a string of all object values
            var cityString = '';
            for (var key in cityDirectory) {
                if (cityDirectory.hasOwnProperty(key) && cityDirectory[key] !== '') {
                    cityString += cityDirectory[key].toString().toLowerCase().trim() + ' ';
                }
            }
            // Return book objects where a match with the search regex if found
            return cityString.match(searchTermRegex);
        });
        // Render the search results
        render(filteredList);
    }
};
document.addEventListener('submit', handleSearch);
document.addEventListener('reset', function (event) {
    event.preventDefault();
    render(cityList);
});
// 2. ISBN – 10 Validation
const checkIsbn = (isbn) => {
    if (isbn.length != 10)
        return console.log(false);
    // Computing weighted sum of
    // first 9 digits
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        let digit = isbn[i] - 0;
        if (0 > digit || 9 < digit)
            return console.log(false);
        sum += (digit * (10 - i));
    }
    // Checking last digit.
    let last = isbn[9];
    if (last != 'X' && (last < '0' || last > '9'))
        return console.log(false);
    // If last digit is 'X', add 10
    // to sum, else add its value.
    sum += ((last == 'X') ? 10 : (last - 0));
    // Return true if weighted sum
    // of digits is divisible by 11.
    if (sum % 11 == 0) {
        return console.log(true);
    }
    else {
        return console.log(false);
    }
};
exports.checkIsbn = checkIsbn;
(0, exports.checkIsbn)("111222333"); //false
// 3. Change it up!
const assignment3 = (str) => {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (122 == str.charCodeAt(i)) {
            result += "a";
        }
        else if (90 == str.charCodeAt(i)) {
            result += "A";
        }
        else if ((65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 89) ||
            (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 121)) {
            result += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        else {
            result += str.charAt(i);
        }
    }
    return result.split('').reduce((a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
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
