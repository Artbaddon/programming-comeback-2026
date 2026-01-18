//Find Index Exercises
// Users

const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Luis" },
    { id: 3, name: "Sofia" }
];
// Find the index of the user with id === 2
const user = users.findIndex(ele => ele.id === 2);
console.log(user)

// Shopping cart

const cart = [
    { product: "Milk", qty: 1 },
    { product: "Bread", qty: 2 }
];
// Find the index of "Bread"

const bread = cart.findIndex(item => item.product.toLowerCase() === "milk")
// Numbers

const numbers = [4, 7, 9, 12, 15];
// Find the index of the first number divisible by 3 and greater than 10
const num = numbers.findIndex(num => num % 3 === 0 && num > 10)

// Validation

const fields = [
    { name: "email", valid: true },
    { name: "password", valid: false },
    { name: "username", valid: true }
];
// Find the index of the first invalid field

const firsInvalid = fields.findIndex(ele => !ele.valid)
// State update

const tasks = [
    { id: 101, done: false },
    { id: 102, done: false }
];
// Find the index of the task with id === 102 and mark it as done
const indexOfTask = tasks.findIndex(task => task.id === 102);
tasks[indexOfTask].done = true