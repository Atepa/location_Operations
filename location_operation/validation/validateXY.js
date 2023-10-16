/* eslint-disable new-cap */
const Joi = require('joi');

// eslint-disable-next-line func-names
exports.validateSourceLatitudesLongitudes = function (Location) {
  const Schema = new Joi.object(
    {
      locationLatitude: Joi.number().min(-180).max(180).required()
        .precision(4),
      locationLongitude: Joi.number().min(-90).max(90).required()
        .precision(4),
    },
  );
  return Schema.validate(Location);
};
