const express = require("express")
const {createNotesController, getAllNotesController, getSingleNoteController, updateNoteController, deleteNoteController  } = require("../controllers/notes.controller")

const router = express.Router()

router.post("/create", createNotesController)

router.get("/allNotes", getAllNotesController)

router.get("/:id", getSingleNoteController)

router.put("/:id", updateNoteController)

router.delete("/:id", deleteNoteController)
module.exports = router