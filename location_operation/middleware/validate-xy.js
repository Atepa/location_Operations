/* eslint-disable consistent-return */
const validateXY = require('../validation/validate-x-y');

// eslint-disable-next-line func-names
module.exports = function (req, res, next) {
  const { error } = validateXY.validateSourceLatitudesLongitudes(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};
