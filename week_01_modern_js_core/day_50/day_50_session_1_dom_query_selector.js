
// Select all .toggle buttons.
const toggleBtn = document.querySelectorAll(".toggle");
// Loop through them and add a click event listener (or just simulate the logic).
toggleBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Inside the loop/logic, from the "clicked" button, find its next sibling that is a .content div using .nextElementSibling.
        const nextSibling = btn.nextElementSibling;
    
        // The Challenge: From that same .content div, find the "neighboring" .menu-item (the one above or below it) without using document.querySelector. Use .parentElement and then a sibling method.
        const nextNeighbour = btn.parentElement.nextElementSibling;
        nextNeighbour.style.backgroundColor = "red";


    })
})


