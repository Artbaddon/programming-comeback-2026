
// Build:

// One <div> with number 0

// Two buttons:

// +

// -

// Rules:

// One single event listener on a parent container

// Use event.target

// Counter cannot go below 0

// No inline onclick

// No multiple listeners

// Concepts:

// Bubbling

// Conditional logic via matches() or classList.contains()

// Minimal state

// Do it clean.
// If it’s trivial, I increase difficulty.

const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const baseNumber = document.getElementById("number");
let actualNum = Number(baseNumber.textContent);

addBtn.addEventListener("click", () => {
    if (actualNum >= 0) {
        actualNum++;
        baseNumber.textContent = actualNum.toString();
    }
})

removeBtn.addEventListener("click", () => {
    if (actualNum > 0) {
        actualNum--;
        baseNumber.textContent = actualNum.toString();
    }
})
