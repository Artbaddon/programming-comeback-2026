// createTextNode vs innerHTML vs textContent
// importance: 5
// We have an empty DOM element elem and a string text.

// Which of these 3 commands will do exactly the same?

// elem.append(document.createTextNode(text)) this
// elem.innerHTML = text  
// elem.textContent = text this


// Clear the element
// importance: 5
// Create a function clear(elem) that removes everything from the element.

// <ol id="elem">
//   <li>Hello</li>
//   <li>World</li>
// </ol>

function clear(elem) {
    elem.innerHTML = ""
}


// Why does "aaa" remain?
// importance: 1
// In the example below, the call table.remove() removes the table from the document.

// But if you run it, you can see that the text "aaa" is still visible.

// Why does that happen?

// <table id="table">
//   aaa
//   <tr>
//     <td>Test</td>
//   </tr>
// </table>

// <script>
//   alert(table); // the table, as it should be

//   table.remove();
//   // why there's still "aaa" in the document?
// </script>
//Because the text of the aaa HTML is wrong so it will be added before the table

// Create a list
// importance: 4
// Write an interface to create a list from user input.

// For every list item:

// Ask a user about its content using prompt.
// Create the <li> with it and add it to <ul>.
// Continue until the user cancels the input (by pressing Esc or via an empty entry).
// All elements should be created dynamically.

// If a user types HTML-tags, they should be treated like a text.
const listContainer = document.getElementById("listContainer");
let userCancelled = false;

while (userCancelled !== true) {
    const userPrompt = prompt("Enter the text for the list item")
    const listItem = document.createElement("li");
    if (userPrompt) {
        listItem.innerText = userPrompt
        listContainer.append(listItem)
    } else {
        userCancelled = true;
    }
}

// Create a tree from the object
// Write a function createTree that creates a nested ul/li list from the nested object.

// For instance:

// let data = {
//   "Fish": {
//     "trout": {},
//     "salmon": {}
//   },

//   "Tree": {
//     "Huge": {
//       "sequoia": {},
//       "oak": {}
//     },
//     "Flowering": {
//       "apple tree": {},
//       "magnolia": {}
//     }
//   }
// };
// The syntax:

// let container = document.getElementById('container');
// createTree(container, data); // creates the tree in the container
// The result (tree) should look like this:

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