const Joi = require("joi")
const bcrypt = require("bcryptjs")
const User = require("../models/User")

module.exports = async (req, res, next) => {
    // try {
    const schema = Joi.object({
        username: Joi.string().trim().min(4).max(20).required(),
        password: Joi.string().trim().min(6).max(18).required(),
    })
    const validation = schema.validateAsync(req.body)

    const getUser = await User.find({ username: req.body.username })

    const hashPassword = await bcrypt.compare(req.body.password, getUser.password)
    console.log(hashPassword)
    // şifrede hata var
    res.json({ hashPassword })
    // } catch (error) {
    //     res.json({ error })
    // }
}