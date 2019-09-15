const express = require('express')
const router = express.Router()

const noteController = require('../Controllers/NoteController')
const categoryController = require('../Controllers/CategoryController')

router.get('/notes', noteController.list)
router.post('/notes', noteController.create)
router.get('/notes/:id', noteController.show)

router.get('/categories', categoryController.list)
router.post('/categories', categoryController.create)
router.get('/categories/:id', categoryController.show)
router.put('/categories/:id', categoryController.update)
router.delete('/categories/:id', categoryController.destroy)

module.exports = router