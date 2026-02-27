
// Hide on click
// importance: 5
// Add JavaScript to the button to make <div id="text"> disappear when we click it.
const btn = document.getElementById("btn");
const text = document.getElementById("text");
const btnHide = document.getElementById("btn2");
btn.addEventListener("click", () => {
    text.style.display = "none"
})

btnHide.addEventListener("click", function (event) {
    event.target.style.display = "none"
})


// solution
// Hide self
// importance: 5
// Create a button that hides itself on click.

// Like this:

// solution
// Which handlers run?
// importance: 5
// There’s a button in the variable. There are no handlers on it.

// Which handlers run on click after the following code? Which alerts show up?

// button.addEventListener("click", () => alert("1"));

// button.removeEventListener("click", () => alert("1"));

// button.onclick = () => alert(2);
// solution