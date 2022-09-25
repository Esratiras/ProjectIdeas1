const Note = require("../models/Note")
const Notes = require("../models/Note")
const { get } = require("../router/general")

const MeNotes = async (req, res, next) => {
    try {
        const user_id = req.headers.user_id
        const allNote = await Notes.find({ author_id: user_id })
        return res.json({
            allNote
        })
    } catch (error) {
        next(error)
    }
}

const AllNotes = async (req, res, next) => {
    try {
        const allNote = await Notes.find()
        return res.json({
            allNote
        })
    } catch (error) {
        next(error)
    }
}

const EditNote = async (req, res, next) => {
    try {
        const { note_id, title, detail } = req.body

        const user_id = req.headers.user_id

        const getNote = await Notes.findOne({ _id: note_id })

        if (!getNote) {
            return res.json({
                success: false,
                message: "Not bulunamadı"
            })
        }

        if (getNote.author_id == user_id) {
            return res.json({
                success: false,
                message: "Başkasına ait notu düzenleyemezsiniz."
            })
        }

        await Notes.updateOne({ _id: note_id }, { $set: { title: title, detail: detail } });

        return res.json({
            success: true,
            message: "Düzenleme sağlandı"
        })

    } catch (error) {
        next(error)
    }
}

const DeleteNote = async (req, res, next) => {
    try {
        const { note_id } = req.body

        if (!note_id) {
            return res.json({
                success: false,
                message: "Not id boş bırakılamaz"
            })
        }

        const user_id = req.headers.user_id

        if (!user_id) {
            return res.json({
                success: false,
                message: "User id boş bırakılamaz"
            })
        }

        const getNote = await Notes.findOne({ _id: note_id })

        if (!getNote) {
            return res.json({
                success: false,
                message: "Not bulunamadı"
            })
        }

        if (getNote.author_id == user_id) {
            return res.json({
                success: false,
                message: "Başkasına ait notu silemezsiniz."
            })
        }

        await Notes.deleteOne({ _id: note_id });

        return res.json({
            success: true,
            message: "Not silindi."
        })

    } catch (error) {
        next(error)
    }
}

const AddNote = async (req, res, next) => {
    try {
        const { title, detail } = req.body
        const author_id = req.headers.user_id

        if (!title) {
            return res.json({
                success: false,
                message: "Title alanı boş bırakılamaz"
            })
        }

        if (!detail) {
            return res.json({
                success: false,
                message: "Detail alanı boş bırakılamaz"
            })
        }

        if (!author_id) {
            return res.json({
                success: false,
                message: "Yazar id boş bırakılamaz"
            })
        }

        await Note.create({
            title: title,
            detail: detail,
            author_id: author_id
        })

        return res.json({
            success: true,
            message: "Not kaydedildi."
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {
    MeNotes,
    AllNotes,
    EditNote,
    DeleteNote,
    AddNote
}