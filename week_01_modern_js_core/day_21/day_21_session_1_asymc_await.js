const DB = {
    users: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }],
    posts: [{ userId: 1, content: "Promises are cool!" }]
};
// 1. Convert this to async/await:
getUser(1)
    .then(user => getPosts(user.id))
    .then(posts => console.log(posts));


async function getUser(id) {
    return DB.users[id]
}

async function getPosts(userID) {
    return DB.posts[userID];
}

async function main() {
    let user = await getUser(1);
    let userPost = await getPosts(user.id)
    console.log(userPost)
}
// 2. Create an async function that waits 1 second then returns "Hello"
async function wait() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hello"), 1000);
    });
}
async function main() {
    let message = await wait();
    console.log(message)
}


// 3. What does this return?
async function test() {
    return 42;
}
console.log(test()); // What type is this?
//A promise

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}
async function loadJson(url) {
    let response = await fetch(url)

    if (!response.ok) {
        throw new Error(response.status)
    }
    return await response.json();
}
// Rewrite using async/await
// Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:
loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404

