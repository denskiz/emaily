const passport = require('passport');

module.exports = app => {
  // scope specifies what access we want to have on the users profile
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  // Log user out
  app.get('/api/logout', (req, res) => {
    // kills the cookie
    req.logout();
    res.redirect('/');
  });
  //Route handler to get user from cookie
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
