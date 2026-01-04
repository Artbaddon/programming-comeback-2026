//1. Basic closure
function makeFn() {
  let x = 1;
  return function () {
    console.log(x);
  };
}

const f = makeFn();
//Here we assign the returned function from makeFn to f.
f();
//Here we use f() that will show us always x

//3. Multiple closures, same parent
function outer() {
  let v = 10;
  return [
    () => console.log(v),
    () => { v += 5; }
  ];
}

const [read, add] = outer();
// Here we assign the returned array of functions from outer()
// and destructure it so read gets the first function and add the second one.

add();
// Here we call the add function.
// It uses its [[Environment]] to access v and adds 5 to it.
read();
// Here we call the read function.
// It accesses the same [[Environment]] and logs the current value of v.

//5. Closure after outer finished

function factory(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = factory(5);
// Here we call factory, creating a lexical environment where x = 5.
// The returned function captures that environment and is assigned to add5.
console.log(add5(3));
// Here a new call lexical environment is created for the inner function with y = 3.
// x is not found there, so it is taken from the captured [[Environment]].
// 5 + 3 → 8 is returned.