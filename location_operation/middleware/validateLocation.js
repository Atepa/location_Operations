const validate = require('../validation/validateLocation');

function validateLocation(req, res, next) {
  const { error } = validate[0](req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  return next();
}

function validateXY(req, res, next) {
  const { error } = validate[1](req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  return next();
}

module.exports = [validateLocation, validateXY];
