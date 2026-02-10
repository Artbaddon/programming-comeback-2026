
// Exercise 1: The Basic GET Fetch
// Goal: Retrieve a list of users from a public API and log their names.

// Task: Use fetch to get data from https://jsonplaceholder.typicode.com/users.

// Requirement: Convert the response to JSON and use .forEach() to log only the name of each user to the console.

// Bonus: Add a .catch() block to handle any network errors.
async function fetchUsers() {
    try {
        const URL = "https://jsonplaceholder.typicode.com/users"
        const response = await fetch(URL);
        if (!response.ok) throw new Error(response.status)

        const users = await response.json()
        users.forEach(element => {
            console.log(element.name)

        });
    } catch (err) {
        console.log(err)

    }

}