const express = require("express")

const connectDb = require("./config/db")
const createNotesController = require("./controllers/notes.controller")
const notesRoute = require("./routes/notes.route")
const NotesModel = require("./models/notes.models")

const app = express()

connectDb()

app.use(express.json()) 

app.get("/",(req, res)=>{
    res.send("mai yha hu yha hu yahaa")
})

app.use("/notes", notesRoute)





module.exports = app