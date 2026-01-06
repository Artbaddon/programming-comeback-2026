//1. Rewrite this functions
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     function () { alert("You agreed."); },
//     function () { alert("You canceled the execution."); }
// );

let ask = (question, yes, no) => confirm(question) ? yes() : no()
ask("Do you agree?", () => alert("You agreed"), () => alert("You canceled the execution."))



// function add(a, b) { return a + b; }
// function square(x) { return x * x; }
// function greet() { return "Hello!"; }

let add = (a, b) => a + b;
let square = x => x * x;
let greet = () => "Hello";

// 2. Create an arrow function that returns an object `{ name: "John", age: 25 }` implicitly.
let createPersonObj = (name, age) => ({ name, age })

// 3. Create a one-liner that checks if a number is even.
let numberIsEven = (number) => number % 2 ? "Is Not even" : "Is even"