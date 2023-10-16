/* eslint-disable func-names */
/* eslint-disable consistent-return */
const validate = require('../validation/ValidateLocation');

module.exports = function (req, res, next) {
  const { error } = validate.ValidateLocation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};
