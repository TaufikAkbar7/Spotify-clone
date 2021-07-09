const express = require("express")
const cors = require("cors")
const authRoute = require("./src/routes/auth")

const app = express()
app.use(cors())

//handle body-parser untuk get data dari request
app.use(express.json()); //type JSON

app.use("/", authRoute)


app.listen(4000, () => {
    console.log("server running in port: 4000")
})