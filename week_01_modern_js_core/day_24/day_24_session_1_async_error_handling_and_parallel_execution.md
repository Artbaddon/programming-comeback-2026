# Session 1: Async Errror Handling and Parallel Execution
**Date:** Saturday Jan 20 2026
**Time:** 09:20 : 10:10
**Duration:** 50 minutes
**Review Date:** Jan 23 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. How do you handle errors with async/await?
2. How do you run multiple Promises in parallel?

**My guesses:**
- You use try catch blocks and because the async functiosn always return a promise, if you throw a new error, it will return the promise as rejected
- You run multiple promises with Promise.all

---

## Resources Used 📚
- [[Link 1]](https://javascript.info/async-await#error-handling)
- [Link 2]

---

## Notes (Write in MY words during session)

### Error Handling

**What it is:**
-Is a way mechanism that we have to manage the potential failures that may occur during an async operation, in async/await we usually do it with try catch finaly statement

**Why it exists:**
-Promises only can be fulfilled or rejected, a rejection is an async execption so if you dont catch it the progrom doesnt know how to proceed and will keep execution whic can lead to unhandled rejection errors and may broke the user experience.

**How it works:**
-When an awaited promise rejects itn thorws an error that interrupts the try vlock and will to jump to the catch(error) blck the error contains the reason or message for the failure.

**Example:**
```javascript
async function getWeather(){
    try{
        const data = await fetch('https://api.weather.com/v1');
        return await data.json();
    }catch(err){
        console.error(`Failed to fetch weather: ${err.message}`)

    }
}
```

**When to use:**
-Around any await call where the outcame is not sure, netowrk request, file reading, API, etc.

---

### Promise all

**What it is:**
Promise All is a concurrency method that treats an array of promises as a single one, and if one fails it will go directly to the catch methods, so it will only resolve if all promises resolve


**Why it exists:**
-When often need while building apps to be able to bring data from different sources that are required for as single view for example in a profile page we need adress, name, etc. So if we await them one by one we create a water fall where the seond task doesnt start untill the first finishes so is not that optimal. With pormise all we solve this by triggreing or wrapping them in parallel reducing the total waiting time.

**How it works:**
-It start all the promises in the array at the same time, it stays pending untill every single pormise has fulfilled and if one fail it will immediatlye reject it with the error and will not wait for the remaining promises to finis. if is sucessfull it returns an array of values in the exact same order as the input array

**Example:**
```javascript
async function loadDashboard(){
    try{
        const [weather, traffic, news] = await Promise.all([
            fetchWeather(),
            fetchTraffic(),
            fetchNews()
        ])

        renderDashboard(weather, traffic, news);
    }catch(err){
        showGlobalError("System critical failure.")
    }
}

```

**When to use:**
-When you have interdependant data and if you need that the whole group is sucessful to the continue with the next step.


---

## Aha Moments 💡
- if one promise is rejected while doing the promise.all, it will automatically reject all with the error and will go to the catch so you wongt be able to use the other promises you passed



---

## Confusion Points ❓
- It is a little bit hard to get some things like the parallel executions but is ok
- Promise.allSettled

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

**1. How do you catch errors with async/await?**
-With try catch blocks
 
**2. What does `Promise.all()` do if one Promise rejects?**
-throws the error and go to catch block in a try catch 


**4. What's one thing I still don't fully understand?**
-promise.allSettled

**5. The "ELI5" Summary**
-Imagine you want to go to a race when all will start at the same time and the race will end if all went to the goal line.
---

## Next Session Focus
- promise.allSettled, fetch

---

## Reflection

**What went well:**
- Understood and practice theorically async await promise.all

**What was hard:**
- understanding that promise.all fails even if 1 of the promises is rejected

**Time management:**
- Did I stay focused? TEs

**Energy level:** 7/10
**Confidence on this topic:** 8/10

---