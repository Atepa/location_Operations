const express=require("express");
const app=express();
const port=3000;

const routes=require("./routes/routes");
const db=require("./data/db");
const rateLimit=require("./rate-limit");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(rateLimit);

app.use("/",routes);

app.listen(port, ()=>{
    console.log("App listening on port "+port);
    db.connect();
});