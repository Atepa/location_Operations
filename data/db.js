const db=require("../config");

exports.connect=async function(){
    try {
        await mongoose.connect(`mongodb+srv://${db.username}:${db.pass}@nodejs.c0ncye7.mongodb.net/${db.db}?retryWrites=true&w=majority`)
        console.log("mongodb bağlantısı başarılı");
    } catch (err) {
        console.log(err);
    }
}