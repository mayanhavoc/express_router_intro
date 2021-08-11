const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send(`<h1>Viewing all dogs</h1>`)
})
router.post('/', (req, res) => {
    res.send(`<h1>Creating a dog</h1>`)
})
router.get('/:id', (req, res) => {
    res.send(`<h1>Viewing one dog</h1>`)
})
router.get('/:id/edit', (req, res) => {
    res.send(`<h1>Editing one dog</h1>`)
})


module.exports = router;