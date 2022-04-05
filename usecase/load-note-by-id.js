const { model } = require("../db")

const { ok, notFound, serverError } = require("../helpers/response")

async function loadNoteByIdFromDatabase (noteId) {
  return await model.findOne({
    where: {
      id: noteId
    }
  })
}

async function loadNoteById (res, noteId) {
  return await loadNoteByIdFromDatabase(noteId)
    .then(notes => {
      if (notes.length === 0) {
        return notFound(res)
      }

      return ok(res, { notes: notes })
    })
    .catch(error => serverError(res, error))
}

module.exports = {
  loadNoteByIdUseCase: loadNoteById
}
