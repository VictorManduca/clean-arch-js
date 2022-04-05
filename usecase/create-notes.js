const { model } = require("../db")

const { unprocessableEntity, created, serverError } = require("../helpers/response")

function isBodyValid (body) {
  if (!body || !body.author || !body.content) {
    return false
  }

  return true
}

async function saveNoteInDatabase (payload) {
  return await model.create(payload)
}

async function createNote (response, body) {
  if (!isBodyValid(body)) {
    return unprocessableEntity(response, "Missing author and/or content")
  }

  const payload = {
    added: body.added ? body.added : null,
    author: body.author,
    content: body.content
  }

  return await saveNoteInDatabase(payload)
    .then(_ => created(response))
    .catch(error => serverError(response, error))
}

module.exports = {
  createNoteUseCase: createNote
}
