// . Create a function that takes an array of numbers arr, a string str and return an array of numbers as
// per the following rules:

// - "Asc" returns a sorted array in ascending order.
// - "Desc" returns a sorted array in descending order.


function sortBy(arr, str) {
    return str === "Asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}

const arr = [4, 3, 2, 1];
console.log(sortBy(arr, "Asc"));
console.log(sortBy(arr, "Desc"));