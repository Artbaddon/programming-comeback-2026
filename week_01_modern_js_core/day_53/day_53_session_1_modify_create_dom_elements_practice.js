
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
function sortName(table) {
    const table1 = document.getElementById(table);
    const tableBody = table1.querySelector("tbody");
    const tableHeader = table1.querySelectorAll("th");
    const tableRows = tableBody.querySelectorAll("tr");

    let nameRowIndex = Array.from(tableHeader).findIndex((ele) => ele.innerText.toLowerCase() === "name");

    const sortedRows = Array.from(tableRows).sort((rowA, rowB) => {
        return rowA.children[nameRowIndex].textContent.localeCompare(rowB.children[nameRowIndex].textContent, { sensitivity: 'base' })
    })



    tableBody.append(...sortedRows)


}