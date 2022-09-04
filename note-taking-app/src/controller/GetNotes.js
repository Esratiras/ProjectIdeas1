const Note = require("../models/Note")




module.exports = async (req, res, next) => {

    const getNotes = await Note.find()
    res.json({getNotes})
    // try {
    //     const newNote = new Note({
    //         text: "iöerikkk",
    //         title: "başlıkkk"

    //     });
    //     await newNote.save();
    // } catch (error) {
    //     console.log(error)
    // }

}