const scopes = [
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
    "user-read-playback-state",
    "user-modify-playback-state"
]
const redirectUrl = "http://localhost:3000"
const authEndPoint = "https://accounts.spotify.com/authorize"
const client_id = "eedbd8e279954c58970d31a974442922"

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        let part = item.split("=")
        initial[part[0]] = decodeURIComponent(part[1])
    
        return initial
    }, {})
}

export const loginUrl = `${authEndPoint}?client_id=${client_id}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
