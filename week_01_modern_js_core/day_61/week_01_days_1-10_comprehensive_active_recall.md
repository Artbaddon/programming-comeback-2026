# Session 1 : Events DOM
**Date:** Mon Abr 13 2026
**Time:** 20:00 : 20:50
**Duration:** 50 minutes
**Review Date:** Abr 16 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)

### Variables & Data Types (Day 1)
1. What's the key difference between `let` and `const`?
2. What is the Temporal Dead Zone and which declaration creates it?
3. How does type coercion work with `==` vs `===`?

**My guesses:**
-The main difference between let and const is basically that with const you can only assign a value once.
-TDZ is a mid state between the declaration of a variable and the assignment of it, and occurs basically when you try to access a variable that is not ready yet, because in JS when a new scope is created, js have a like a key value like structure to save the statements  but for let, const, and class they are only referenced but they doesnt have a value yet.
-in == js convert change the type to share the same between both and then compares, in === we dont do that

---

### Arrow Functions (Day 2)
1. How do you implicitly return an object from an arrow function?
2. Why do arrow functions handle `this` differently from regular functions?
3. Name two situations where you should NOT use arrow functions.

**My guesses:**
- you do it by using ()=>({})
- Arrow function dont create their own this, they take the one from the outer scope
- when wanting to use contructors, when you want to use argument object
### Destructuring & Spread/Rest (Day 3)
1. How do you skip elements when destructuring an array?
2. What's the difference between the spread operator and rest parameters?
3. Can rest parameters appear anywhere in a function parameter list?

**My guesses:**
- by let them empty or with _ [_,b] = obj
- spread operator is like a for of, so it will iterate through the whole array
- no, it has to be at the last, because it will add all of the following args to an array

---

### Array Methods Part 1: map, filter, find (Day 4)
1. What does `map()` return and does it modify the original array?
2. What's the difference between `filter()` and `find()`?
3. What does `findIndex()` return when no element matches?

**My guesses:**
- a shallow copy of the array, it doenst not mutate the original array
- the idea of filter is returnig an array of all the items that met the criteria argument we passed, find does the same but stops at the first one.
- -1
---

### Array Methods Part 2: reduce, some, every, includes (Day 4-5)
1. What are the two required parameters of a reduce callback?
2. What does `some()` return if the array is empty?
3. When would you use `includes()` vs `find()`?

**My guesses:**
- the required params are the accumulator and the current item
- false
- includes to see if an array has the value we are looking for and find to actually bring the value

---

### Closures & Scope (Day 6)
1. Define "closure" in one sentence.
2. What is "lexical scope"?
3. How do closures enable "private variables"?

**My guesses:**
- 
- 
- 

---

### Promises (Day 7)
1. What are the three states of a Promise?
2. What does `.then()` return?
3. Where should `.catch()` go in a Promise chain?

**My guesses:**
- 
- 
- 

---

### Async/Await (Day 8)
1. What does an `async` function always return?
2. Can you use `await` outside an async function?
3. What does `Promise.all()` do if one Promise rejects?

**My guesses:**
- 
- 
- 

---

### Fetch API (Day 9)
1. What does `fetch()` return?
2. Why do we need to call `.json()` on the response?
3. Is a 404 response a rejected Promise?

**My guesses:**
- 
- 
- 

---

### DOM Manipulation (Day 10)
1. What's the difference between `querySelector` and `querySelectorAll`?
2. What's the difference between `textContent` and `innerHTML`?
3. How do you remove an element from the DOM?

**My guesses:**
- 
- 
- 

---

## Resources Used 📚
- JavaScript.info (Variables, Arrow Functions, Destructuring, Array Methods, Closures, Promises, Async/Await, Fetch)
- MDN Web Docs
- Escape Plan 2026 (Days 1-10)

---

## Daily Exercises & Challenges

---

## SECTION 1: Variables & Data Types (Day 1)

### Exercise 1.1: Type Identification
```javascript
// Declare variables of each primitive type (string, number, boolean, null, undefined, symbol, bigint)
// Use typeof to verify each one
// Your code here:

```

### Exercise 1.2: Type Coercion Prediction
```javascript
// Predict the output WITHOUT running the code. Write your prediction, then verify:
console.log("5" + 3);        // Prediction: ?
console.log("5" - 3);        // Prediction: ?
console.log("5" == 5);       // Prediction: ?
console.log("5" === 5);      // Prediction: ?
console.log(null == undefined); // Prediction: ?
```

### Exercise 1.3: Template Literals Advanced
```javascript
// Create a template literal that:
// - Spans multiple lines
// - Includes a user object with properties: name, age, email
// - Displays: "User: [name], Age: [age], Email: [email]"
// - Calculates and displays: "Born in [birth year]"
// Your code here:

```

---

## SECTION 2: Arrow Functions (Day 2)

### Exercise 2.1: Arrow Function Conversions
```javascript
// Convert these regular functions to arrow functions:

// 1.
function add(a, b) {
  return a + b;
}

// 2.
function square(x) {
  return x * x;
}

// 3. (Single parameter - can omit parentheses)
function double(num) {
  return num * 2;
}

// 4. (No parameters)
function greet() {
  return "Hello!";
}

// Your converted arrow functions:

```

### Exercise 2.2: Object Return Trick
```javascript
// Create arrow functions that implicitly return objects:

// 1. A function that returns { name: "John", age: 25 }
const createPerson = /* your arrow function */;

// 2. A function that takes (x, y) and returns { x, y }
const createCoords = /* your arrow function */;

// Your code here:

```

### Exercise 2.3: this Binding Investigation
```javascript
// Create an object with a method. Use a regular function.
// Log 'this' to see what it refers to.
// Then change the method to an arrow function.
// What changes? Why?

const myObject = {
  // Your code here
};

// Explanation of what changed and why:

```

---

## SECTION 3: Destructuring & Spread/Rest (Day 3)

### Exercise 3.1: Array Destructuring
```javascript
// 1. Extract first two elements from [1, 2, 3, 4, 5]
const arr = [1, 2, 3, 4, 5];
// Your destructuring:

// 2. Skip the second element: get first and third from ["a", "b", "c"]
const letters = ["a", "b", "c"];
// Your destructuring:

// 3. Use rest to get first element and remaining elements separately
const numbers = [10, 20, 30, 40];
// Your destructuring:

```

### Exercise 3.2: Object Destructuring
```javascript
// 1. Extract name and age from a user object
const user = { name: "Alice", age: 25, city: "NYC" };
// Your destructuring:

// 2. Extract name but rename it to userName
// Your destructuring:

// 3. Destructure with default value for missing property
const product = { name: "Laptop", price: 1000 };
// Extract 'discount' with default value of 0
// Your destructuring:

// 4. Nested destructuring - extract city from deep object
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
// Your destructuring to get city:

```

### Exercise 3.3: Spread & Rest Operators
```javascript
// 1. Create a copy of an array using spread
const original = [1, 2, 3];
// Your code:

// 2. Merge two arrays: [1, 2] and [3, 4] into [1, 2, 3, 4]
// Your code:

// 3. Clone an object and override one property
const settings = { theme: "dark", fontSize: 14, language: "en" };
// Your code (return new object with fontSize changed to 16):

// 4. Create a function that takes unlimited numbers and returns their sum
// Your code:

```

---

## SECTION 4: Array Methods - Part 1 (Day 4)

### Exercise 4.1: map() Practice
```javascript
const numbers = [1, 2, 3, 4, 5];
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// 1. Double all numbers
// Your code:

// 2. Get array of just user names
// Your code:

// 3. Create sentences: "Alice is 25 years old"
// Your code:

```

### Exercise 4.2: filter() Practice
```javascript
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true },
  { name: "Watch", price: 200, inStock: true }
];

// 1. Get only products that are in stock
// Your code:

// 2. Get products under $400
// Your code:

// 3. Get products that are in stock AND under $400
// Your code:

// 4. Chain filter + map to get names of in-stock products
// Your code:

```

### Exercise 4.3: find() and findIndex()
```javascript
const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "user" },
  { id: 4, name: "Diana", role: "admin" }
];

// 1. Find user with id 3
// Your code:

// 2. Find the first admin user
// Your code:

// 3. Find the index of Bob
// Your code:

// 4. Create a getUserById(id) function using find()
// Your code:

```

---

## SECTION 5: Array Methods - Part 2 (Day 4-5)

### Exercise 5.1: reduce() Fundamentals
```javascript
const numbers = [1, 2, 3, 4, 5];

// 1. Sum all numbers using reduce
// Your code:

// 2. Find the maximum number using reduce
// Your code:

// 3. Flatten an array: [[1,2], [3,4], [5]] into [1,2,3,4,5]
// Your code:

```

### Exercise 5.2: reduce() for Aggregation
```javascript
const orders = [
  { product: "Laptop", amount: 1000 },
  { product: "Phone", amount: 500 },
  { product: "Phone", amount: 500 },
  { product: "Tablet", amount: 300 }
];

// 1. Calculate total of all order amounts
// Your code:

// 2. Count occurrences: { Laptop: 1, Phone: 2, Tablet: 1 }
// Your code:

// 3. Group orders by product name
// Your code:

```

### Exercise 5.3: some(), every(), includes()
```javascript
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Charlie", age: 30, active: true }
];

// 1. Check if ANY user is under 18
// Your code:

// 2. Check if ALL users are active
// Your code:

// 3. Check if ALL users are over 15
// Your code:

// 4. Check if array [1, 2, 3] includes 2
// Your code:

```

---

## SECTION 6: Closures & Scope (Day 6)

### Exercise 6.1: Closure Basics
```javascript
// 1. Create a counter function that returns an inner function
// The inner function should increment and return count
// count should NOT be directly accessible
// Example use: const counter = createCounter(); counter(); // 1, counter(); // 2
// Your code:

// 2. Create a createIdGenerator(prefix) function
// Returns a function that generates unique IDs
// Example: const userIds = createIdGenerator("user");
//          userIds(); // "user_1", userIds(); // "user_2"
// Your code:

```

### Exercise 6.2: Practical Closure Patterns
```javascript
// 1. Create a memoize(fn) function that caches results
// If called with same arguments, return cached result
// Example:
//   const add = memoize((a, b) => a + b);
//   add(2, 3); // Computed: 5
//   add(2, 3); // Cached: 5
// Your code:

// 2. Create a once(fn) function that only allows fn to run once
// Example:
//   const init = once(() => console.log("Initialized!"));
//   init(); // "Initialized!"
//   init(); // Nothing happens
// Your code:

```

### Exercise 6.3: Scope & Lexical Environment
```javascript
// Predict the output of this code WITHOUT running it:
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // Prediction: ?
console.log(counter()); // Prediction: ?
console.log(counter()); // Prediction: ?

// Explanation of why:

```

---

## SECTION 7: Promises (Day 7)

### Exercise 7.1: Promise Creation & States
```javascript
// 1. Create a Promise that resolves after 2 seconds with "Done!"
// Your code:

// 2. Create a Promise that rejects if a number is negative
// Your code:

// 3. Create a Promise that randomly resolves or rejects (50/50)
// Your code:

```

### Exercise 7.2: Promise Chaining
```javascript
// Assume these helper functions exist:
function getUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: "John" }), 500);
  });
}

function getPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 500);
  });
}

// 1. Chain getUser and getPosts: getUser(1) -> then get their posts
// Log the posts when done
// Your code:

// 2. Add error handling with .catch()
// Your code:

// 3. Add .finally() to log "Complete" regardless of success/failure
// Your code:

```

### Exercise 7.3: Promise.all() Challenge
```javascript
// Create three Promises that resolve after different times
// Use Promise.all() to wait for all three
// Log the results when all are done

// Your code:

```

---

## SECTION 8: Async/Await (Day 8)

### Exercise 8.1: Async Function Basics
```javascript
// 1. Convert this Promise chain to async/await:
// getUser(1)
//   .then(user => getPosts(user.id))
//   .then(posts => console.log(posts));

// Your async/await version:

// 2. Create an async function that waits 1 second then returns "Hello"
// Your code:

// 3. What does an async function return? Create one and log its return value
// Your code:

```

### Exercise 8.2: Error Handling & Parallel Execution
```javascript
// 1. Add try/catch error handling to an async function
// Your code:

// 2. Fetch 3 different user IDs in PARALLEL using Promise.all()
// Your code:

// 3. Compare execution time: sequential vs parallel
// Sequential: fetch user -> fetch posts -> log
// Parallel: fetch user AND posts at same time
// Which is faster? Why?

// Your code:

```

### Exercise 8.3: Timeout Wrapper
```javascript
// Create a fetchWithTimeout(promise, ms) function
// It should reject if the promise takes longer than ms milliseconds
// Hint: use Promise.race()
// Your code:

```

---

## SECTION 9: Fetch API (Day 9)

### Exercise 9.1: GET Requests
```javascript
const BASE_URL = "https://jsonplaceholder.typicode.com";

// 1. Create a function that fetches all posts
// Your code:

// 2. Create a function that fetches a single post by ID
// Your code:

// 3. Create a safe version that returns null for 404s
// Your code:

```

### Exercise 9.2: POST Requests & Headers
```javascript
// 1. Create a function that POSTs a new post
// Required: title, body, userId
// Your code:

// 2. Create a reusable API client object with get(), post(), put(), delete() methods
// Your code:

// 3. Add authorization header to requests
// Your code:

```

### Exercise 9.3: Error Handling
```javascript
// 1. Create a robust fetch wrapper that handles:
// - Network errors
// - HTTP errors (check response.ok)
// - JSON parsing errors
// Your code:

// 2. Create a retry mechanism (retry 3 times if it fails)
// Your code:

```

---

## SECTION 10: DOM Manipulation (Day 10)

### Exercise 10.1: Selecting Elements
```javascript
// Create an HTML structure (in your notes):
// - A header with id "main-header"
// - A h1 with class "title"
// - Navigation with 3 links (class "nav-link")
// - Two articles with class "post"

// Then practice these selections:
// 1. Select the header by ID
// Your code:

// 2. Select the first nav link
// Your code:

// 3. Select ALL nav links
// Your code:

// 4. Select all articles
// Your code:

```

### Exercise 10.2: Modifying Elements
```javascript
// Using your HTML structure from 10.1:

// 1. Change the h1 text to "Welcome!"
// Your code:

// 2. Change the h1 color to blue
// Your code:

// 3. Add a class "active" to the first nav link
// Your code:

// 4. Toggle a class "dark" on all articles
// Your code:

```

### Exercise 10.3: Creating & Removing Elements
```javascript
// 1. Create a new article element with a title and content, append to page
// Your code:

// 2. Create a list from array ["Apple", "Banana", "Orange"]
// Your code:

// 3. Add a "Delete" button to each article
// When clicked, remove that article
// Your code:

```

### Exercise 10.4: Event Handling
```javascript
// 1. Create a button that logs "Button clicked!" when clicked
// Your code:

// 2. Log mouse coordinates whenever mouse moves
// Your code:

// 3. Prevent form submission and log form data instead
// Your code:

// 4. Create an input field that logs its value on every keystroke
// Your code:

```

---

## Aha Moments 💡
- [Something that clicked for you during this session]
- [A connection you made between concepts]
- [A pattern you noticed across multiple topics]

---

## Confusion Points ❓
- [What's still fuzzy]
- [Questions to research later]
- [Concepts that feel weak]

---

## Post-Session Recall (CLOSE YOUR NOTES FIRST!)

### Quick Recall Challenge - Answer from Memory:

**1. Variables & Type Coercion:**
Explain the difference between `let`, `const`, and `var` in 2-3 sentences.

**2. Arrow Functions:**
Why can't you use arrow functions as constructors?

**3. Destructuring:**
How do you extract nested values and rename them simultaneously?

**4. Array Methods:**
Name the difference between `.filter().map()` vs `.reduce()` - when would you use each?

**5. Closures:**
Explain how closures create "private variables" - give one practical example.

**6. Promises:**
What's the order of execution in a Promise chain with `.then()` and `.catch()`?

**7. Async/Await:**
Why is `Promise.all()` considered more efficient than sequential awaits?

**8. Fetch:**
What's the difference between network errors and HTTP errors (404, 500)?

**9. DOM:**
What's dangerous about using `.innerHTML` and how do you avoid it?

**10. The "ELI5" Summary**
Summarize Week 1 in ONE simple sentence - what is the core theme?

---

## Code Path & Files

**HTML Sandbox File:** `[Create an HTML test file if needed]`

**JavaScript Practice Files:**
- All exercises should be written in separate `.js` files or within your HTML's `<script>` tag

---

## Reflection

**What went well:**
- 

**What was challenging:**
- 

**Which topics felt strongest:**
- 

**Which topics need more practice:**
- 

**Time management:**
- Did you answer all pre-session questions? Yes/No
- Did you complete all exercises? Yes/No
- Actual time spent: __ minutes

**Energy level:** X/10
**Confidence on Week 1 topics:** X/10

---

## Next Steps

### Topics to Review Further:
- 
- 

### Advanced Topics to Explore Next:
- Error handling patterns
- Performance optimization
- Real-world API design

---
