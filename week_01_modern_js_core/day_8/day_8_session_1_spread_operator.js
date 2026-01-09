
//Rest parametrs for sum all n numbers

function sumAll(...args) {//..args, all the arguments passed here will become an array called args
    let sum = 0;

    for (let arg of args) sum += arg;
    return sum

}

// 1. Create a copy of an array using spread.

let arr1 = [1, 2, 3]
let copyOfArr = [...arr1];

// 2. Merge two arrays: `[1, 2]` and `[3, 4]` into `[1, 2, 3, 4]`.

let arrN1 = [1, 2];
let arrN2 = [3, 4];
let mergedArr = [...arrN1, arrN2]
// 3. Clone an object and override one property.

const person = {
    name: "Pedro",
    age: "23"
}

const person2 = { ...person };

person2.name = "Carlos";

console.log(person2.name)
// 4. Use spread to pass array elements as function arguments: `Math.max(...numbers)`.

alert(Math.max(...arrN1, ...arrN2));

// 5. Demonstrate shallow copy problem with nested objects.

const car = {
    brand: "Mercedes Benz",
    model: "Class S",
    motor: {
        hp: "500",
        capacity: "50gl",
        cylinders: 12

    }

}

const copiedCar = { ...car };

car.motor.hp = "600";

console.log(copiedCar)
// 6. Create a function that takes unlimited numbers and returns their mult.

let multAll = (...args) => {
    let mult = 0;
    for (let arg of args) {
        mult *= arg;
    }
    return mult
}
console.log(multAll(1, 2, 3, 1, 12, 3, 1))
// 7. Create a function where first param is required, rest are optional: `greet(greeting, ...names)`.
function greet(greeting, ...names) {
    alert(`${greeting}`);
    for (let name of names) {
        alert(`${greeting}, ${name}`)
    }
}

greet("HOLA AMIGO", "VIctor", "Carlos")

// 8. Build a `pick` function: `pick(obj, ...keys)` returns new object with only those keys.
function pick(obj, ...keys) {
  const res = {};
  for (const key of keys) {
    if (key in obj) res[key] = obj[key];
  }
  return res;
}
// 9. Build a `merge` function that merges unlimited objects.
function mergeNObjects(...nOjb) {
    const mergedObj = {}
    for (let item of nOjb) {
        for (let [key, value] of Object.entries(item))
            mergedObj[key] = value
    }
    return mergedObj



}