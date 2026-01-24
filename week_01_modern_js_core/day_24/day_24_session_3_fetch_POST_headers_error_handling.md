# Session 1: Async Errror Handling and Parallel Execution
**Date:** Saturday Jan 20 2026
**Time:** 15:10 : 14:00
**Duration:** 50 minutes
**Review Date:** Jan 27 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. How do you send data with fetch?
2. How do you set headers?

**My guesses:**
- You send data with fetch by sending in the options array the type POST
- by passing them with an array to the second argument of fetch

---

## Resources Used 📚
- [JavaScript.info: Fetch](https://javascript.info/fetch) (15 min)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) (15 min)
---

## Notes (Write in MY words during session)

### Request headers

**What it is:**
-Is bascially an object containing metadata about the request, its called fetch options,we normally pass it as the second argument of the method there are some important ones like:
-method: HTTP method, eg POST,
-body: the request body that can be one of:
    -String: eg JSON encoded.
    -FormData object, to subimit the data as multipart/form-data


**Why it exists:**
-To tell the server what to expect, without headers a server doesnt know if you are sending JSOn, an image or if you have tokens to acces the data.

**How it works:**
-You deifne them in the headers proprety of the fetch options:
    -Content-type: tells the server what are you sending
    -Accept: tells the server what you want back
    -Authorization: sends your credentials(tokens, api keys)

**Example:**
```javascript
    let response = fetch(protectedURL,{
        headers:{
            Authentication:"Secret Token"
        }
    });
    //Content-tpye tells the server the format of the request body:
    const response = await fetch("https://example.org/post",{
        method: "POST",
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify({username: "example"})
    })   

    const loginResponse = await fetch("https://example-api.org/login",{
        method :"POST",
        headers:{
            "Content-type":"application/json",
            "Authorization":"Bearer secret token 123"
        },
        body:JSON.stringify({
            username:"blablabla", 
            password:"secretOverpoweredPassword"
            })
         
    })
```

**When to use:**
-Always when sending a POST or PUT request, to set the content type.
When accesing private thata that requires a login to set Authorization.

---

### HTTP Methods

**What it is:**
-It is like the "verb" that ells the server what action we want to perform

**Why it exists:**
-To keep API organized isntead of havving 5 different URLS you can use one url for example /posts with 5 different methods to do 5 different thing.


**How it works:**
-We specified via the method property on the options:

-GET : READ DATA
-POST : CREATE NEW DATA
-PUT : Update data
-DELETE : remove data

**Example:**
```javascript
//Creating a new post
const response = await fetch(("/posts",{
    method : "POST",
    headers :{ 'Content-Type': "application/json"},
    body : JSON.stringify({ title:"New Post" })
}))
```

**When to use:**

-GET: WHen you just want to see data(loading a feed).
-POST: When the user submits a form. (Creating a posts).
-PUT/PATCH : When the user edits something (changing a password).
-DELETE: When the user clicsk "delete" (removing a photo).
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

**1. [Recall question 1]**
[Your answer from memory]

**2. [Recall question 2]**
[Your answer from memory]

**3. [Recall question 3]**
[Your answer from memory]

**4. What's one thing I still don't fully understand?**
[Honest answer]

**5. The "ELI5" Summary**
[Explain the main concept in ONE simple sentence]

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
- Did I stay focused? Yes/No

**Energy level:** X/10
**Confidence on this topic:** X/10

---