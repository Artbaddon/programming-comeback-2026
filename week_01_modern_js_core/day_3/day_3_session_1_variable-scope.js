// 1. Swap two variables
let a = "A";
let b = "B";
let c = b;
b = a
a = c
// 2. Declare `let`, `const`, `var` and explain scope
let var1 = "Hello";
const WHITE_COLOR = "#FFF"
var text = "Bye";
//In this case scope is what i can acess in the point that im right now so with let and const it can be a function scope, a block scope, or a global scope, but with var is always global.
// 3. Sum two variables
let num1 = 1;
let num2 = 2;
let sum = num1 + num2
// 4. Find max of three variables

{
    let var1 = 1;
    let var2 = 2;
    let var3 = 3

    function findMaxOfArr(arr) {
        let maxNumber = 0;
        for (const num of arr) {
            if (num > maxNumber) maxNumber = num
        }

        return maxNumber
    }

     console.log(findMaxOfArr([var1,var2,var3]))
}
// 6. Increment and decrement a variable

let counterVar = 0;
counterVar++;
counterVar--
// 7. Check variable type (`typeof`)
let num = 12.5
console.log(typeof num)
// 8. Concatenate variables into a sentence
let name = "Victor"
let phrase = "His name is: " + name;
// 9. Use destructuring to assign variables
let { x, z } = { a: "b", b: "b" }
// 10. Use a variable as a counter in a loop
let counter = 0;
while (counter < 4) {
    counter++
}
