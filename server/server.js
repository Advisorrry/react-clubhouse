import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

import { passport } from './core/passport.js'

const app = express()

app.get('/auth/github', passport.authenticate('github'))

app.get(
    '/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/')
    },
)
app.listen(3001, (err) => {
    if (err) {
        throw Error('ошибка')
    }

    console.log('server started')
})
