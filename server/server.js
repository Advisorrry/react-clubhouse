import express from 'express'
import https from 'https'
import fs from 'fs'


import { passport } from './core/passport.js'

const app = express()

app.get('/auth/github', passport.authenticate('github'))

app.get(
    '/auth/github/callback',
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
