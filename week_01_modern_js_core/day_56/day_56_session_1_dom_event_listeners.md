# Session 1 : Events DOM
**Date:** Thursday Feb 26 2026
**Time:** 19:50 : 20:42
**Duration:** 50 minutes
**Review Date:** Mar 1 (Spaced Repetition)


---

## Pre-Session Questions (Answer BEFORE you start)
1. What is an event listener?
2. What is the event object?

**My guesses:**
- An event listener is basically a way that JavaScript DOM API provide us to use actions that you normally do in a web page and do something, for example executing a validation function when clicking send in a form, etc.
- An event object is basically the object that is having the event.

---

## Resources Used 📚
- [JavaScript.info: Browser Events](https://javascript.info/introduction-browser-events) (15 min)
- [Link 2]

---

## Notes (Write in MY words during session)

### Browser Events

**What it is:**
-An event is like a signal that something has happened, all dom nodes generate such signals.

**Why it exists:**
-Because there are sometimes that you'll to do certain things when an user do an action.

**How it works:**
-For this to work, we use event handlers, a function that runs in case of an event. They are a way to run JavScript code in case of user actions, theare are several ways to assign a handler:
    -HTML-attribute: We can set a handler in HTML with an attribute named "on<event>" for example with onclick like here:
```html
    <input value="click-me" onclick="alert('click')" type="button"/>
    <!-- ON click show an alert with the text click-->
     <input type="button" onclick="countRabbits()" value="Count Rabbits!">
     <script>
        function countRabbits() {
            for(let i = 1; i<=3; i++){
                alert("Rabbit number" + i)
            }
        }

     </script>

```
     -Dom property: we assign a handle using a DOM property "on<event>", this work similar to the HTML attribute:
```html
    <input id="elem" type="button" value="Click me"/>

    <script>
        elem.onclick = function(){
            alert("Thank you");
        }
    </script>
```
    -addEventListener: The fundamental problem of the previous ways to assging handlers is that we cant assing multiple to one event, so if we assing to the element two onclick handlers, the last one will overwrite the existing one. Thats why we ussed a suggested alternative way of managing hanlders using the sepecial methods, addEventListeners and removeEventListener, that arent bound by such constraint.
        The syntax is:
```html
    <input id="elem" type="button" value="Click me"/>

    <script>
        element.addEventListener(event, handler, [options]);
        //Event: Event name e.g "click".
        //handler the function handler that has to be even a callback(argument as function) or a function call
        // but inside the callback, you cannot pass a function call as an argument directly
        //options an additional optioal objecst with properties:
            //once: if true, then the lsitener is automatically removed after it triggers.
            //capture: the phase where to hanlde the event.
            //passive> if true, then the handler will not call preventDefault();
    </script>
```       
    -to remove a hanlder we use removeEvenetListener:
```html
    <input id="elem" type="button" value="Click me"/>

    <script>
        function something(){
            alert("something")
        }
        element.addEventListener("click", something);
        element.removeEventListener("click", something);
        //To remove a hanlder we should pass exactly the same function we assigned.
     
```       
**Example:**
```html
  <input id="elem" type="button" value="Click me"/>
  
  <script>
    const elem = document.getElementById("elem");

    elem.addEventListener("click", greet);

    function greet(){
        alert("HELLO")
    }
  </script>
```

**When to use:**
-When user clicks the send button to validate the input, when the dom is loaded to show a dashboard.
---

### [Main Concept 2]

[Same structure as above]

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

1. [x] **Exercise 1:** [Description]
2. [x] **Exercise 2:** [Description]
3. [x] **Exercise 3:** [Description]

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