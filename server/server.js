require("dotenv").config()
const express = require("express")
const cors = require("cors")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()
app.use(cors())

//handle body-parser untuk get data dari request
app.use(express.json()); //type JSON

//route
app.post("/login", (req, res) => {

    //controller
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.URL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    })

    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
        res.status(200).json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch((error) => {
        console.log(error)
        res.status(400)
    })
})


const port = 4000
app.listen(port, () => {
    console.log(`server running in port: ${port}`)
})