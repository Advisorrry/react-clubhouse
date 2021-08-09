const express = require('express')

const dotenv = require('dotenv')
dotenv.config()

const passport = require('./core/passport.js')
const app = express()

app.get('/auth/github', passport.authenticate('github'))

app.get(
    '/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/')
    },
)

const port = 3001

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})
