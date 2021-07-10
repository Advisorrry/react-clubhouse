const express = require('express')
const https = require('https')
const fs = require('fs')
const  passport = require('./core/passport.js')
require('./core/db.js')



const app = express()

app.get('/auth/github', passport.authenticate('github'))

app.get(
    '/auth/github/callback/',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.send()
    },
)
https
    .createServer(
        {
            key: fs.readFileSync('server.key'),
            cert: fs.readFileSync('server.cert'),
        },
        app,
    )
    .listen(3001, function () {
        console.log('server started')
    })
