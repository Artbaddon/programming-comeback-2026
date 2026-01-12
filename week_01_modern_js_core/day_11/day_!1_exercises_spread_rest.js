let nested = [1, [2, 3], [4, 5]];
// Create a new array [0, 1, 2, 3, 4, 5, 6] using spread

let [first, second, third] = nested;

let newArr = [...first, ...second, ...third, 6]