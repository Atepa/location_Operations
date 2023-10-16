const mongoose=require("mongoose");
const dotenv=require("dotenv");

dotenv.config();

exports.connect=async function(){

    await mongoose.connect(process.env.DATABASEURL);
 
}