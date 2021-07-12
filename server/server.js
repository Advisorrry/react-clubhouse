const express = require('express')
const https = require('https')
const fs = require('fs')
const { passport } = require('./core/passport.js')
const cors = require('cors')
require('./core/db.js')

const app = express()

app.use(cors())
app.use(passport.initialize())

app.get('/auth/github', passport.authenticate('github'))

app.get(
    '/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
        res.send(
            `<script>window.opener.postMessage('${JSON.stringify(
                req.user,
            )}', '*');window.close();</script>`,
        )
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
