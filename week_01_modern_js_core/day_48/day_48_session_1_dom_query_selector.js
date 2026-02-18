// 1. Select the header by ID
const header = document.getElementById("main-header");

// 2. Select the first nav link
const firstNav = document.querySelector("nav")
// 3. Select ALL nav links
const allNavs = document.querySelectorAll("nav")
// 4. Select all articles with class "post"
const allArticles = document.querySelectorAll("article.post")
// 5. Select the h1 inside the header
const headerH1 = header.querySelector("h1")
// 6. Log the text of each nav link
allNavs.forEach((ele) => console.log(ele.innerText))

// Exercise 1: The Breadcrumb Navigator
// Select the .status-icon using querySelector.
const statusIcon = document.querySelector(".status-icon")
// From that icon, find the nearest ancestor that is a div with the class breadcrumb-container using .closest().
const breadcrumbContainer = statusIcon.closest("div.breadcrumb-container")
// Check if that ancestor has the attribute data-depth="0" using .matches(). Log the result.
const hasAttribute = breadcrumbContainer.matches('div[data-depth="0"]')

//Exercise 3: Attribute & Pseudo-Selector Hunting
// Using a single querySelectorAll call, find all input elements that are required AND have a name attribute starting with "user_".
const requiredInputs = document.querySelectorAll('input[required][name^="user_"]')
// Use querySelectorAll to find all input elements that are currently disabled or checked.
const checkedOrDisabled = document.querySelectorAll('input[checked], input[disabled]')
// Loop through the results of the first task and change their border color to "red".

requiredInputs.forEach((input) => input.style.borderColor = "red")


{
    // Exercise 4: Deep Search & Filter
    // Get all article tags using getElementsByTagName.
    const allArticles = document.getElementsByTagName("article");
    // Filter that collection (hint: you may need to convert it to an Array) to find only those where the data-category is "finance".
    const finance = Array.from(allArticles).filter(ele => ele.getAttribute("data-category") === "finance")

    // From those "finance" cards, use querySelector to grab the .title and log its text content.
    const financeTitle = finance.map(article =>
        article.querySelector(".title")?.textContent
    );
    console.log(financeTitle)
}
