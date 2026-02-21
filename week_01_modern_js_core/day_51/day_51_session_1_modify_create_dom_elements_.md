# Session 1 And 2: DOM Modify and create elements  - Practice
**Date:** Sunday Feb 21 2026
**Time:** 10:05 : 10:55 | 11:12 : 12:02
**Duration:** 50 minutes
**Review Date:** Feb 24 (Spaced Repetition)


---
## Pre-Session Questions (Answer BEFORE you start)
1. How do you change an element's text?
2. How do you change an element's attributes?
3. How do you create a new element?
4. How do you add it to the page?

**My guesses:**
- With the property element.textContent
- With element .setAttribute
- You create a new element using new Element 
- You add it with append to a parent container
---

## Resources Used 📚
- [JavaScript.info: Modifying Document](https://javascript.info/modifying-document) (15 min)

---

## Notes (Write in MY words during session)

### Create elements on the HTML

**What it is:**
- Is a way that JavaScript DOM API have to create new elements in the HTML.


**Why it exists:**
- Because if you want to add more advanced logic like a "live" feeling to your page you may need to create HTML tags that do not exist in the html yet.

**How it works:**
- There are two methods to create Dom Nodes eg.
     -document.createElement(tag):
         This creates a new element node with the given tag.
     -document.createTextNode(text)
           This creates a text nodes with te given text.

**Example:**
```javascript
const newDiv = document.createElement('div');
const newTextNode document.createTextNode(" Hello World")
```

**When to use:**
-When you want to create a new Items in a todo list
---

### Insert/modify elements on the HTML

**What it is:**
- There are a set of methods that JavaScript DOM API have for modifiying, and inserting elements that we create to other tags in the HTML.

**Why it exists:**
- Because you may need to add new elements when doing a more dynamic web page.

**How it works:**
-For inserting we have:
    -node.append(...nodes or strings) append nodes or strings at the end of node.
    -node.prepend(...nodes or strings) insert nodes or strings at the beginning of node.
    -node.before(...nodes or strings) insert nodes or strings at the beginning of node(before the tag)
    -node.after(...nodes or strings) insert nodes or strings at the after  node(after the tag not inside)
    -node.replaceWith(...nodes or strings) replace nodes with the given nodes or strings.
    -node.insertAdjacentHTML(where, html)
        works similar to the node.append methods but this one can insertHTML
            we use this keywords:
            "beforebegin" – insert html immediately before elem,
            "afterbegin"  – insert html into elem, at the beginning,
            "beforeend"   – insert html into elem, at the end,
            "afterend"    – insert html immediately after elem.
-For removing we have node.remove()
-For cloning we have:
-Element.cloneNode(true) creates a "deep" clone of the element with all the attributes and subelements. 
-If we call elem.cloneNode(false), then the clone is made without child elements.

**Example:**
```html
<ol id="ol">
    <li>0</li>
    <li>1</li>
    <li>2</li>
</ol>
<div id="div"></div>
<div class="deletemePlease"></div>
<script>
    ol.before("before"); //Insert string "before" before <ol>
    ol.after("after"); //Insert string "after" after <ol>

    let liFirst = document.createElement("li");
    liFirst.innerHTML = "prepend";
    ol.prepend(liFirst);

    let liLast = document.createElement("li");
    liLast.innerHTML = "append";
    ol.append(liLast);

    div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
    div.insertAdjacentHTML('afterend', '<p>Bye</p>');
    const deleteElement = document.querySelector('.deletemePlease')
    setTimeout(()=>document.deleteNode(),1000)
</script>

```

**When to use:**
-Adding more items to a list, if you want to show alerts, notifications.

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

**1.  What's the difference between `textContent` and `innerHTML`?**
[Your answer from memory]

**2. How do you toggle a class?**
[Your answer from memory]

**3. How do you change multiple styles at once?**
[Your answer from memory]

**4. What's the difference between `textContent` and `innerHTML`?**
[Your answer from memory]

**5.What's the difference between `append()` and `appendChild()`?**
[Honest answer]

**6. Why is using `innerHTML` potentially dangerous??**
[Honest answer]

**7. How do you remove an element from the DOM?**
[Honest answer]
**8. What's one thing I still don't fully understand?**
[Honest answer]
**9. The "ELI5" Summary**
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