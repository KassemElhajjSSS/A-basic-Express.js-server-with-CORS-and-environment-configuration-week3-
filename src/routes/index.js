const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('the route is running correctly')
    res.send('hello world');
})

module.exports = router