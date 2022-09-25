const router = require("express").Router()
const Auth = require("../controller/Auth")
const Notes = require("../controller/Notes")
const CheckLogin = require("../middleware/CheckLogin")
const CheckNote = require("../middleware/CheckNote")

router.get("/login", Auth.login)
router.get("/register", Auth.register)

router.get("/all-note", CheckLogin, Notes.AllNotes)
router.get("/me-note", CheckLogin, Notes.MeNotes)
router.get("/edit-note", CheckLogin, Notes.EditNote)
router.get("/delete-note", CheckLogin, Notes.DeleteNote)
router.get("/add-note", CheckLogin, Notes.AddNote)


module.exports = router