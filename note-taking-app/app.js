const express = require('express')
const app = express()
const bodyParser=require("body-parser")

const admin = require("./router/admin")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin",admin)
// app.get("/", (req, res, next) => {
//     res.send("velakm tu server")
// })



app.listen(3000, () => {
    console.log("server running http://localhost:3000")
})