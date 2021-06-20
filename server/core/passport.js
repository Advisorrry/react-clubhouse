import passport from 'passport'
import { Strategy as GitHubStrategy } from 'passport-github'

passport.use(
    'github',
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            consumerSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: 'http://hocalhost:3001/auth/github/callback',
        },
        function (accessToken, refreshToken, profile, cb) {
            User.findOrCreate({ githubId: profile.id }, function (err, user) {
                return cb(err, user)
            })
        },
    ),
)

export { passport }
