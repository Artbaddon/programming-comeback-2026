// ## SECTION 1: Variables & Data Types (Day 1)

// ### Exercise 1.1: Type Identification
// ```javascript
// // Declare variables of each primitive type (string, number, boolean, null, undefined, symbol, bigint)
// // Use typeof to verify each one
// // Your code here:
const text = "HELLO WORLD";
const number = 0;
const bool = true;
let nulll = null
let undefinedV = undefined;
const mySimbol = Symbol("victor")
const big1 = 123456789012345678901234567890n;

const typesArr = [text, number, bool, nulll, mySimbol, big1, undefinedV];

for (const type of typesArr) {
    console.log(typeof type)
}


// ```

// ### Exercise 1.2: Type Coercion Prediction
// ```javascript
// // Predict the output WITHOUT running the code. Write your prediction, then verify:
// console.log("5" + 3);        // Prediction: ? 53
// console.log("5" - 3);        // Prediction: ? 2
// console.log("5" == 5);       // Prediction: ? true
// console.log("5" === 5);      // Prediction: ? false
// console.log(null == undefined); // Prediction: ? true
// ```

// ### Exercise 1.3: Template Literals Advanced
// ```javascript
// // Create a template literal that:
// // - Spans multiple lines
// // - Includes a user object with properties: name, age, email
// // - Displays: "User: [name], Age: [age], Email: [email]"
// // - Calculates and displays: "Born in [birth year]"
// // Your code here:

const user = { name: "Bert", age: 25, email: "email@gmail.com" }
const template = `User: ${user.name},
    Age: ${user.age}, Email: ${user.email},
    Born in ${2026 - user.age}`

// ```

// ---

// ## SECTION 2: Arrow Functions (Day 2)

// ### Exercise 2.1: Arrow Function Conversions
// ```javascript
// // Convert these regular functions to arrow functions:

// // 1.
// function add(a, b) {
//   return a + b;
// }
const add = (a, b) => a + b;
// // 2.
// function square(x) {
//   return x * x;
// }
const square = (x) => x * x;
// // 3. (Single parameter - can omit parentheses)
// function double(num) {
//   return num * 2;
// }

const double = (num) => num * 2;
// // 4. (No parameters)
// function greet() {
//   return "Hello!";
// }
const greet = () => "Hello"
// // Your converted arrow functions:

// ```

// ### Exercise 2.2: Object Return Trick
// ```javascript
// // Create arrow functions that implicitly return objects:

// // 1. A function that returns { name: "John", age: 25 }
// const createPerson = /* your arrow function */;
const createPerson = () => ({ name: "Jhonm", age: 25 })
// // 2. A function that takes (x, y) and returns { x, y }
// const createCoords = /* your arrow function */;

const createCoords = (x, y) => ({ x, y })
// // Your code here:

// ```

// ### Exercise 2.3: this Binding Investigation
// ```javascript
// // Create an object with a method. Use a regular function.
// // Log 'this' to see what it refers to.
// // Then change the method to an arrow function.
// // What changes? Why?
// 
// const myObject = {
//   // Your code here
// };
const myObject = {
    name: "VENEZUELA",
    method: function () {
        return this.name
    }
}

// // Explanation of what changed and why:

// What changed was the lexical scope, because when you use a regular function expression as a method, the objject gbefore the dot becomes the execution context so in this case this will be the object, but in an arrow function we dont have a this, it takes the one from the outer scope thats why it doesnt work

// ---

// ## SECTION 3: Destructuring & Spread/Rest (Day 3)

// ### Exercise 3.1: Array Destructuring
// ```javascript
// // 1. Extract first two elements from [1, 2, 3, 4, 5]
const arr = [1, 2, 3, 4, 5];
// // Your destructuring:
const [first, two] = arr;

// // 2. Skip the second element: get first and third from ["a", "b", "c"]
const letters = ["a", "b", "c"];
// // Your destructuring:
const [one, _, third] = letters;
// // 3. Use rest to get first element and remaining elements separately
const numbers = [10, 20, 30, 40];
// // Your destructuring:
const [firstOne, ...rest] = numbers;
// ```

// ### Exercise 3.2: Object Destructuring
// ```javascript
// // 1. Extract name and age from a user object
const user1 = { name: "Alice", age: 25, city: "NYC" };
// // Your destructuring:
const { name, age } = user1;
// // 2. Extract name but rename it to userName
// // Your destructuring:
const { name: userName } = user1;
// // 3. Destructure with default value for missing property
const product = { name: "Laptop", price: 1000 };
// // Extract 'discount' with default value of 0
// // Your destructuring:
const { name: productName, price, discount = 0 } = product;
// // 4. Nested destructuring - extract city from deep object
const person = {
    id: 1,
    info: {
        name: "Bob",
        address: {
            city: "LA",
            zip: "90001"
        }
    }
};
// // Your destructuring to get city:
const { info: { address: { city } } } = person

// ### Exercise 3.3: Spread & Rest Operators
// ```javascript
// // 1. Create a copy of an array using spread
const original = [1, 2, 3];
// // Your code:
const copy = [...original];
// // 2. Merge two arrays: [1, 2] and [3, 4] into [1, 2, 3, 4]
// // Your code:
const arr1 = [1, 2];
const arr2 = [3, 4]
const twoArrs = [...arr1, ...arr2]
// // 3. Clone an object and override one property
const settings = { theme: "dark", fontSize: 14, language: "en" };
// // Your code (return new object with fontSize changed to 16):
const clonnedSettings = { ...settings };
clonnedSettings.fontSize = 16;
// // 4. Create a function that takes unlimited numbers and returns their sum
// // Your code:

// ```
function sumX(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

// ---

// ## SECTION 4: Array Methods - Part 1 (Day 4)

// ### Exercise 4.1: map() Practice
// ```javascript
// const numbers = [1, 2, 3, 4, 5];
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// // 1. Double all numbers
// // Your code:

const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers2.map((ele) => ele * 2)

// // 2. Get array of just user names
// // Your code:
const names = users.map((obj) => obj.name)


// // 3. Create sentences: "Alice is 25 years old"
// // Your code:
const sentences = users.map((obj) => `${obj.name} is ${obj.age} years old`)

// ```

// ### Exercise 4.2: filter() Practice
// ```javascript
const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true },
    { name: "Watch", price: 200, inStock: true }
];

// // 1. Get only products that are in stock
// // Your code:
const onlyStock = products.filter((product) => product.inStock)

// // 2. Get products under $400
// // Your code:
const cheapProducts = products.filter((product) => product.pr)
// // 3. Get products that are in stock AND under $400
// // Your code:
const stockUnder = products.filter((product) => product.inStock && product.price < 400)
// // 4. Chain filter + map to get names of in-stock products
// // Your code:
const namesInStock = product.filter((product) => product.inStock).map(product.name)
// ```


// ### Exercise 4.3: find() and findIndex()
// ```javascript
const users2 = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "user" },
    { id: 4, name: "Diana", role: "admin" }
];

// // 1. Find user with id 3
// // Your code:
const user3 = users2.find((user) => user.id === 3)
// // 2. Find the first admin user
// // Your code:
const admin = users2.find((user) => user.role === "admin")
// // 3. Find the index of Bob
// // Your code:
const bobIndex = users2.findIndex((user) => user.name.toLowerCase() === "bob")
// // 4. Create a getUserById(id) function using find()
// // Your code:
function getUserById(id, users) {
    return users.find((user) => user.id === id)

}
// ```

// ---

// ## SECTION 5: Array Methods - Part 2 (Day 4-5)

// ### Exercise 5.1: reduce() Fundamentals
// ```javascript
const numbers3 = [1, 2, 3, 4, 5];

// // 1. Sum all numbers using reduce
// // Your code:
const sumed = numbers3.reduce((acc, curr) => acc + curr)

// // 2. Find the maximum number using reduce
// // Your code:
const maxNum = numbers3.reduce((acc, curr) => acc > curr ? acc : curr, -Infinity)
// // 3. Flatten an array: [[1,2], [3,4], [5]] into [1,2,3,4,5]
// // Your code:
const initalArr = [[1, 2], [3, 4], [5]]
const flattened = initalArr.reduce((acc, curr) => acc.concat(curr), []);
// 

// ### Exercise 5.2: reduce() for Aggregation
// ```javascript
const orders2 = [
    { product: "Laptop", amount: 1000 },
    { product: "Phone", amount: 500 },
    { product: "Phone", amount: 500 },
    { product: "Tablet", amount: 300 }
];

// // 1. Calculate total of all order amounts
// // Your code:
const totalOfAll = orders2.reduce((acc, curr) => {

    acc["total"] += curr.amount

    return acc
}, { total: 0 })
// // 2. Count occurrences: { Laptop: 1, Phone: 2, Tablet: 1 }
// // Your code:
const occurrences = orders2.reduce((acc, curr) => {
    acc[curr.product] = acc[curr.product] || 0;
    acc[curr.product]++

    return acc
}, {})

// // 3. Group orders by product name
// // Your code:
const groupedOrder = orders2.reduce((acc, curr) => {
    acc[curr.product] = acc[curr.product] || [];
    acc[curr.product].push({ amount: curr.amount })
    return acc;
}, {})
// ```

// ### Exercise 5.3: some(), every(), includes()
// ```javascript
const users4 = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 17, active: false },
    { name: "Charlie", age: 30, active: true }
];

// // 1. Check if ANY user is under 18
// // Your code:
const anyUnder = users4.any((ele) => ele.age < 18)
// // 2. Check if ALL users are active
// // Your code:
const activeUsers = users4.every((ele) => ele.active)
// // 3. Check if ALL users are over 15
// // Your code:
const allOver = users4.every((ele) => ele.age > 15)
// // 4. Check if array [1, 2, 3] includes 2
// // Your code:
const arr3 = [1, 2, 3];
const includes2 = arr3.includes((ele) => ele === 2)
// ```

// ---

// ## SECTION 6: Closures & Scope (Day 6)

// ### Exercise 6.1: Closure Basics
// ```javascript
// // 1. Create a counter function that returns an inner function
// // The inner function should increment and return count
// // count should NOT be directly accessible
// // Example use: const counter = createCounter(); counter(); // 1, counter(); // 2
// // Your code:
function createCounter() {
    let count = 0;
    return function () {

        count++;
        return count


    }
}
const counter = createCounter();
count()
// // 2. Create a createIdGenerator(prefix) function
// // Returns a function that generates unique IDs
// // Example: const userIds = createIdGenerator("user");
// //          userIds(); // "user_1", userIds(); // "user_2"
// // Your code:
function createIdGenerator(prefix) {
    let id = 0;
    return function () {
        id++;
        return `${prefix}_${id}`
    }

}

// ```

// ### Exercise 6.2: Practical Closure Patterns
// ```javascript
// // 1. Create a memoize(fn) function that caches results
// // If called with same arguments, return cached result
// // Example:
// //   const add = memoize((a, b) => a + b);
// //   add(2, 3); // Computed: 5
// //   add(2, 3); // Cached: 5
// // Your code:

function data(fn) {
    const interceptor = (...args) => {
        console.log(args)
        return fn(...args)
    }
}
function memoize(fn) {
    const cachedArgs = {
        arguments: [],
        result: []
    }
    return function (...args) {
        const stringArgs = args.toString()
        const idx = cachedArgs.arguments.findIndex(item => item === stringArgs);
        if (idx = -1) {
            console.log("CACHED!")
            return cachedArgs.result[idx];
        } else {
            const result = fn(...args);

            cachedArgs.arguments.push(stringArgs);
            cachedArgs.result.push(result)

            return result
        }


    }
}


// // 2. Create a once(fn) function that only allows fn to run once
// // Example:
// //   const init = once(() => console.log("Initialized!"));
// //   init(); // "Initialized!"
// //   init(); // Nothing happens
// // Your code:
function once(fn) {

    let once = false;
    return function () {
        if (!once) {
            fn()
            once = true;
        }

    }
}
const init = once(() => console.log("Initialized!"));
init();

// ```

// ### Exercise 6.3: Scope & Lexical Environment
// ```javascript
// // Predict the output of this code WITHOUT running it:
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   };
// }
// const counter = outer();
// console.log(counter()); // Prediction: ?
// console.log(counter()); // Prediction: ?
// console.log(counter()); // Prediction: ?

// // Explanation of why:
// it will keep adding one to the counter because when we return a function even if it is anamed one, we still have the reference in the return so we create a closure with the scope of the function

// ---

// ## SECTION 7: Promises (Day 7)

// ### Exercise 7.1: Promise Creation & States
// ```javascript
// // 1. Create a Promise that resolves after 2 seconds with "Done!"
// // Your code:
const promise123 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 2000)
})

// // 2. Create a Promise that rejects if a number is negative
// // Your code:
const number = -2;

const promise1 = new Promise((resolve, reject) => number < 0 ? reject(new Error("NO PADRE")) : resolve("TA BIEN"))

// // 3. Create a Promise that randomly resolves or rejects (50/50)
// // Your code:

const generateRandonNum = () => Math.random()
const promiseA = new Promise((resolve, reject) => generateRandonNum() < 0.5 ? resolve("GOOD") : reject(new Promise("NOPE")))

// ```

// ### Exercise 7.2: Promise Chaining
// ```javascript
// // Assume these helper functions exist:
// function getUser(id) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve({ id, name: "John" }), 500);
//   });
// }

// function getPosts(userId) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(["Post 1", "Post 2"]), 500);
//   });
// }

// // 1. Chain getUser and getPosts: getUser(1) -> then get their posts
// // Log the posts when done
// // Your code:

// // 2. Add error handling with .catch()
// // Your code:

// // 3. Add .finally() to log "Complete" regardless of success/failure
// // Your code:

// ```

// ### Exercise 7.3: Promise.all() Challenge
// ```javascript
// // Create three Promises that resolve after different times
// // Use Promise.all() to wait for all three
// // Log the results when all are done

// // Your code:

// ```

// ---

// ## SECTION 8: Async/Await (Day 8)

// ### Exercise 8.1: Async Function Basics
// ```javascript
// // 1. Convert this Promise chain to async/await:
// // getUser(1)
// //   .then(user => getPosts(user.id))
// //   .then(posts => console.log(posts));

// // Your async/await version:

// // 2. Create an async function that waits 1 second then returns "Hello"
// // Your code:

// // 3. What does an async function return? Create one and log its return value
// // Your code:

// ```

// ### Exercise 8.2: Error Handling & Parallel Execution
// ```javascript
// // 1. Add try/catch error handling to an async function
// // Your code:

// // 2. Fetch 3 different user IDs in PARALLEL using Promise.all()
// // Your code:

// // 3. Compare execution time: sequential vs parallel
// // Sequential: fetch user -> fetch posts -> log
// // Parallel: fetch user AND posts at same time
// // Which is faster? Why?

// // Your code:

// ```

// ### Exercise 8.3: Timeout Wrapper
// ```javascript
// // Create a fetchWithTimeout(promise, ms) function
// // It should reject if the promise takes longer than ms milliseconds
// // Hint: use Promise.race()
// // Your code:

// ```

// ---

// ## SECTION 9: Fetch API (Day 9)

// ### Exercise 9.1: GET Requests
// ```javascript
// const BASE_URL = "https://jsonplaceholder.typicode.com";

// // 1. Create a function that fetches all posts
// // Your code:

// // 2. Create a function that fetches a single post by ID
// // Your code:

// // 3. Create a safe version that returns null for 404s
// // Your code:

// ```

// ### Exercise 9.2: POST Requests & Headers
// ```javascript
// // 1. Create a function that POSTs a new post
// // Required: title, body, userId
// // Your code:

// // 2. Create a reusable API client object with get(), post(), put(), delete() methods
// // Your code:

// // 3. Add authorization header to requests
// // Your code:

// ```

// ### Exercise 9.3: Error Handling
// ```javascript
// // 1. Create a robust fetch wrapper that handles:
// // - Network errors
// // - HTTP errors (check response.ok)
// // - JSON parsing errors
// // Your code:

// // 2. Create a retry mechanism (retry 3 times if it fails)
// // Your code:

// ```

// ---

// ## SECTION 10: DOM Manipulation (Day 10)

// ### Exercise 10.1: Selecting Elements
// ```javascript
// // Create an HTML structure (in your notes):
// // - A header with id "main-header"
// // - A h1 with class "title"
// // - Navigation with 3 links (class "nav-link")
// // - Two articles with class "post"

// // Then practice these selections:
// // 1. Select the header by ID
// // Your code:

// // 2. Select the first nav link
// // Your code:

// // 3. Select ALL nav links
// // Your code:

// // 4. Select all articles
// // Your code:

// ```

// ### Exercise 10.2: Modifying Elements
// ```javascript
// // Using your HTML structure from 10.1:

// // 1. Change the h1 text to "Welcome!"
// // Your code:

// // 2. Change the h1 color to blue
// // Your code:

// // 3. Add a class "active" to the first nav link
// // Your code:

// // 4. Toggle a class "dark" on all articles
// // Your code:

// ```

// ### Exercise 10.3: Creating & Removing Elements
// ```javascript
// // 1. Create a new article element with a title and content, append to page
// // Your code:

// // 2. Create a list from array ["Apple", "Banana", "Orange"]
// // Your code:

// // 3. Add a "Delete" button to each article
// // When clicked, remove that article
// // Your code:

// ```

// ### Exercise 10.4: Event Handling
// ```javascript
// // 1. Create a button that logs "Button clicked!" when clicked
// // Your code:

// // 2. Log mouse coordinates whenever mouse moves
// // Your code:

// // 3. Prevent form submission and log form data instead
// // Your code:

// // 4. Create an input field that logs its value on every keystroke
// // Your code:

// ```
