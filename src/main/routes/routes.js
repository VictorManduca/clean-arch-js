const { router } = require('../config/app')

const loadAllNotes = require('../../presentation/controllers/load-all-notes')
const loadAllNotesByAuthor = require('../../presentation/controllers/load-all-notes-by-author')
const loadNoteById = require('../../presentation/controllers/load-note-by-id')
const createNote = require('../../presentation/controllers/create-notes')

router.get('/notes', (req, res) => {
  if (req.query.author) {
    return loadAllNotesByAuthor(res, req.query.author)
  }

  return loadAllNotes(res)
})

router.get('/notes/:id', (req, res) => loadNoteById(res, req.params.id))

router.post('/notes', (req, res) => createNote(res, req.body))

module.exports = router
