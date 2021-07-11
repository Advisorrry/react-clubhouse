const dotenv = require('dotenv')
const passport = require('passport')
const GithubStrategy = require('passport-github').Strategy
const {User} = require('../models')



dotenv.config()

passport.use(
    'github',
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: 'https://localhost:3001/auth/github/callback',
      },
      async (_, __, profile, done) => {
        try {
          const obj = {
            fullname: profile.displayName,
            avatarUrl: profile.photos?.[0].value,
            isActive: 0,
            username: profile.username,
            phone: '',
          };
  
          const findUser = await User.findOne({
            where: {
              username: obj.username,
            },
          });
  
          if (!findUser) {
            const user = await User.create(obj);
            return done(null, JSON.stringify(user));
          }
  
          done(null, findUser);
        } catch (error) {
          done(error);
        }
      },
    ),
  );
  
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      err ? done(err) : done(null, user);
    });
  });
  
module.exports = {passport}
