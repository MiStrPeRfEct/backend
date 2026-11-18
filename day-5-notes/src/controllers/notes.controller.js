const NotesModel = require("../models/notes.models")

const createNotesController =  async(req, res)=>{
    try {
        let {title, description} = req.body 
                                                                                                                                                    
        let newNote = await NotesModel.create({
            title,
            description,
        })

        return res.status(201).json({
            message : "note created successfully",
            data : newNote
        })

    } catch (error){
         return res.status(500).json({
            message: "Internal server error",

        })
    }
}

const getAllNotesController =  async (req, res)=>{
    try{
        const allNotes = await NotesModel.find()
        res.status(200).json({
            message: "all notes",
            data: allNotes
        })
    }catch(err){
         return res.status(500).json({
            message: "Internal server error",

        })
    }
}

const getSingleNoteController = async (req, res)=>{
    try{
        let noteId = req.params.id
        let note = await NotesModel.findById(noteId)

        res.status(200).json({
            message: "note fetched successfully",
            data: note
        })

    }catch(err){
      return res.status(500).json({
            message: "Internal server error",

        })
    }
}

const updateNoteController = async (req, res)=>{
    try{
        let noteId = req.params.id
        let body = req.body

        let updatedNote = await NotesModel.findByIdAndUpdate(noteId, body, {new: true} )

        return res.status(200).json({
            message: "note updated successfully",
            data: updatedNote
        })

    }catch(err){
       return res.status(500).json({
            message: "Internal server error",

        })
    }
}

const deleteNoteController = async (req, res)=>{
    try{
        let noteId = req.params.id
        await NotesModel.findByIdAndDelete(noteId)

        return res.status(200).json({
            message: "note deleted successfully",
        })

    }catch(err){
         return res.status(500).json({
            message: "Internal server error",
         })
    }
}

module.exports = {
    createNotesController,
    getAllNotesController,
    getSingleNoteController,
    updateNoteController,
    deleteNoteController
}