const joi = require("joi")
const User = require("../models/User")

module.exports = async (req, res, next) => {
    try {

        const username = req.body.username || "maraslibela46"
        const user = await User.find({ username: username })
        res.json({
            user
        })
    } catch (error) {
        next(error)
    }


}