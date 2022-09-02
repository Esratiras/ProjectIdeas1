const router = require('express').Router();
const getNotes = require("../controller/GetNotes")

router.get("/",getNotes)

module.exports = router