
// Exercise 1: The "Parallel Hydration" Challenge
// Goal: Fetch data from two different endpoints simultaneously and merge them, but handle a partial failure gracefully.

// The Task: Write an async function getUserDashboard(userId).

// Fetch user profile data from https://api.example.com/users/${userId}.

// Fetch user posts from https://api.example.com/posts/${userId}.

// Constraint: Both requests must start at the same time (don't await the first before starting the second).

// Edge Case: If the posts fetch fails, return the profile with an empty array for posts. If the profile fetch fails, the whole function should throw an error.
const BASE_URL = "https://jsonplaceholder.typicode.com";
const PROFILE_URL = `${BASE_URL}/users`;
const POSTS = `${BASE_URL}/posts`;

async function getUserDashboard(userId) {
    try {
        const [profileResponse, postResponse] = await Promise.allSettled([fetch(`${PROFILE_URL}/${userId}`), fetch(POSTS)])
      
        if (profileResponse.status === "rejected") {
            throw new Error(`Error ${profileResponse.reason}, profile not found`)
        }

        const user = await profileResponse.value.json()

        let usersPosts = [];
        if (postResponse.status !== "rejected") {
            const posts = await postResponse.value.json()
            usersPosts = [...posts.filter((ele) => ele.userId === userId)]

        }
        return { ...user, posts: usersPosts }
    } catch (error) {
        console.error(error)

    }
}
