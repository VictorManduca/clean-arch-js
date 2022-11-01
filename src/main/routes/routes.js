const { router } = require('../config/app')

const { loadAllNotesUseCase } = require('../../usecase/load-all-notes')
const { loadAllNotesByAuthorUseCase } = require('../../usecase/load-all-notes-by-author')
const { loadNoteByIdUseCase } = require('../../usecase/load-note-by-id')
const { createNoteUseCase } = require('../../usecase/create-notes')

router.get('/notes', (req, res) => {
  if (req.query.author) {
    return loadAllNotesByAuthorUseCase(res, req.query.author)
  }

  return loadAllNotesUseCase(res)
})

router.get('/notes/:id', (req, res) => loadNoteByIdUseCase(res, req.params.id))

router.post('/notes', (req, res) => createNoteUseCase(res, req.body))

module.exports = router
