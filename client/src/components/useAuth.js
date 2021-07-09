import React, { useState, useEffect } from 'react'
import axios from "axios"

const useAuth = (code) => {

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
                console.log(res)
                window.history.pushState({}, null, "/")
            })
            .catch(() => {
                window.location = "/"
            })

        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios
                .post("http://localhost:4000/refresh", {
                    refreshToken,
                })
                .then(res => {
                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn)
                    console.log(res)
                })
                .catch(() => {
                    window.location = "/"
                })
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)
    }, [code, refreshToken, expiresIn])

    // useEffect(() => {

    // }, [])

    return accessToken
}

export default useAuth
