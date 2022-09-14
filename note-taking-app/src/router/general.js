const router = require("express").Router()
const login = require("../controller/Login")
const getNotes = require("../controller/GetNotes")

router.get("/login", login)
router.get("/all-notes", getNotes)


module.exports = router