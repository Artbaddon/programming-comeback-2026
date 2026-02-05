
// Fetch data from https://jsonplaceholder.typicode.com/posts/1

// Convert the response to JSON

// Log the post title

const BASE_URL = " https://jsonplaceholder.typicode.com"
async function getPost(id) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${id}`);

        if (!response.ok) throw new Error(response.status)
        const result = await response.json();

        console.log(result.title)
    } catch (error) {
        console.error(error)
        
    }


}