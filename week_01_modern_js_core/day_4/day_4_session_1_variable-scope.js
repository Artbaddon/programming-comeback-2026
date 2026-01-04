{
    /* - Global Scope: 
        - Is declared outside any function/block.
        - Slowest look up.
        - Highest collition risk(Two variables are named the same).
        - Use rarely
    */
    let a = 1;
    function f() {
        console.log(a)
    }
    //Here we declared a variable in global scope called a and assigned the number 1
    // Then we use it inside f function and we can use it because is global.

    /* - Function Scope: 
        - Created when a function runs.
        - variables live only during function execution.
        - Each call creates a new scope.
        - used for ecanpsulation and reuse.
    */
    function sum() {
        let number1 = 1;
    }
    // Here we create a function called sum and it has a varaible declaration, so that variable will only exisst during execution of the function.

    /* - Block Scope(let/const): 
        - Created by {} in: if, for, while, try.
        - Standalone blocks.
        - Safest scope.
        - prevents accidental reuse.
        - var does not respect block scope.
        - default choice.
    */
    if (true) {
        let b = 2;
    }

    //Scope chain example
    let x = 1;

    function outer() {
        let y = 2;

        function inner() {
            let z = 3;
            console.log(x, y, z);
        }

        inner();
    }

    outer();
    /* Look Up order inside inner:
        z = found
        y = not in inner scope, look up for parent scope, found.
        x = globalscope
    */
}
// Scope Exercises
//1. Block vs outer scope
let x = 1;

if (true) {
    let x = 2;
    console.log(x); // x = 2 because it search first in the inner lexical enviroment
}

console.log(x); // x = 1 because is global and is the only variable accesible in this case
//2. Function scope lookup
let a = 10;

function test() {
  console.log(a);// reference error because lexical enviroment has the bind of a but is uninitialized
  let a = 5;
}

test();
//3. Scope chain
let n = 1;

function outer() {
  let n = 2;

  function inner() {
    console.log(n);// n = 2 because the lexical enviroment will look up for the first variable in the outer parent scope so the n is the closest one
  }

  inner();
}

outer();
//4. Loop + closure
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);// 0, 1, 2
  }, 0);
}

//5. Shadowing

let value = "global";

function demo(value) {
  console.log(value);// local because the scope of the args is inside the same lexical enviroment
}

demo("local");
