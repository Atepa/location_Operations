const Joi=require("joi");

exports.validateSourceLatitudesLongitudes= function (Location){
    const Schema=new Joi.object({
        locationLatitude:Joi.number().min(-90).max(90).required(),
        locationLongitude: Joi.number().min(-180).max(180).required(),
    });
    
    return Schema.validate(Location);
};
