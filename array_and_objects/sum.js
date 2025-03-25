// . Given an array, return the sum of numbers that are 18 or over.

// const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
// // 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347

function sumOfAdults(arr) {
    return arr.filter(num => num >= 18).reduce((sum, num) => sum + num, 0);
}


const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
console.log(sumOfAdults(arr)); 