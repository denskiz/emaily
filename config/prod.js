// prod.js - production keys here!!
// module.exports = {
//   googleClientID: process.env.GOOGLE_CLIENT_ID,
//   googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   mongoURI: process.env.MONGO_URI,
//   cookieKey: process.env.COOKIE_KEY,
//   stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//   stripeSecretKey: process.env.STRIPE_SECRET_KEY,
//   sendGridKey: process.env.SEND_GRID_KEY,
//   redirectDomain: process.env.REDIRECT_DOMAIN,
// };

// redirect domain the the website the user lands on when clicking
// yes/no on the email
// use root domain of the app
//d

module.exports = {
  googleClientID:
    '982808531649-sej7e876pvrf4bu9qpuoc7l1daerg3cp.apps.googleusercontent.com',
  googleClientSecret: '6fdZrslAtB3BILAF4XKLXlW4',
  mongoURI:
    'mongodb+srv://dennis:deOR7p7PS5o9Q5G4@emaily-xrkqc.mongodb.net/test?retryWrites=true&w=majority',
  cookieKey: 'inwoaidwaodihwanoihdanoiwabdiwadb',
  stripePublishableKey: 'pk_test_wd6JOemZHTRKYwKJiobuPppm',
  stripeSecretKey: 'sk_test_juLs1PE039C9OfBIlkYG8gy9',
  sendGridKey:
    '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',
  redirectDomain: 'http://localhost:5000',
};
