# Session 1: Destructuring, spread and rest
**Date:** Tuesday Jan 6 2026
**Time:** 19:00 : 19:50
**Duration:** 50 minutes
**Review Date:** Jan 9 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. What is destructuring?
2. Why would you want to "unpack" an array?

**My guesses:**
- Destructuring is taking some values and assign from an array or object and assign them to variables.
- Because you sometimes only need to take spefic data from obj or array and not the whole thing.

---

## Resources Used 📚
- [JavaScript.info: Destructuring](https://javascript.info/destructuring-assignment) (15 min)


---

## Notes (Write in MY words during session)

### Destructuring assignment Arrays

**What it is:**
- Is a special syntax that allow us to "unpack" arrays or objects into variables. It is just a shorter way write it.
- It has some peculiarities like you can, ignore elements of un array using ",".
- This assignment also works with any iterable on the right side.
- In the left side you can use any assignable, variables, attributes of an object etc.

  
**Why it exists:**
- Because you sometimes only need certain variables and not the whole array or orbject.
**How it works:**
-It works by iterating over the right value, its kind of a syntax sugar of calling for of, over the value of the right side of = and assigning the value

**Example:**
```javascript
// Destructuring an array:
let arr = ["Quincy", "Jones"];

//Destructuring assignment
//Sets firstName = arr[0]
//and surnane = arr[1]

let [firstName, surname] = arr

alert(firstName); //Quincy
alert(surname); //Jones

//An example using array returning methods like split:
let fullName = "John Marston";
let [firstName, surname] = fullName.split(" ");

alert(firstName)// John
alert(surname);// Marston

//ignore an entry using comma

let gamesArr = ["Dragon Quest III", "Final Fantasy X", "Terraria", "Fallout 4"];

let [actualGame, , favoriteGame, notPlayed ] = gamesArr;

console.log(`Actual game ${actualGame}, favorite game ${favoriteGame}, Game i havent played yet ${notPlayed}`)
// Works with any iterable
let [a, b, c ]= "abc";//["a", "b", "c"] because in js a string is iterable like an array is an array of characters.
// Example using destructuring to loop over the keys and values of an object:
let user = {
    name : "Victor",
    age : "24",
    city : "London"
}

for (let [key, value] of Object.entries(user)) {

    console.log(`The ${key} is ${value}`)
}

//We can also swap variable with this

let guest = "Jonah";
let admin = "Jesus";

[guest, admin] = [admin, guest];
alert(`${guest} ${admin}`)
// We can also use the rest ... syntax to indicate that you will take everything from that point for example:
let albums = ["Rock transgresivo", "Somos unos Animales", "Deltoya", "Donde están mis amigos", "Ágila"]
let [firstAlbum, secondAlbum, chaosEra, ...theRest] = albums;
//here we are taking only the first 3 items and the rest items will be in the arra called "theRest" because we used the rest function.

// Other thing we can do in this case is having default values in case that the array we are destructuring doesnt have the item we assign:
let user1 = {
    rol : "Anonymous";
}
\let [firstName = "Guest"]  = user1;
//Default can be more complex expressions or even function calls, and they are evaluated only if the value is not provided

let [name1 = prompt('name '), surname = prompt("surname?")] = ["Julius"];

```

**When to use:**
-  when you have need to only take the username and role of the user object you use destructuring to not use innecesary data in that moment.
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

**1. How do you skip elements in array destructuring?**
- You skip by placing , in the assignment left part, example = let [a, ,c] = "abc"


**2. What does `const [first, ...rest] = arr` do?**
- it assign the first item of the array to a variable and takes the rest to an array.

**3.  Write the swap pattern from memory: swap `a` and `b` using destructuring.**
```javascript
let a = 1;
let b = 2;

[a, b] = [b ,a];

```

**4. What's one thing I still don't fully understand?**
[Honest answer]

**5. The "ELI5" Summary**
- imagine you have a row of boxes, you can open the ones you want and can skip the ones that you dont

---

## Next Session Focus
- [What you'll study next]

---

## Reflection

**What went well:**
- I understood array destructuring and default value

**What was hard:**
- 

**Time management:**
- Did I stay focused? TEs

**Energy level:** 7/10
**Confidence on this topic:** 7/10

---