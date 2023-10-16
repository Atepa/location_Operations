const validate=require("../validation/ValidateLocation");
const ValidateLatitudesLongitudes=require("../validation/ValidateLatitudesLongitudes");

module.exports=function(req,res,next){
    const {error}=validate.ValidateLocation(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }
    next();
}