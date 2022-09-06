const Joi = require("Joi")
const Note = require("../models/Note")

module.exports =async (req, res, next) => {
    try {
        const schema = Joi.object({
            text: Joi.string().required(),
            title: Joi.string().required().max(30),
            author_id: Joi.string().required()
        })
        const validation = await schema.validateAsync(req.body)
        
        const newNote = new Note({
            text:req.body.text,
            title:req.body.title,
            author_id:req.body.author_id
        })

        await newNote.save()

        res.json({ message: "success" })
        
    } catch (error) {
        res.json(error.message)
    }

}