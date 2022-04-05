const { model } = require("../db")

const { ok, notFound, serverError } = require("../helpers/response")

async function loadAllNotesByAuthorFromDatabase (authorName) {
  return await model.findAll({
    where: {
      author: authorName
    }
  })
}

async function loadAllNotesByAuthor (res, authorName) {
  return await loadAllNotesByAuthorFromDatabase(authorName)
    .then(notes => {
      if (notes.length === 0) {
        return notFound(res)
      }

      return ok(res, { notes: notes })
    })
    .catch(error => serverError(res, error))
}

module.exports = {
  loadAllNotesByAuthorUseCase: loadAllNotesByAuthor
}
