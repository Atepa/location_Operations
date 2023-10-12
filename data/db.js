const db=require("../config");
const mongoose=require("mongoose");

exports.connect=async function(){
    try {
        await mongoose.connect(`mongodb+srv://${db.username}:${db.pass}@atepa.u1kpwik.mongodb.net/${db.db}?retryWrites=true&w=majority`);
        console.log("mongodb bağlantısı başarılı");
    } catch (err) {
        console.log(err);
    }
}