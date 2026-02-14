
// 1. Promise Combinators (all, allSettled, race)
// Challenge A: The "Critical Dependency" (Promise.all)
// Write a function loadDashboard(userId) that fetches three things: userProfile, userSettings, and userPermissions.

// The Twist: If any of these fail, the entire dashboard is unusable. You must catch the error and return a specific message: "Dashboard failed to load due to missing critical data: [Error Name]".

// Bonus: Destructure the results directly in the .then() or after await.
const BASE_URL = "https://jsonplaceholder.typicode.com/"
const USER_URL = BASE_URL + "users"
const PERMISSIONS_URL = BASE_URL + "userPermissions"
const SETTINGS_URL = BASE_URL + "userSettings"
async function loadDashboard(userId) {
    try {
        const [userResponse, permissionsResponse, settingsResponse] = await Promise.all([fetch(`${USER_URL}/${userId}`), fetch(`${PERMISSIONS_URL}/${userId}`), fetch(`${SETTINGS_URL}/${userId}`)])
        if (!userResponse.ok || !permissionsResponse.ok || !settingsResponse.ok) {
            const failedStatus = [userResponse, permissionsResponse, settingsResponse].find(r => !r.ok).status;
            throw new Error(failedStatus);
        }
        const [profile, permissions, settings] = [
            userResponse.json(),
            permissionsResponse.json(),
            settingsResponse.json()
        ]

        return { profile, permissions, settings }

    } catch (err) {
        throw `Dashboard failed to load due to missing critical data: ${err.message}`;
    }
}

