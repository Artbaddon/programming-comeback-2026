
// Exercise: The User Card Generator
// The Goal: Fetch a list of users from a public API and log their names and emails to the console.

// The API: https://jsonplaceholder.typicode.com/users

// Your Tasks:

// Use the fetch() API to make a GET request to the URL above.

// Convert the response into JSON format.

// Iterate through the array of users.

// Log a string for each user in this format: User: [Name] - Email: [Email].
async function userCardGenerator(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Network response was not ok');

        const users = await response.json();

        for (const user of users) {
            const { name, email } = user;

            console.log(`User: ${name}, email:${email}`)
        }

    } catch (error) {
        console.error(error)
    }
}