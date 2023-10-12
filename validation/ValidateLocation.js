const Joi=require("joi");

exports.ValidateLocation= function (Location){
    const Schema=new Joi.object({
        locationLatitude:Joi.Number(0).min(-90).max(90).required(),
        locationLongitude: Joi.Number().min(-180).max(180).required(),
        locationTitle:Joi.string().min(2).max(100).required(),
        colorOfMark:Joi.string().uppercase().pattern(new RegExp('^#(A-F0-9]{6}$'))  //#FF FF FF -- # FF D8 02 
    });
    return Schema.validate(Location);
};