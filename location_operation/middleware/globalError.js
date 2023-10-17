module.exports = function functionGlobalError(err, req, res, next) {
  res.status(500).send('Something went wrong.');
  next();
};
