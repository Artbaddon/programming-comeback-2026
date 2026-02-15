# Session 1 and 2: DOM Manipulation
**Date:** Sunday Feb 15 2026
**Time:** 09:40 : 10:30 | 11:00 - 11:50
**Duration:** 50 minutes | 50 minutes
**Review Date:** Feb 18 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. What is the DOM?
2. What's the difference between `querySelector` and `getElementById`?

**My guesses:**
- DOM or document object model is an API that let us interact with the DOM, all the HTML that we can have in certain web page.
- With querySelector we can select via CSS syntax like we can select all the nodes with the class .card, and with getElementbyId we can only get one item with that id we pass as argument

---

## Resources Used 📚
- [JavaScript.info: Searching Elements](https://javascript.info/searching-elements-dom) (15 min)
---

## Notes (Write in MY words during session)

### DOM

**What it is:**
- The DOM or Document Object Model is a way to represent all page content, is a tree, and every tag is a node or object, these nodes can have parent child relationships.

**Why it exists:**
- It exists because you will need to interact with the page itself if you for example want to create pages with functionalities and not only static ones.

**How it works:**
- Basically every tag in the HTML is an object, so you can access the document that will represent an object with all tags and then you can access for example the body and change the background color.

**Example:**
```javascript
document.body.style.background = "red";
setTimeout(()=>document.body.style.background = "",1000);

// here we change the body background to  red and after 1 second we change it again to nothing.
```

**When to use:**
- When you want some interactivity in your page, when you want to create a toggle button, etc.

---

### Walking the DOM

**What it is:**
- The DOM allow us to do anything with elements an their content but we need to reach the corresponding DOM object first, all operatios on the DOM start with the document obejct, is the main entry point.
**Why it exists:**
- Because the DOM is a tree-like structure so we must access the parents first before accesing the node we want.
**How it works:**
- document is the entry point so if you want to access the body you must use document.body so you access the document object an then the body node:
    Navigating through nodes:
    On top documentElement and body:
        -html = document.documentElement tag: <html></html>
        -body = document.body tag <body></body>
        -head = document.head <head></head>
    Children: childNodes, firstChild, lastChild
    There are two important terms that we normally use to referring speficic relations:
        -Child nodes or children> this are elementes that are direct children in other words are nested exactly in the given one for example head and body are direct childrens of html because they are nested from html only 1 time.
        -Descendats all elements that are nested in the given one, inclduing children, their children etc.

**Example:**
```html
    <html>
        <body>
            <div>Begin</div>

            <ul>
                <li>Information</li>
            </ul>

            <div>End</div>
            
            <script>
                for (let i = 0; i < document.body.childNodes.length; i++){
                    alert(document.body.childNodes[i])// THis will give us Text, Div, text ul, script all the body children
                }
            </script>
        </body>
    </html>
```

**When to use:**
- When you want to access for example a div where you have a list and want to add new list items to it.

---
### DOM Collections

**What it is:**
- When we use childNodes property, it loks like an array but actually is a collection, a special array-like iterable object
**Why it exists:**
- Because when DOM was designed modern js array methods like map or filter didnt exists, also becuase the DOM collections some automaticall  reflect changes in the document, array is static DOM collections can be dynamic.
**How it works:**
- domCollections dont sotre copies but the reference to the root node and the filtering rule, eg all element children and when accesed they re-evalutate or updata lazlily so the collection is a living part of the DOM tree

**Example:**
```javascript
for (let node of document.body.childNodes) {
  alert(node); // shows all nodes from the collection
}
 
```



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