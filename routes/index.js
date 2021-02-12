const express = require('express')
const router = express.Router() 

//@description Login / landing page
//@route GET /
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

//@description Dashboard / landing page
//@route GET / Dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router