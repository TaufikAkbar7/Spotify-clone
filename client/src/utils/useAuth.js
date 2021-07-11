import { useState, useEffect } from 'react'
import axios from "axios"

const useAuth = (token) => {

    const [accessToken, setAccessToken] = useState()
    // const [refreshToken, setRefreshToken] = useState()
    // const [expiresIn, setExpiresIn] = useState()
    
    useEffect(() => {
        axios.post("http://localhost:4000/login", {
            token
        })
            .then(res => {
                setAccessToken(res.data.accessToken)
                // setRefreshToken(res.data.refreshToken)
                // setExpiresIn(res.data.expiresIn)
                window.history.pushState({}, null, "/")
            })
            .catch((err) => {
                console.log(err)
            })

    }, [token])

    // useEffect(() => {
    //     if (!refreshToken || !expiresIn) return
    //     const interval = setInterval(() => {
    //         axios
    //             .post("http://localhost:4000/refresh", {
    //                 refreshToken,
    //             })
    //             .then(res => {
    //                 setAccessToken(res.data.accessToken)
    //                 setExpiresIn(res.data.expiresIn)
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //     }, (expiresIn - 60) * 1000)

    //     return () => clearInterval(interval)
    // }, [refreshToken, expiresIn])

    return accessToken
}

export default useAuth
