function ok(res, data) {
  return res.status(200).json(data)
}

function created (res) {
  return res.status(201).send()
}

function notFound (res) {
  return res.status(404).send()
}

function unprocessableEntity (res, message) {
  return res.status(422).json({ message: message || 'Missing some fields' })
}

function serverError (res, error) {
  return res.status(500).json({ error: error.message })
}

module.exports = {
  ok,
  created,
  notFound,
  unprocessableEntity,
  serverError
}
