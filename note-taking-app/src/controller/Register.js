const joi = require("joi")
const User = require("../models/User")

module.exports = async (req, res, next) => {
    try {
        const newUser = new User({
            name: "feyza",
            surname: "yaycı",
            username: "maraslibela46",
            password: "123456"
        })
        await newUser.save()
        res.json({
            success: "saved"
        })
    } catch (error) {
        next(error)
    }


}