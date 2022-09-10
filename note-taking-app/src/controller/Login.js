const jwt = require("jsonwebtoken")
const User = require("../models/User")
const LocalStorage = require('node-localstorage').LocalStorage

module.exports = async (req, res, next) => {
    try {
        // const { username } = req.body
        const username = "maraslibaesla46"
        const getUser = await User.findOne({ username: username })
        const { id } = getUser
        if (!getUser) {
            return res.send("Kullanıcı bulunamadı")
        }

        localStorage = new LocalStorage('./scratch');

        const token = jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: '2h' })
        localStorage.setItem("jwt", token)

        res.send(token)
    } catch (error) {
        next(error)
    }
}