// Exercise: The "User Dashboard" Sync
// The Scenario:
// You are building a dashboard. You need to fetch a user's profile and their posts at the same time. If the profile fetch fails, the whole page should fail. 
// If the posts fail, you can still show the profile.

// The Task:

// Endpoints:

// User: https://jsonplaceholder.typicode.com/users/1

// Posts: https://jsonplaceholder.typicode.com/posts?userId=1

// Concurrency: Use Promise.all to trigger both fetches at the same time.

// Validation: * Check if response.ok is true for both.

// If the User response is not okay, throw an error immediately.

// Transformation: Parse both responses into JSON.

// Output: Log an object that looks like this:

// JavaScript
// {
//   username: "Leanne Graham",
//   postCount: 10
// }
// Error Handling: Wrap the entire logic in a try/catch block. Ensure that if an error occurs, you log: "Dashboard Load Failed: [Error Message]".
const BASE_URL = "https://jsonplaceholder.typicode.com/";
const USER_URL = BASE_URL + "users";
const POST_URL = BASE_URL + "posts?userId";
async function getDashboard(userId) {
    try {
        const [userResponse, postsResponse] = await Promise.all([fetch(`${USER_URL}/${userId}`), fetch(`${POST_URL}=${userId}`)])
        if (!userResponse.ok || !postsResponse.ok) {
            const errorStatus = [userResponse, postsResponse].find((res) => !res.ok).status
            throw new Error(errorStatus)
        }
        const { name } = await userResponse.json();
        const totalPosts = await postsResponse.json()

        return {
            name,
            postCount: totalPosts.length
        }
    } catch (error) {
        console.error(error)
        throw error
    }

}
console.log(getDashboard(1))