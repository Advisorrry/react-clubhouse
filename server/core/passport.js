const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy
const dotenv = require('dotenv')
dotenv.config()

passport.use(
    'github',
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: 'http://localhost:3001/auth/github/callback',
        },
        (accessToken, refreshToken, profile, cb) => {
            const user = {
                name: profile.displayName,
                avatarUrl: profile.photos?.[0].value,
                username: profile.username
            }
            console.log(accessToken, profile, cb, user)
        },
    ),
)

module.exports = passport
