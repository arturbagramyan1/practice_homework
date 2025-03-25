// . Write a function which parses string integers. If it's not possible to parse, then add null

// arseInteger(["1", "2", "34"]); // [1, 2, 34];
// parseInteger(["1", "px", "2323"]); // [1, null, 2323];


function parseInteger(arr) {
    return arr.map((el) => { return isNaN(+el) ? null : parseInt(el) });
}


console.log(parseInteger(["1", "2", "34"]));
console.log(parseInteger(["1", "px", "2323"]));