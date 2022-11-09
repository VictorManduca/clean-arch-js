const models = require('../models')

async function loadNotesFromDatabase() {
  return await models.notes.findAll()
}

async function loadNoteByIdFromDatabase(noteId) {
  return await models.notes.findOne({
    where: { id: noteId }
  })
}

async function loadAllNotesByAuthorFromDatabase(authorName) {
  return await models.notes.findAll({
    where: { author: authorName }
  })
}

async function saveNoteInDatabase(payload) {
  return await models.notes.create(payload)
}

module.exports = {
  loadNotesFromDatabase,
  loadNoteByIdFromDatabase,
  loadAllNotesByAuthorFromDatabase,
  saveNoteInDatabase
}
