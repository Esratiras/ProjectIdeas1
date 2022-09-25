const Joi = require("joi")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const createError = require('http-errors')

const User = require("../models/User")

const login = async (req, res, next) => {
    try {
        const schema = Joi.object({
            username: Joi.string().trim().min(4).max(12).required(),
            password: Joi.string().trim().min(6).max(12).required()
        })

        schema.validateAsync(req.body);

        const { username, password } = req.body
        
        const getUser = await User.findOne({ username: username })

        if (!getUser) {
            return next(createError(404, 'Kullanıcı bulunmadı'))
        }

        const passControl = await bcrypt.compare(password, getUser.password)

        if (!passControl) {
            throw new Error("Şifre hatalı")
        }

        const token = jwt.sign({ id: getUser.id }, process.env.JWT_KEY, { expiresIn: 60 * 24 * 1000 /*dk*/ }, { algorithm: 'RS256' });
        res.cookie('token', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 });

        res.redirect("/all-note")

    } catch (error) {
        return next(error)
    }
}

const register = async (req, res, next) => {
    try {

        const schema = Joi.object({
            name: Joi.string().trim().min(4).max(30).required(),
            username: Joi.string().trim().min(4).max(12).required(),
            email: Joi.string().email().required(),
            password: Joi.string().trim().min(6).max(12).required(),
        })

        schema.validateAsync(req.body)

        const { name, username, email, password } = req.body

        const emailControl = await User.findOne({ email: email })

        if (emailControl) {
            return next(createError(404, 'E-mail kullanımda'))
        }

        const usernameControl = await User.findOne({ username: username })

        if (usernameControl) {
            return next(createError(404, 'Kullanıcı adı  kullanımda'))
        }


        await User.create({
            name: name,
            username: username,
            email: email,
            password: bcrypt.hashSync(password, 10)
        })

        return res.json({
            success: true,
            message: "Kaydedildi"
        })

    } catch (error) {
        return next(error)
    }
}

module.exports = {
    login,
    register
}