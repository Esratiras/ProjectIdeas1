require('dotenv').config();
require("./src/config/dbConnect")

const express = require('express')
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser');

const errorMiddleware = require("./src/middleware/ErrorMiddleware")
const admin = require("./src/router/general")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/", admin)
// app.use(errorMiddleware)

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT} server running `)
})