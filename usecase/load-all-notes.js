const { model } = require("../db")

const { ok, notFound, serverError } = require("../helpers/response")

async function loadNotesFromDatabase () {
  return await model.findAll()
}

async function loadAllNotes (res) {
  return await loadNotesFromDatabase()
    .then(notes => {
      if (notes.length === 0) {
        return notFound(res)
      }

      return ok(res, { notes: notes })
    })
    .catch(error => serverError(res, error))
}

module.exports = {
  loadAllNotesUseCase: loadAllNotes
}
