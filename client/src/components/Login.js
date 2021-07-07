import React from 'react'

const Login = () => {

    const api_url = "https://accounts.spotify.com/authorize?client_id=eedbd8e279954c58970d31a974442922&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

    return (
        <div>
            <a href={api_url} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Login Spotify
            </a>
        </div>
    )
}

export default Login
