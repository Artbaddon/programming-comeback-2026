
// Test data (use for all exercises)
const USERS_API = "https://jsonplaceholder.typicode.com/users";
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
const TODOS_API = "https://jsonplaceholder.typicode.com/todos";

// 1. Fetch users and return only emails (with error handling)
async function ex1() {
    const reponse = await fetch(USERS_API);
    const result = await reponse.json();

    return result.map(ele => ele.email)
}
async function mainFunc() {
    const emails = await ex1();
    console.log(emails);
}
mainFunc();



// 2. Fetch posts and group them by userId
async function ex2() {
    // return { 1: [...], 2: [...], ... }
    const response = await fetch(POSTS_API);
    if (!response.ok) throw new Error(response.status);

    const result = await response.json();

    const postByUserID = result.reduce((acc, curr) => {
        acc[curr.userId] = acc[curr.userId] || [];
        acc[curr.userId].push(curr);
        return acc;
    }, {})

    return postByUserID
}
// 3. Fetch users, then fetch their posts (sequential)
async function ex3() {
    // [{ userId, name, posts: [] }]
    const usersResponse = await fetch(USERS_API);
    const postsResponse = await fetch(POSTS_API);

    if (!usersResponse.ok) throw new Error(usersResponse.status);
    const users = await usersResponse.json();

    if (!postsResponse.ok) throw new Error(emailResponse.status);
    const posts = await postsResponse.json();

    const postByUser = users.map((user) => {
        return {
            id: user.id,
            posts: posts.filter(post => post.userId === user.id)
        }
    })

    return postByUser


}

// 4. Same as ex3 but parallelize post fetches
async function ex4() {
    // Promise.all required
    const endpoints = [POSTS_API, USERS_API]

    const [postResult, userResult] = await Promise.all(endpoints.map(async url => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
        return await res.json();
    }))


    return userResult.map(user => {
        return {
            id: user.id,
            name: user.name,
            posts: postResult.filter((post) => post.userId === user.id)
        }
    })

}

// 5. Fetch todos and return only completed ones, sorted by title
async function ex5() {
    // TODO
    const res = await fetch(TODOS_API);

    if (!res.ok) throw new Error(res.status);

    const todos = await res.json();
    const completedTodos = todos.filter((todo) => todo.completed)

    return completedTodos;
}

// 6. Retry fetch up to 3 times before failing
async function fetchWithRetry(url, retries = 3) {
    // TODO
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response failed with status ${response.status}`)
        }
    } catch (error) {
        if (retries === 0) {
            throw error
        }

        return fetchWithRetry(url, retries - 1)
    }
}

// 7. Timeout a fetch after 2 seconds
async function fetchWithTimeout(url, ms) {
    // AbortController
}

// 8. Fetch users + todos and attach todos to each user
async function ex8() {
    // [{ id, name, todos: [] }]
    const endpoints = [TODOS_API, USERS_API]

    const [todosResult, userResult] = await Promise.all(endpoints.map(async url => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
        return await res.json();
    }))


    return userResult.map(user => {
        return {
            id: user.id,
            name: user.name,
            todos: todosResult.filter((todo) => todo.userId === user.id)
        }
    })
}

// 9. Concurrency limit = 2 for fetching user posts
async function ex9() {
    // queue + await
}

// 10. Cache fetch results (same URL → no new request)
function createCachedFetcher() {
    // return async function fetcher(url)
}