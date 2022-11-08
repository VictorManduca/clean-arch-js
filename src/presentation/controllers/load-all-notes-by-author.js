const { loadAllNotesByAuthorFromDatabase } = require('../../infra/repository/notes-repository')
const { notFound, ok, serverError } = require('../../presentation/http-response')

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

module.exports = loadAllNotesByAuthor
