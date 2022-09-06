const Note = require("../models/Note")
module.exports = async (req, res, next) => {

    const notes = await Note.find({})
    res.json({ notes })
}