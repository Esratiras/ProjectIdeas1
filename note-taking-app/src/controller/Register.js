const Joi = require("joi")
const bcrypt = require("bcryptjs")
const User = require("../models/User")

module.exports = async (req, res, next) => {
    try {

        const schema = Joi.object({
            name: Joi.string().trim().min(3).max(20).required(),
            surname: Joi.string().trim().min(3).max(20).required(),
            username: Joi.string().lowercase().trim().min(4).max(20).required(),
            password: Joi.string().trim().min(6).max(18).required(),
        })

        const validation = await schema.validateAsync(req.body)

        const controlUser = await User.findOne({ username: req.body.username })

        if (controlUser) {
            return res.json({ message: "kullanıcı adı kayıtlı" })
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = new User({
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            password: hashedPassword,
        })

        await newUser.save()

        res.json({
            message: "success"
        })

    } catch (error) {
        res.json({ error })
    }
}