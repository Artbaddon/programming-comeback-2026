
// Build:

// An <input>

// An Add button

// A <ul>

// Requirements:

// Each click on Add creates a <li> with the input value.

// Each <li> must contain:

// The text

// A small Delete button inside it

// Use one single event listener on the <ul> to handle all delete actions (event delegation).

// Do not attach listeners to each <li>.

// Concepts: bubbling, event.target, matches(), DOM traversal.

// When you're done, show me your solution and I’ll review it strictly.
const mainInput = document.getElementById("main-input")
const listContainer = document.getElementById("list")
const addButton = document.getElementById("add-btn");

addButton.addEventListener("click", addToList)
listContainer.addEventListener("click", deleteItem)

function addToList(event) {
    event.preventDefault();
    const value = mainInput.value
    if (!value) {
        alert("input cant be empty")
        return;
    }
    const li = document.createElement("li")
    li.innerHTML = `${value} <button type="button" class="deleteBtn">X</button>`;
    listContainer.append(li);

}
function deleteItem(event) {
    if (event.target.matches("button")) {
        const li = event.target.parentNode;
        listContainer.removeChild(li)
    }

}