import React, { useState, useEffect } from 'react'
import useAuth from './useAuth'
import spotifyApi from "spotify-web-api-node"

const spotify = new spotifyApi({
    clientId: "eedbd8e279954c58970d31a974442922"
})

const Dashboard = ({ code }) => {

    const accessToken = useAuth(code)

    useEffect(() => {
        if(!accessToken) return
        spotify.setAccessToken(accessToken)
    }, [accessToken])

    return (
        <div>
            <p>{accessToken}</p>
        </div>
    )
}

export default Dashboard
