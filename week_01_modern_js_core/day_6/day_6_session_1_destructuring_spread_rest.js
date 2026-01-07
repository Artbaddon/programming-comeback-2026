
//Exercises
// 1. Extract the first two elements from `[1, 2, 3, 4, 5]` into variables.
let [numberOne, numberTwo] = [1, 2, 3, 4, 5];
// 2. Skip the second element: get first and third from `["a", "b", "c"]`.

let [letterA, , letterC] = ["a", "b", "c"];
// 3. Use default values: destructure `[1]` but provide default for second element.
let [firstNum, secondNum = 0] = [1];
// 4. Use rest to get first element and remaining elements separately.
let [firstElement, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];

