
// 1. The "First Responder" Strategy (Promise.race) You have three different mirror URLs for a large configuration file. Write a function that fetches from all three simultaneously and returns the data from the fastest one.

async function race(urls) {

    const response = await Promise.race([fetch(urls[0]), fetch(urls[1]), fetch(urls[2])]);

    if (!response.ok) throw new Error(response.staus)

    return response.json()

}