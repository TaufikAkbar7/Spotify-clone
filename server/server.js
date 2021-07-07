require("dotenv").config()
const express = require("express")
const cors = require("cors")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()
app.use(cors())