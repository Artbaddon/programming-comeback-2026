
// 1. Declare a variable with `var` inside an `if` block. Can you access it outside? Try the same with `let`.
if (true){
    var var1 = "Hello"
}
console.log(var1);
if (true){
    let var1 = "Hello"
}
console.log(var1);
// 2. Try to reassign a `const` variable. What happens? Now try to modify a property of a `const` object.
const gravity = 9.8
gravity = 10.7
// 3. Write code that demonstrates hoisting: call a function before its declaration, then try with `var` vs `let`.