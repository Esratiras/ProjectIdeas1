const router = require('express').Router();
const getNotes = require("../controller/GetNotes")
const addNote = require("../controller/AddNote")
const register = require("../controller/register")
const login = require("../controller/login")

router.get("/all-notes", getNotes)
router.get("/add-note", addNote)

router.get("/register", register)
router.get("/login", login)

module.exports = router