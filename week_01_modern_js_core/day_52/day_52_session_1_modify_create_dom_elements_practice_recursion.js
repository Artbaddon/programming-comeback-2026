// Exercise 1 — Reverse a String
// Write a recursive function reverseString("hello") that returns "olleh". No loops, no .reverse().



function reverseString(text) {

    // first call will be = h string[0] + ello 
    if (!text.length) {
        return "";
    }

    return text[0] + reverseString(text.slice(1))

}
// Exercise 2 — Find the Deepest Value
// Given a nested object where every key has either another object or a string as its value, write deepestValue(obj) that returns the string value at the deepest level.
// javascriptdeepestValue({ a: { b: { c: "treasure" } } }) // → "treasure"

const obj = {
    a: {
        b: {
            c: "treasure"
        }
    }
}
function findStringValue(obj) {
    const string = ""
    if (typeof obj === "string") {
        return obj;
    }
    //Loop through object
    for (let key in obj) {
        //Recursive Case
        string = findStringValue(obj[key])
    }
    return string
}
// Exercise 3 — Power Function
// Write power(base, exponent) that computes base^exponent recursively.
// javascriptpower(2, 10) // → 1024
// No Math.pow(), no loops.
function javascriptpower(base, power) {
    if (power <= 0) {
        return 1;
    }
    return base * javascriptpower(base, power - 1)
}

// Exercise 4 — Object Path Checker
// Write hasPath(obj, path) where path is an array of keys. It should return true if that chain of keys exists in the object, false otherwise.
// javascripthasPath({ a: { b: { c: {} } } }, ["a", "b", "c"]) // → true
// hasPath({ a: { b: {} } }, ["a", "x", "c"])         // → false

function hasPath(obj, path) {
    if (!path[0]) return true;


    return obj[path[0]] ? hasPath(obj[path[0]], path.slice(1)) : false

}
// Exercise 5 — Build Nested Object from Array
// Write buildNested(["a", "b", "c", "d"]) that returns a deeply nested object where each key wraps the next.
// javascriptbuildNested(["a", "b", "c", "d"]) // → { a: { b: { c: { d: {} } } } }

// Choose one of two ways of solving this task:

// Create the HTML for the tree and then assign to container.innerHTML.
// Create tree nodes and append with DOM methods.
// Would be great if you could do both.

function createTree(container, data) {
    const containerNode = document.getElementById(container);
    const ul = document.createElement("ul")

    ul.innerHTML = `
                    <li>Fish
                        <ul>
                        <li>trout</li>
                        <li>salmon</li>
                        </ul>
                    </li>
                    <li>Trees
                        <ul>
                        <li>Huge
                            <ul>
                            <li>sequoia</li>
                            <li>oak</li>
                            </ul>
                        </li>
                        <li>Flowering
                            <ul>
                            <li>apple tree</li>
                            <li>magnolia</li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    
                `
    containerNode.appendChild(ul)

}
// P.S. The tree should not have “extra” elements like empty <ul></ul> for the leaves.

// Show descendants in a tree
// importance: 5
// There’s a tree organized as nested ul/li.

// Write the code that adds to each <li> the number of its descendants. Skip leaves (nodes without children).


// Create a calendar
// importance: 4
// Write a function createCalendar(elem, year, month).

// The call should create a calendar for the given year/month and put it inside elem.

// The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> with weekday names: the first day should be Monday, and so on till Sunday.

// For instance, createCalendar(cal, 2012, 9) should generate in element cal the following calendar:


// Colored clock with setInterval
// importance: 4
// Create a colored clock like here:

// Use HTML/CSS for the styling, JavaScript only updates time in elements.


// Insert the HTML in the list
// importance: 5
// Write the code to insert <li>2</li><li>3</li> between two <li> here:

// <ul id="ul">
//   <li id="one">1</li>
//   <li id="two">4</li>
// </ul>


// Sort the table
// importance: 5
// There’s a table:

// <table>
// <thead>
//   <tr>
//     <th>Name</th><th>Surname</th><th>Age</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>John</td><td>Smith</td><td>10</td>
//   </tr>
//   <tr>
//     <td>Pete</td><td>Brown</td><td>15</td>
//   </tr>
//   <tr>
//     <td>Ann</td><td>Lee</td><td>5</td>
//   </tr>
//   <tr>
//     <td>...</td><td>...</td><td>...</td>
//   </tr>
// </tbody>
// </table>
// There may be more rows in it.

// Write the code to sort it by the "name" column.