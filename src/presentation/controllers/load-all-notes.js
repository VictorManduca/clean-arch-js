const { loadNotesFromDatabase } = require('../../infra/repository/notes-repository')
const { notFound, ok, serverError } = require('../../presentation/http-response')

async function loadAllNotes(res) {
  return await loadNotesFromDatabase()
    .then(notes => {
      const doesNotHaveAnyNotes = notes.length === 0
      if (doesNotHaveAnyNotes) {
        return notFound(res)
      }

      return ok(res, { notes: notes })
    })
    .catch(error => serverError(res, error))
}

module.exports = loadAllNotes
