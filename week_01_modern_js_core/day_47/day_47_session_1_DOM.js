
// Exercise 1: The "Theme Toggler"
// Goal: Practice class manipulation and basic event listening.

// The HTML:

// HTML
// <div id="app" class="light-theme">
//     <h1>Welcome to the App</h1>
//     <p>Click the button to change the vibe.</p>
//     <button id="theme-btn">Toggle Dark Mode</button>
// </div>
// The Challenge:

// Select the button and the div with the id app.
const div = document.getElementById("app")
const button = div.lastElementChild

button.addEventListener("click",()=>{
    if(div.classList.contains("light-theme")){
        div.classList.remove("light-theme")
        div.classList.add("dark-theme")
    }
    if(div.classList.contains("dark-theme")){
        div.classList.remove("dark-theme")
        div.classList.add("light-theme")
    }
})
// Add a click event listener to the button.

// When clicked, toggle a class called dark-theme on the div.

// Bonus: Change the button text to "Switch to Light Mode" when dark mode is active, and vice versa.