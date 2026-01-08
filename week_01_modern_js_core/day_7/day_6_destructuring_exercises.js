// 1. Extract `lat` and rename it to `latitude`
const user = {
    location: {
        coords: {
            lat: 4.711,
            lng: -74.072
        }
    }
};

let { location: { coords: { lat: latitude } } } = user;

// 2. Extract `theme` from settings.ui.theme, default to "light"
const settings = {
    ui: {}
};

let { ui: { theme = "ligth" } } = settings;
// 3. Inside a loop, extract `id` and `name` from each user
const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Luis" }
];

let idArr = [];
let namesArr = [];

for (let user of users) {

    let { id, name } = user

    idArr.push(id);
    namesArr.push(name)

}

console.log(idArr)
console.log(namesArr)


// 4. Extract `limit` with a default value of 10
const config = {
    limit: undefined
};
let { limit = 10 } = config
// 5. Extract the value of `auth[key]` using computed property name
const key = "token";
const auth = {
    token: "abc123",
    expires: 3600
};
let { [key]: token } = auth;

console.log(token)

// 6. Extract `id` and the second value from `values`
const response = {
    data: [
        {
            id: 99,
            values: [10, 20, 30]
        }
    ]
};
let { data: [{ id, values: [, secondValue] }] } = response

console.log(id, secondValue)
// 7. Extract `username` and rename it to `user`
{
    const profile = {
        info: {
            username: "artbaddon"
        }
    };
    const { info: { username: user } } = profile;
}
// 8. Extract `url`, default to "localhost" if missing
const system = {
    env: {
        prod: {
            url: "https://api.prod.com"
        }
    }
};
const { env: { prod: { url = "localhost" } } } = system;


// 9. Destructure the return value into `cpu` and `memory`
function getStats() {
    return {
        cpu: 70,
        memory: 512
    };
}
const { cpu, memory } = getStats();

// 10. Extract `id` and the first role
{
    const state = {
        session: {
            user: {
                id: 7,
                roles: ["admin", "editor"]
            }
        }
    };
    let { session: { user: { id, roles: [firstRole] } } } = state

    console.log(id, firstRole)
}