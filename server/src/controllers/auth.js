require("dotenv").config()
const SpotifyWebApi = require("spotify-web-api-node")

exports.authRefreshToken = (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.URL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken,
    })

    spotifyApi
        .refreshAccessToken()
        .then(data => {
            res.status(200).json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn
            })
        })
        .catch(err => {
            console.log(err)
            res.status(400)
        })
}

exports.authLogin = (req, res) => {
    const token = req.body.token
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })

    spotifyApi.authorizationCodeGrant(token)
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in
            })
        })
        .catch((error) => {
            console.log(error)
            res.sendStatus(400)
        })
}