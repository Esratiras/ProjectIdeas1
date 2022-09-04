const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    text: {
        type: String,
        require: [true, 'İçerik alanı boş olamaz.'],
        maxLength: 140
    },
    title: {
        type: String,
        require: [true, 'Başlık alanı boş olamaz.'],
    },
}, { collection: 'notes', timestamps: true });

const Note = mongoose.model('Note', NoteSchema)

module.exports = Note;