
// DOM children
// importance: 5
// Look at this page:

// <html>
// <body>
//   <div>Users:</div>
//   <ul>
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
// </body>
// </html>
// For each of the following, give at least one way of how to access them:

// The <div> DOM node?
const div = document.body.firstElementChild
// The <ul> DOM node?
const ul = div.nextElementSibling
// The second <li> (with Pete)?
const peteUl = ul.lastElementChild

// Select all diagonal cells
// importance: 5
// Write the code to paint all diagonal table cells in red.

// You’ll need to get all diagonal <td> from the <table> and paint them using the code:

// // td should be the reference to the table cell
// td.style.backgroundColor = 'red';

let table = document.body.firstElementChild;
const maxRows = table.rows.length;

for (let i = 0; i < maxRows; i++) {
    table.rows[i].cells[i].style.backgroundColor = "red";
}