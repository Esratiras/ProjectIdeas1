const Joi = require("joi")
const User = require("../models/User")

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            name: Joi.string().trim().min(3).max(20).required(),
            surname: Joi.string().trim().min(3).max(20).required(),
            username: Joi.string().trim().min(4).max(12).required(),
            password: Joi.string().trim().min(6).max(18).required(),
        })
        const validation = schema.validate(req.body)

        if (validation) {
            return res.status(400).json({ err: validation.error.details })
        }

        const user = await User.find({ username: req.body.username })
        if (user) {
            return res.status(400).json({
                success: false,
                message: "Bu kullanıcı adını alamazsınız."
            })
        }

        const newUser = new User({
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            password: req.body.password
        })
        await newUser.save()
        res.json({
            success: "saved"
        })

    } catch (error) {
        next(error)
    }


}