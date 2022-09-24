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

const User = mongoose.model('User', UserSchema)

module.exports = User;