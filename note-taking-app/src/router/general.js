const router = require("express").Router()
const Auth = require("../controller/Auth")
const getNotes = require("../controller/GetNotes")

router.get("/login", Auth.login)
router.get("/register", Auth.register)
router.get("/all-note", getNotes)


module.exports = router