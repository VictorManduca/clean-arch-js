const notesModel = require('../infra/notes-model')
const { unprocessableEntity, created, serverError } = require('../presentation/http-response')

async function loadAllNotesByAuthorFromDatabase(authorName) {
  return await notesModel.findAll({
    where: { author: authorName }
  })
}

async function loadAllNotesByAuthor(res, authorName) {
  return await loadAllNotesByAuthorFromDatabase(authorName)
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
  loadAllNotesByAuthorUseCase: loadAllNotesByAuthor
}
