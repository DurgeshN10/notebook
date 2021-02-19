const express = require('express')
const router = express.Router() 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Notes = require('../models/Notes')

//@description Login / landing page
//@route GET /
router.get('/',ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

//@description Dashboard / landing page
//@route GET / Dashboard
router.get('/dashboard',ensureAuth, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id}).lean()
        res.render('dashboard',{
            name: req.user.firstName,
            notes
        })
    } catch (err) {
         console.error(err) 
         res.render('error/500')   
    }
    
})

module.exports = router