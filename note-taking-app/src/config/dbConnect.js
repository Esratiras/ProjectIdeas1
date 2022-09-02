const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(result => { console.log("DB Connection") })
    .catch(err => { console.log(err) })