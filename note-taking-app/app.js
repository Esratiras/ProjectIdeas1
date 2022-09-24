require('dotenv').config();
require("./src/config/dbConnect")

const express = require('express')
const bodyParser = require("body-parser")
const errorMiddleware = require("./src/middleware/ErrorMiddleware")
const admin = require("./src/router/general")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", admin)

app.use((err, res, req, next) => {
    console.log("hataa => ", err)
})



app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT} server running `)
})