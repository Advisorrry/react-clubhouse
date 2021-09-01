const express = require('express')
const sequelize = require('./core/db.js')

const dotenv = require('dotenv')
dotenv.config()

const passport = require('./core/passport.js')
const app = express()

app.use(passport.initialize())

app.get('/auth/github', passport.authenticate('github'))

app.get(
    '/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
        res.send(
            `<script>window.opener.postMessage('${JSON.stringify(
                req.user,
            )}', 'http://localhost:3000');window.close();</script>`,
        )
    },
)

const port = 3001

app.listen(port, () => {
    console.log(`http://localhost:3001/auth/github/`)
})
