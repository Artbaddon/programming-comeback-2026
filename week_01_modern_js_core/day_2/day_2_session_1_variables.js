
const a = 10;
a = 20;
//const binding cannot be reassigned
const obj = { x: 1 };
obj.x = 2;

//The binding is fixed but the value of the obj itself can be changed, we cannot reassign obj but change the value inside

let x = 5;// 5
let y = x; // 5
x = 10;
console.log(y);

//Y is = 5 because on the first we bind the name x to the value 5 and then we do the same but binding the variable y with the the value of x in that moment, so even if we reassign x, the value was the one in that speficic moment so is still 5

// 1. Declare a variable with `var` inside an `if` block. Can you access it outside? Try the same with `let`.

if (true) {
    var pepe = "hola";
}
// you can still access it because it doesnt have internal scope os is always global
alert(pepe);
// 2. Try to reassign a `const` variable. What happens? Now try to modify a property of a `const` object.
const reassign = "Hello"
reassign = "goodbye"
//const binding cannot be reassigned