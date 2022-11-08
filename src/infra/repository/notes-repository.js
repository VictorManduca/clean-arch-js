const notesModel = require('../models/notes-model')

async function loadNotesFromDatabase() {
  return await notesModel.findAll()
}

async function loadNoteByIdFromDatabase(noteId) {
  return await notesModel.findOne({
    where: { id: noteId }
  })
}

async function loadAllNotesByAuthorFromDatabase(authorName) {
  return await notesModel.findAll({
    where: { author: authorName }
  })
}

async function saveNoteInDatabase(payload) {
  return await notesModel.create(payload)
}

module.exports = {
  loadNotesFromDatabase,
  loadNoteByIdFromDatabase,
  loadAllNotesByAuthorFromDatabase,
  saveNoteInDatabase
}
