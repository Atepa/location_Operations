const Joi=require("joi");

exports.ValidateLocation= function (Location){
    const Schema=new Joi.object({
        locationLatitude:Joi.number().min(-90).max(90).required().precision(4),
        locationLongitude: Joi.number().min(-180).max(180).required().precision(4),
        locationTitle:Joi.string().min(2).max(100).required(),
        colorOfMark:Joi.string().uppercase().pattern(new RegExp('^#[A-F0-9]{6}$')).required()  //#FF FF FF -- # FF D8 02 
    });
    return Schema.validate(Location);
};