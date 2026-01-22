# Session 1: Async/Await
**Date:** Wednesday Jan 21 2026
**Time:** 19:00 : 19:50
**Duration:** 50 minutes
**Review Date:** Jan 24 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. What does `async` do to a function?
2. What does `await` do?

**My guesses:**
- Async basically makes that the function returns a promise.
- Await means pause the execution untill x returns the promise.

---

## Resources Used 📚
- [JavaScript.info: Async/Await](https://javascript.info/async-await)


---

## Notes (Write in MY words during session)

### Async

**What it is:**
-Is a special keyword to work with functions and, it is a easier way to work with promises and means that the function return value will be always a function.

**Why it exists:**
-To handle more effectively asynchronous operations and promises in a better way.
-To replace .then() chains
**How it works:**
-you write async before a function and that return value will be wrapped in a Promise.
-If you return a value it will produce a Resolved promise
-If you Throw an error inside the function, it will produce a rejected promise.

**Example:**
```javascript
// Code example with comments explaining each line
async function f(){
    return 1;
}
//Se we create an async function called f that will return 1 as a Promise

f().then(alert);
//We use then to handle the resolved promise and we show an alert.

async function f2(){
     return Promise.resolve(1);
}
//You can explicitly put the return promise
```

**When to use:**
-You normally used in Asynchronous operations like:
    -Reading a file.
    -Doing an API call.
---

### Await

**What it is:**
-Is a special keyword that you put before using async function that makes  javascript pause the whole execution untill the function settles the promise and return its result.
**Why it exists:**
-Is a more elegant synxa of getting the promise result like promise.then and it solves the problem of handling the promises of the async functions more easy.
**How it works:**
-
**Example:**
```javascript
async function showAvatar(){
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    let img = document.createElement("img");
    img.src = githubuser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await new Promise((resolve,reject)=>setTimeout(resolve,3000));

    img.remove();
     return githubUser;
    }

    showAvatar();
```

**When to use:**
-Handle the settled promises normally used in Asynchronous operations like:
    -Reading a file.
    -Doing an API call.
---

## Aha Moments 💡
- await means stop all the execution and resume it whenever the function is done
- Is the same as then but in a more elegant way.

---

## Confusion Points ❓
- [What's still fuzzy]
- [Questions to research later]

---

## Daily Exercises ✅

1. [X] **Exercise 1:** [Description]
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

**1. What does an `async` function always return?**
-It always return a promise.

**2. Can you use `await` outside an async function?**
-No you cannot, it will give you an error

**3. Rewrite Promise.then().then() as async/await from memory.**
```javascript
async function f(){
    return 1;
}
async function main(){
let returnF = await f();
console.log(returnF)
}

```

**4. What's one thing I still don't fully understand?**
[Honest answer]

**5. The "ELI5" Summary**
-Imagine that you want to play minecraft but untill you dont turn on your computer you cant, so that is async await, await will pause all untill your pc is on and then you can open minecraft.

---

## Next Session Focus
- Error Handling & Parallel Execution 

---

## Reflection

**What went well:**
- Remembered Async Await

**What was hard:**
- 

**Time management:**
- Did I stay focused? Yes

**Energy level:** 7/10
**Confidence on this topic:** 8/10

---