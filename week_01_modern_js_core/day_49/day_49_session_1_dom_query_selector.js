
// Exercise 7: The "Scoping" Challenge
// Difficulty: Hard
// Goal: Master the difference between searching from the document versus searching from a specific element (Scoped Search).

// HTML:

// HTML
// <div id="section-1" class="container">
//   <span class="highlight">Inner 1</span>
//   <div class="sub-content">
//      <span class="highlight">Deep Inner 1</span>
//   </div>
// </div>

// <div id="section-2" class="container">
//   <span class="highlight">Inner 2</span>
// </div>
// Task:

// First, use document.querySelectorAll(".highlight"). How many elements does it find?
const highlight = document.querySelectorAll('.highlight')
// Now, select #section-1 specifically using getElementById.
const firstSection = document.getElementById("section-1")
// Using that specific element variable (not document), search for .highlight.
const highlight2 = firstSection.querySelectorAll(".highlight")
// The Logic Test: Explain (or code a check) why using scopedElement.querySelector(".highlight") is faster and safer in a large application than always using document.
//That happens because you already had the scope of the first element so you dont have to look up at all the document to get the one that you need but in the actual element
// Use .matches(".container") on the parent of "Inner 2" to verify its identity.
const doc = document.querySelectorAll("#section-2 > .highlight").matches(".container")