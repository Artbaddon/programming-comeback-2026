// Write a function that clones an object and overrides one property using spread, without mutating the original.
function overrideProperty(obj) {
    return {
        ...obj,
        [key]: value
    }
}

// Create a function sumExceptFirst(...nums) that sums all numbers except the first one.

function sumAllButOne(...args) {
    let [, ...rest] = args;
    let total = 0;
    for (let num of rest) total += num
    return total;
}
//Destructure an object to extract one property and gather the remaining properties into a new object.
function extractProperty(obj, property) {

    let { [property]: value, ...rest } = obj;


    console.log(rest)
}

// Write a function maxOfTail(first, ...rest) that ignores first and returns the max of the remaining values.
function maxOfTail(_, ...rest) {
    return rest.length ? Math.max(...rest) : undefined;
}

// Use spread to insert elements of one array into the middle of another array.

function mergeIntoMiddle(baseArr, secondArr) {
    let middle = Math.floor(baseArr.length / 2);
    let firstPart = baseArr.slice(0, middle);
    let secondPArt = baseArr.slice(middle);

    return [...firstPart, ...secondArr, ...secondPArt];
}

// Write a function that takes a variable number of arrays and returns a flattened array using only rest and spread (no flat).

function flatNArrays(...arrays) {
    const flattenedArr = [];
    for (const arr of arrays) {
        flattenedArr.push(...arr);
    }
    return flattenedArr;
}