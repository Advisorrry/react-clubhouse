const dotenv = require('dotenv')
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy;

dotenv.config()

passport.use(
    'github',
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            consumerSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: 'http://localhost:3001/auth/github/callback',
        },
        (accessToken, refreshToken, profile, cb) => {
            const user = {
                fullname: profile.displayName,
                avatarUrl: profile.photos?.[0].value,
            }
            cb()
        },
    ),
)

module.exports = passport 
