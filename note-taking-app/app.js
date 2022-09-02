require('dotenv').config();
require("./src/config/dbConnect")

const express = require('express')
const bodyParser = require("body-parser")

const admin = require("./src/router/admin")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", admin)


app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT} server running `)
})