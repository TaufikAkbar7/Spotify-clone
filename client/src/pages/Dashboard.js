import React, { useState, useEffect } from 'react'
import useAuth from '../utils/useAuth'
import spotifyApi from "spotify-web-api-node"
import "./style.css"

const Dashboard = ({ token }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [recentlyPlayed, setRecentlyPlayed] = useState({})
    const accessToken = useAuth(token)
    const s = new spotifyApi({
        clientId: "6c7d7ffb3ab74ab7a9bf265960469268"
    })

    useEffect(() => {
        if (!accessToken) return console.log("cannot get access token")
        s.setAccessToken(accessToken)

        s.getMe()
            .then(res => {
                setUser(res)
                setLoading(false)
            })
            .catch(err => console.log(err))
        
        //recentTracks
        s.getMyRecentlyPlayedTracks({ limit: 5 })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [accessToken])

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="container mx-auto bg-red-500">
                {
                    loading ? (
                        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                        </div>

                    ) : user ? (
                        <div className="flex flex-col justify-center items-center">
                            {user.body.images.map(img => (
                                <img key={img.url} src={img.url} alt="foto" width="150" height="150" />
                            ))}
                            <span>{user.body.display_name}</span>
                            <span>{user.body.followers.total}</span>
                        </div>
                    ) : (
                        <h2>Error</h2>
                    )
                }
            </div>
        </div>
    )
}

export default Dashboard
