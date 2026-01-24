# Session 1: Async Errror Handling and Parallel Execution
**Date:** Saturday Jan 20 2026
**Time:** 11:00 : 11:50
**Duration:** 50 minutes
**Review Date:** Jan 27 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. What is the Fetch API?
2. What does `fetch()` return?

**My guesses:**
- Fetch API is a API that we can use in the browser and it will let us make HTTP request to different endpoints
- Fetch returns a Promise

---

## Resources Used 📚
- [JavaScript.info: Fetch](https://javascript.info/fetch) (15 min)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) (15 min)
---

## Notes (Write in MY words during session)

### Promise.allSettled

**What it is:**
-Is a concurrency method that watis for every promise in an array to finish settle, regardless if they succeed or fail

**Why it exists:**
-We sometime need partial sucess on fetch petition or othe promises and solves the problem of promise.all because it allows you to salvage the sucessful isntead of throwing the error immedialty and going to catch block

**How it works:**
-It waits for every promise to reach a final state, it never rejects based on the input, it returns an array of objects where each objec represent a Promise and has a status or a value, if is succesful it has a value and if it fails it has a reason.

**Example:**
```javascript
const statuses = await Promise.allStettled([ping(s1),ping(s2)])

statuses.forEach((res,i)=>{
    if(res.status=="fullfilled") console.log(`server ${i}, is Up!`);
    else console.log(`Server ${i}, is Down because ${res.reason}`)
})
```

**When to use:**
-Non critical or independt scenarios like sending many emails, uploading a batch of files or fetching optional ui components.

---

### Promise.Race

**What it is:**
-Is a concurrence method that returns a promise as soon as any of the promises in the array settles, even if it resolve or rejects. It is essentially a sprint where only the first promise to settle matters.

**Why it exists:**
-It is used when you have multple sources for the same data and you want the fastest one or when you want to limit how long may an operation take, it solves the problem of hanging request and it allows you to create a behaviour close to a timeout in your network request.

**How it works:**
-It takes an array of promises and monitors them in parallel,. then the winner takes all, as soon as the frist promise either fulfills or rejects it immediately settles with that result or error.

**Example:**
```javascript
//setting a 5 second timeout for a fecth request
const timeout = new Promise((_, reject)=>
    setTimeout(()=>reject(new Error("Request too slow")),5000)
    //We create a tiemout function that will reject the promise after 5 seconds
)

try {
    const data = await Promise.race([
        fetch('https://api.example.com/data'),
        timeout
    ])

    console.log("Sucess:", data)
} catch (err) {
    console.log("Error or Tiemout", err.message)
}

```

**When to use:**
-Request timeOuts: to ensure your app doenst wait forever for a slow server, if you have multple mirrors and want the fastets response
---
### Fetch

**What it is:**
-is a way that we have in JavaScript to send network request and load information.

**Why it exists:**
-Because sometimes you will need to get or send data via network requests
**How it works:**
-The syntax is basic, you use the method fetch that need to args:
-url: The url when you will do the request
-options : optinla parameters like headers, method, etc.
-Without options the default is a get request
-Getting a response is usually a two stage process:
1.First the promise returned by fetch resolves with an object as soon as the server responds with headers.
-In this stage we can check HTTP status to see whethe rit is sucessful or not.
-The promise rejects if the feetch was uanble to make HTTP request, and we can see HTPP-status in response propertios like status(HTTP ccode), ok(trhat is a bolean) amd its ok if the HTPP status code is between 200-299
**Example:**
```javascript
let response = await fetch(url);
if (response.ok){
    let json = await response.json();
}else {
    alert("HTTP-error: " + response.status)
}


```

**When to use:**
-getting users from API, etc
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

**1. What does `fetch()` return?**
-It returns a promise

**2. Why do we need to call `.json()` on the response?**
-Because is the way we parse the body to access the reponse
**3. Is a 404 response a rejected Promise?**
-404 is a code for a rejected promise meaning not found

**4. What's one thing I still don't fully understand?**
-HTTP Headers, options

**5. The "ELI5" Summary**
-Imagine you want to be able to buy a new toy that is not in that store, so you call another store to see if they have it and if they have it they will tell you if you want to buy it, so if you buy it then it cames to you.

---

## Next Session Focus
- HTTP HEADERS, OPTIONS

---

## Reflection

**What went well:**
- I understood

**What was hard:**
- I took to much to do the theory so i didnt practice much

**Time management:**
- Did I stay focused? YEs

**Energy level:** 7/10
**Confidence on this topic:** 7/10

---