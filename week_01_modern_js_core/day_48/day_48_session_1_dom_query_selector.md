# Session 1: DOM Manipulation
**Date:** Tuesday Feb 17 2026
**Time:** 19:45 : 20:45
**Duration:** 60 minutes
**Review Date:** Feb 20 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. What is the DOM?
2. What's the difference between `querySelector` and `getElementById`?

**My guesses:**
- DOM or Document Object model is a theorical structure that is like a tree to represent all the tags in the HTML as objects, it is a tree becuase it starts from window, then goes to document, etc you have to travel the parents first
- Query selector uses CSS selectors so you can use them to select and getElementByid let you use the id of a document so is more specific.

---

## Resources Used 📚
- [JavaScript.info: Searching Elements](https://javascript.info/searching-elements-dom) (15 min)

---

## Notes (Write in MY words during session)

### Searching: getElement, querySelector

**What it is:**
-They are searching methods for DOM objects
    -document.getElementByID:
        If an element has the id attribute we can get the element.
    -querySelectorAll:
        Is one of the most versatile methods, elem.querySelectorAll(css) returns all elementens inside elem matching the giving CSS Selector.
    -querySelector:
        It works similar to querySelectorAll but the main difference is that it will return only the first item that it found given the CSS Selector is like a document.querySelectorAll()[0].
    -matches
        It doesnot not look for anything, but it chekcs if elem matches the given CSS-selector if it does, return true or false.
    -closest
        -THe method elem.closesest(css) looks for the nearest ancestor that matches the CSS, in other words the method check each of paretns and if they match the selector and return the one that met the selector.
    There are some other methods for look for notes by tag, class etc:
    -getElementsBy
        -elem.getElementsByTagName(tag): looks forelements with the given tag and returns the collectio of them, the tag parameter can also be a star for any tags.
        -elem.getElementsByClassName(className) returns elements with the given name attribute.

**Why it exists:**
-Because you sometime need to access more speficic or arbitrary element in the page and not the first or last.

**How it works:**
[Mechanism/process]

**Example:**
```html
    <div id= "elem">
        <div id="elem-content"></div>
    </div>
    <ul>
        <li>The</li>
        <li>test</li>
    </ul>
    <ul>
        <li>has</li>
        <li>passed</li>
    </ul>
    <a href="http://example.com/file.zip">...</a>
    <a href="http://ya.ru">...</a>
    <h1>Contents</h1>
    <div class="contents">
        <ul class="book">
            <li class="chapter">Chapter 1</li>
            <li class="chapter">Chapter 2</li>
        </ul>
    </div>
    <script>
        let elem = document.getElementById("elem");

        elem.style.background = "red";
        //querySelectorAll()

        let elements = document.querySelectorAll("ul > li:last-child");

        for(let elem of elements){
            alert(elem.innerHTML);
        }
 
        for(let elem of document.body.children){
            if(elem.matches('a[href$="zip"]')){
                alert ("The Archive reference" + elem.href)
            }
           
        }

        let chapter = document.querySelector(".chapter");
        alert(chapter.closest(".book"));
        alert(chapter.closest(".contents"));

        alert(chapter.closest("h1"))

        let divs = document.getElementsByTagName("div");
    </script>
```

**When to use:**
-Accesing a form data and validate it

---


## Aha Moments 💡


## Confusion Points ❓

---

## Daily Exercises ✅

1. [ ] **Exercise 1:** [Description]
2. [ ] **Exercise 2:** [Description]
3. [ ] **Exercise 3:** [Description]

**My Solution Code / Notes:**
```javascript
// 1. Select the header by ID
const header = document.getElementById("main-header");

// 2. Select the first nav link
const firstNav = document.querySelector("nav")
// 3. Select ALL nav links
const allNavs = document.querySelectorAll("nav")
// 4. Select all articles with class "post"
const allArticles = document.querySelectorAll("article.post")
// 5. Select the h1 inside the header
const headerH1 = header.querySelector("h1")
// 6. Log the text of each nav link
allNavs.forEach((ele) => console.log(ele.innerText))

// Exercise 1: The Breadcrumb Navigator
// Select the .status-icon using querySelector.
const statusIcon = document.querySelector(".status-icon")
// From that icon, find the nearest ancestor that is a div with the class breadcrumb-container using .closest().
const breadcrumbContainer = statusIcon.closest("div.breadcrumb-container")
// Check if that ancestor has the attribute data-depth="0" using .matches(). Log the result.
const hasAttribute = breadcrumbContainer.matches('div[data-depth="0"]')

//Exercise 3: Attribute & Pseudo-Selector Hunting
// Using a single querySelectorAll call, find all input elements that are required AND have a name attribute starting with "user_".
const requiredInputs = document.querySelectorAll('input[required][name^="user_"]')
// Use querySelectorAll to find all input elements that are currently disabled or checked.
const checkedOrDisabled = document.querySelectorAll('input[checked], input[disabled]')
// Loop through the results of the first task and change their border color to "red".

requiredInputs.forEach((input) => input.style.borderColor = "red")


{
    // Exercise 4: Deep Search & Filter
    // Get all article tags using getElementsByTagName.
    const allArticles = document.getElementsByTagName("article");
    // Filter that collection (hint: you may need to convert it to an Array) to find only those where the data-category is "finance".
    const finance = Array.from(allArticles).filter(ele => ele.getAttribute("data-category") === "finance")

    // From those "finance" cards, use querySelector to grab the .title and log its text content.
    const financeTitle = finance.map(article =>
        article.querySelector(".title")?.textContent
    );
    console.log(financeTitle)
}

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

**1. What's the difference between `querySelector` and `querySelectorAll`?**
-querySelector returns the first item that meets the css selector, querySelectorAll a collection of items

**2. What does `querySelectorAll` return?**
-A colllection of elements that meet the CSS selector

**3. Can you use CSS selectors like `.class > element`?**
-Yes

**4. What's one thing I still don't fully understand?**

**5. The "ELI5" Summary**
-Imagine that you want to search for the red box with the title toys, you use CSS selectors to search for it

---

## Next Session Focus
- Dom modify

---

## Reflection

**What went well:**
- Understood the selectors and practice how to use them

**What was hard:**
- 

**Time management:**
- Did I stay focused? Yes/No

**Energy level:** 5/10
**Confidence on this topic:** 8/10

---