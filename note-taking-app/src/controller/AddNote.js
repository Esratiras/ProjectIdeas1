const Joi = require("joi")
const Note = require("../models/Note")

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            text: Joi.string().required().max(140),
            title: Joi.string().required().max(140),
            author_id: Joi.required(),
        })

        const validation = schema.validate(req.body)
        
        console.log(validation)
        if (!validation) {
            return res.status(400).json({
                err: validation
            })
        }

        const newNote = new Note({
            text:req.body.text,
            title:req.body.title,
            author_id:req.body.author_id,
        })

        await newNote.save()
        return res.status(200).json({
            success:true
        })
        
    } catch (error) {
        next(error)
    }
}