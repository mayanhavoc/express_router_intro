const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send(`<h1>Viewing all shelters</h1>`)
})
router.post('/', (req, res)=> {
    res.send(`<h1>Creating a shelter</h1>`)
})
router.get('/:id', (req, res)=> {
    res.send(`<h1>Viewing one shelter</h1>`)
})
router.get('/:id/edit', (req, res)=> {
    res.send(`<h1>Editing one shelter</h1>`)
})

module.exports = router;