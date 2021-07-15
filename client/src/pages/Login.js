import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const code = new URLSearchParams(window.location.search).get("code")

export const Login = () => {
    
    const scopes = [
        "user-read-email",
        "user-read-private",
        "user-library-read",
        "user-library-modify",
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-read-recently-played"
    ]
    const redirectUrl = "http://localhost:3000"
    const authEndPoint = "https://accounts.spotify.com/authorize"
    const client_id = "6c7d7ffb3ab74ab7a9bf265960469268"
    const loginUrl = `${authEndPoint}?client_id=${client_id}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=code&show_dialog=true`
    const history = useHistory();

    useEffect(() => {
        if(!code){
            window.location.href = loginUrl
        }else{
            history.push("/dashboard")
        }
    }, [history])

    return (
        <div className="min-h-screen flex flex-col justify-center items-center container mx-auto">
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <a href={loginUrl} className="bg-green-500 mt-12 text-white font-bold py-2 px-4 rounded-full">
                Login Spotify
            </a>
        </div>
    )
}