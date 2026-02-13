
// Your Task:
// Write a function fetchResilientProfiles(userIds) that takes an array of IDs and follows these strict requirements:

// Parallelism with Limits: Fetch all users in parallel, but you must use Promise.allSettled to ensure that one failure doesn't crash the entire operation.

// The "Race" Timeout: Each individual fetch request must have a timeout of 3 seconds. If the API doesn't respond in time, that specific request should be considered a "Timed Out" failure.

// Custom Headers: You must include a headers object with {'Authorization': 'Bearer dynamic_token_123', 'Content-Type': 'application/json'}.

// Data Transformation & Error Catching:

// If the fetch is successful, return the JSON data.

// If the fetch fails (404, 500, etc.) or times out, return an object: { id: userId, status: 'failed', reason: ErrorMessage }.

// Final Output: The function should return a single array containing all results (both successes and formatted failures).
const BASE_URL = "https://jsonplaceholder.typicode.com/users"
async function fetchResilientProfiles(userIds) {
    const options = {
        signal: AbortSignal.timeout(3000), Headers: {
            'Authorization': 'Bearer dynamic_token_123',
            'Content-Type': 'application/json'
        }
    }
    const userFetchs = userIds.map((id) => {
        return fetch(`${BASE_URL}/${id}`, options)
    })


    const responses = await Promise.allSettled(userFetchs)
    const result = []

    let i = 0
    for (const response of responses) {

        if (response.status === 'rejected') {
            result.push({ "id": userIds[i], "status": 'failed', "reason": response.status });
            continue;
        }
        const user = await response.value.json()
        result.push(user)


    }

    return result;

}
fetchResilientProfiles([1, 2, 3])