# Session 2: Promises .then(), .catch(), .finally()
**Date:** Tuesday Jan 20 2026
**Time:** 20:20 : 21:10
**Duration:** 50 minutes
**Review Date:** Jan 23 (Spaced Repetition)
---

## Pre-Session Questions (Answer BEFORE you start)
1. What does `.then()` return?
2. Where do errors go in a Promise chain?

**My guesses:**
- Then returns a promise so thats why you can chain them
- Error usually go to the catch.

---

## Resources Used 📚
- [JavaScript.info: Promise Consumers Then Catch](https://javascript.info/promise-basics#consumers-then-catch) (15 min)
- [JavaScript.info: Promise Chaining](https://javascript.info/promise-chaining) (15 min)
---

## Notes (Write in MY words during session)

### Then

**What it is:**
-Then is a function that will be executed when the promise is settled so is a link between the producing code and the consuming fuction, this function receive the result or error.

**Why it exists:**
-Because you will want to be able to execute something whenever the promise is settled.

**How it works:**
-it is a promise method so you use .then() with two callback arguments, first you have the function you will want to execute when the promise is resolved or the one that will handle the error.
```javascript
promise.then(
    function(result){},//The function that you will execute when the promise is resolved
    function(error){}//The error handling function.
)
```

**Example:**
```javascript
// Code example with comments explaining each line
let promise = new Promise(function(resolve,reject){
    setTimeout(()=>resolve("done"),1000);
})
//We create a promise that will resolve with done after 1 second
promise.then(
    result => alert(result),
    error => alert(error)
)
//We will show the result of the promise in this case done with an alert after 1 second
//if the Promise resolves with an error, it will show the error.


```

**When to use:**
-Handling an API response, with fetch.
-Chaining sequential actions.

---

### Then

**What it is:**
-Catch is a function that will be executed when the promise is settled so is a link between the producing code and the consuming fuction, in this case this function will only handle the errors

**Why it exists:**
-Because you will want to be able to handle the rejected promises in a cleaner way.

**How it works:**
-it is a promise method so you use .catch() with 1 callback arguments, this function will handle the possible error if a promise is rejected.
```javascript

```

**Example:**
```javascript


```

**When to use:**
-Handling an API error response, with fetch.

---

## Aha Moments 💡
- [Something that clicked for you]
- [Connection you made between concepts]

---

## Confusion Points ❓
- [What's still fuzzy]
- [Questions to research later]

---

## Daily Exercises ✅

1. [ ] **Exercise 1:** [Description]
2. [ ] **Exercise 2:** [Description]
3. [ ] **Exercise 3:** [Description]

**My Solution Code / Notes:**
```javascript
// Paste your solution code here
```

---

## Code I Wrote (Project/Experiment)

**File(s):** `[filename.js]`

**What I built:**
- [Brief description]

**Key techniques used:**
- 
- 

**Bugs I hit:**
- [Problem you encountered]
- [How you solved it]

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. What does `.then()` return?**
-it returns a new promise that you can add handlers if you return it explictily.

**2. Where should `.catch()` go in a chain?**
-it should be one of the last in the chain because it only handles the errors.
**3. When does `.finally()` run?**
-As soon as the promise is settled.

**4. What's one thing I still don't fully understand?**


**5. The "ELI5" Summary**
-Imagine you want to do something when you return to your home so the then will be the action you will as soon as you are in your home, like open the door.

---

## Next Session Focus
- [What you'll study next]

---

## Reflection

**What went well:**
- 

**What was hard:**
- 

**Time management:**
- Did I stay focused? YEs

**Energy level:** 5/10
**Confidence on this topic:** 7/10

---