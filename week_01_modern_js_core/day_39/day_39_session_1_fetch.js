
// Use the fetch() API to call this endpoint: https://jsonplaceholder.typicode.com/users/1

// Validate the response: Check if response.ok is true. If not, throw an error.

// Parse the JSON: Use the .json() method.

// Display the data: Once the data is received, log the following format to the console:

// "User: [Name] | Email: [Email] | City: [City]"


async function fetchUserData() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';

    // Your code here:
    // 1. fetch(url)...
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.status)
        const { username, email, address: { city } } = await response.json();
        console.log(`User: ${username} | Email: ${email} | City: ${city}`)
    } catch (error) {
        console.error(error)
    }


};

fetchUserData();