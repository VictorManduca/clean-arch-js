const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const { loadAllNotesUseCase } = require("./usecase/load-all-notes")
const { loadAllNotesByAuthorUseCase } = require("./usecase/load-all-notes-by-author")
const { loadNoteByIdUseCase } = require("./usecase/load-note-by-id")
const { createNoteUseCase } = require("./usecase/create-notes")

const port = process.env.PORT || 8000

app.use(bodyParser.json())

app.get("/notes", (req, res) => req.query.author ? loadAllNotesByAuthorUseCase(res, req.query.author) : loadAllNotesUseCase(res))

app.get("/notes/:id", (req, res) => loadNoteByIdUseCase(res, req.params.id))

app.post("/notes", (req, res) => createNoteUseCase(res, req.body))

app.listen(port, () => console.log(`Running on: http://localhost:${port}`))
