const mongoose=require("mongoose");

const locationSchema = mongoose.Schema({
  
    locationLatitude:Number,
    locationLongitude:Number,
    locationTitle:String,
    colorOfMark:String, 
});

const Location = mongoose.model("Location", locationSchema);

module.exports=Location;