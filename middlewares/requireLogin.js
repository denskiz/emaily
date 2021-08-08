// this is custom built middleware

module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }
  next();
  //call next middleware
};
