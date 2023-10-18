const validate = require('../validation/validateLocation');

function validateLocation(req, res, next) {
  if (req.originalUrl === '/draw' || req.originalUrl === '/distance') {
    req.body.locationTitle = 'default';
    req.body.colorOfMark = '#000000';
  }

  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  return next();
}

module.exports = validateLocation;
