const dotenv = require('dotenv')
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy
const {User} = require('../models')



dotenv.config()

passport.use(
    'github',
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            consumerSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: 'http://localhost:3001/auth/github/callback',
        },
        async (accessToken, refreshToken, profile, cb) => {
            const obj = {
                fullname: profile.displayName,
                avatarUrl: profile.photos?.[0].value,
                isActive: 0,
                username: profile.username,
                phone: '',
            }
            const user = await User.Create(obj)
            console.log(user);
            cb()
        },
    ),
)

module.exports = passport
