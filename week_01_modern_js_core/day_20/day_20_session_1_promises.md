# Session 1: Promises
**Date:** Tuesday Jan 20 2026
**Time:** 19:20 : 20:10
**Duration:** 50 minutes
**Review Date:** Jan 23 (Spaced Repetition)
---

## Pre-Session Questions (Answer BEFORE you start)
1. What problem do Promises solve?
2. What are the three states of a Promise?


**My guesses:**
- They solve the problem of managing the asyncronous operations in a better way.
- Solved, rejected, waiting to solve.

---

## Resources Used 📚
- [JavaScript.info: Promise Basics](https://javascript.info/promise-basics) 

## Notes (Write in MY words during session)

### Promise

**What it is:**
- A promise in JavaScript is basically a way to handle events that may or not be completed in the same time you declare them, is like a way to handle something that will happen and something that expects this to happen when it will, so is like a subscription list, because you for example a game that you want to release, there's a list of people that want to play and they are in a list, so when you for example release the game, the people automatically will receive the copy, and they will be in a waiting state before something good or bad happens.

**Why it exists:**
Begfore promises we normally used or relied too mucn on callbacks so if you wanted to do three things in a row, like load a user, get their posts and then get the coments of the post, you ended in callback hell because you needed to pass 3 whole functions after another. ALso it let you standarize error handling.

**How it works:**
A function passed to new Promise is called the executer and when this new promise is created the execturo will run automatically, containgind the porducing code that will eventually produce a resulty, it has to arguments resolve and reject that are callbacks provided by js itself, when the executor obtains the result, it sohld call one of the two callbacks, rsesolve(value) if the job is completed or reject(error) if an error has occured.
The promise object returned by new Promise has 2 internal properties
    -state: initially pending, then changes to either fullfiled when resolve is used or rejected when reject is.
    -result: is initially undefined then changes to value when the promise is resolved or error when is rejected.
```javascript
let promise = new Promise(function(resolve,reject){
    //executor
})

```
**Example:**
```javascript
let promise = new Promise(function(resolve,reject){
    //The function is executed automatically when the promise is constructed
    //After 1 second signal that the job is done with the result "done"
    setTimeout(()=>resolve("done"),1000);
})
let rejectedPromise = new Promise(function(resolver,reject){
    //after 1 second signal that the job is done and rejected
    setTimeout(()=>reject(new Error("WHoops")),1000)
})
// it can only be 1 result or an error,

```

**When to use:**
whenever you have an operation that takes an indeterminated amount of time, asynchhronous operations.
    -API CALLS, you request data from a server so you will not now if it takes 10ms 1m or if the server will crash
    -File system operations like reading a file.
    

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

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. What are the three Promise states?**
-fullfiled, rejected and pending

**2. What do `resolve` and `reject` do?**
-Resolve is executted when the function is completed in a positive way and we want to return the state of fullfiled,
-reject is executed whenever we want to reject the actual promise and return an error
**3. Does a Promise execute immediately or lazily?**
-It executes inmedieatly when you write the new Promise

**4. What's one thing I still don't fully understand?**
handles

**5. The "ELI5" Summary**
-Promises are basically when you expects something that will happen but not in the same moment as you know it for example you now that when you arrive home wou will play with your toys, so if you are not in your house you cant play.

---

## Next Session Focus
- Consumers then catch finally

---

## Reflection

**What went well:**
- i understood the topics

**What was hard:**
- Remembering the concept of promises

**Time management:**
- Did I stay focused? Yes
**Energy level:** 7/10
**Confidence on this topic:** 8/10

---