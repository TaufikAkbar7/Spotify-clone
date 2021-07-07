import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Dashboard = ({ code }) => {

    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()
    
    useEffect(() => {
        axios.post("http://localhost:4000/login", {
            code
        })
        .then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            {console.log(res)}
            window.history.pushState({}, null, "/")
        })
        .catch(() => {
            window.location = "/"
        })
    }, [code])

    console.log(code)
    return (
        <div>
            {accessToken}
        </div>
    )
}

export default Dashboard
