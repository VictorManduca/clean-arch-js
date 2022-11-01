const notesModel = require('../infra/notes-model')
const { unprocessableEntity, created, serverError } = require('../presentation/http-response')

async function loadNoteByIdFromDatabase(noteId) {
  return await model.findOne({
    where: { id: noteId }
  })
}

async function loadNoteById(res, noteId) {
  return await loadNoteByIdFromDatabase(noteId)
    .then(notes => {
      const doesNotHaveAnyNotes = notes.length === 0
      if (doesNotHaveAnyNotes) {
        return notFound(res)
      }

      return ok(res, { notes: notes })
    })
    .catch(error => serverError(res, error))
}

module.exports = {
  loadNoteByIdUseCase: loadNoteById
}
