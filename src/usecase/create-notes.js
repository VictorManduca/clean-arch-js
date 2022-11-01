const notesModel = require('../infra/notes-model')
const { unprocessableEntity, created, serverError } = require('../presentation/http-response')

function isBodyValid(body) {
  if (!body || !body.author || !body.content) {
    return false
  }

  return true
}

async function saveNoteInDatabase(payload) {
  return await notesModel.create(payload)
}

async function createNote(response, body) {
  if (!isBodyValid(body)) {
    return unprocessableEntity(response, 'Missing author and/or content')
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
