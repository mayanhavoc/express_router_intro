const express = require('express');
const router = express.Router();

router.get('/adminaccess', (res, send) => {
    res.send(`<h1>Admin dashboard</h1>`)
})
router.get('/admindelete', (res, send) => {
    res.send(`<h1>Delete database</h1>`)
})

module.exports = router;