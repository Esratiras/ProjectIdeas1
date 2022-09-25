const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        require: [true, 'İsim alanı boş olamaz.'],
    },
    username: {
        type: String,
        require: [true, 'Kullanıcı adı alanı boş olamaz.'],
    },
    password: {
        type: String,
        require: [true, 'Şifre alanı boş olamaz.'],
    },
    email: {
        type: String,
        require: [true, 'E-mail alanı boş olamaz.']
    }
}, { collection: 'user', timestamps: true });

UserSchema.methods.JoiValidation = function (userObject) {
    const schema = Joi.object({
        name: Joi.string().trim().min(4).max(30).required(),
        username: Joi.string().trim().min(4).max(12).required(),
        email: Joi.string().email().required(),
        password: Joi.string().trim().min(6).max(12).required(),
    })

    return schema.validateAsync(userObject)
}

const User = mongoose.model('User', UserSchema)

module.exports = User;