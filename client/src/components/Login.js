import React from 'react'
import { loginUrl } from "./spotify"
const Login = () => {
    return (
        <div>
            <a href={loginUrl} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Login Spotify
            </a>
        </div>
    )
}

export default Login
