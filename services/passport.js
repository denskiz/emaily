const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

//fetch out of mongoose
const User = mongoose.model('users');
const Survey = mongoose.model('surveys');

// user is what was pulled out of the database, either existing user or user
passport.serializeUser((user, done) => {
  //null is error object
  //user.id is the id in mongodb database
  //mongoose model turned into id
  done(null, user.id);
});

// id is user.id, what was in the cookie
// turn id into a mongoose model instance
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
// turn user id into a user/mongoose model instance
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
      proxy: true
    },
    // Access token allows you to reach back to google
    // and get profile information
    // Access token expires after some amount of time, hence refresh token
    async (accessToken, refreshToken, profile, done) => {
      // promise version: User.findOne({googleId: profile.id}).then(existingUser)
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // done tells passport that we have finished creating a user and
        // that it should now resume the auth process
        // null means there is no error, second argument is the user record
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      createSampleSurvey(user.id);
      done(null, user);
    }
  )
);

async function createSampleSurvey(id) {
  const sampleSurvey = await new Survey({
    yes: 140,
    no: 42,
    title: 'Sample Survey',
    body:
      'This is a sample survey. Let me know if you like our product. We would love to know about our product. Your feedback is valuable to us.',
    subject: 'We would love your feedback',
    recipients: [{ responded: false, email: 'sampleEmail@mail.com' }],
    _user: id,
    dateSent: Date.now()
  });
  sampleSurvey.save();
}
