
const BASE_URL = "https://jsonplaceholder.typicode.com";
const USERS_API = "https://jsonplaceholder.typicode.com/users";
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
// 1. Fetch all posts and log them
async function getAllPosts() {
    const response = await fetch(BASE_URL + "/posts");
    const posts = await response.json();

    return posts
}

// 2. Fetch a single post by ID
async function getPost(id) {
    const response = await fetch(BASE_URL + `posts/${id}`)
    return await response.json();
}

// 3. Handle 404 - what happens when you fetch /posts/9999?
async function getPostSafe(id) {
    // Check response.ok, return null if not found
    const response = await fetch(BASE_URL + `posts/${id}`);

    if (!response.ok) return null;

    return response.json();

}

async function getAllPosts() {
    const response = await fetch(`${POSTS_API}`);
    if (!response.ok) throw new Error(`Post request failed with status${response.status}`)
    return response.json();
}

// 4. Fetch user and then their posts (sequential)
async function getUserWithPosts(userId) {
    // Your code

    try {

        const posts = await getAllPosts();

        const postByUser = posts.filter((post) => post.userId === userId)

        return postByUser
    } catch (error) {
        console.error(`Failed to load posts for user ${userId}:`, error.message);

        return [];
    }

}