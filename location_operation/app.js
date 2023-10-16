require('express-async-errors');

const express=require("express");
const dotenv=require("dotenv");

dotenv.config();
const app=express();
const port=process.env.PORT;

const routes=require("./routes/routes");
const db=require("./data/db");
const rateLimit=require("./middleware/rate-limit");
const globalError=require("./middleware/globalError");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(rateLimit);

app.use("/",routes);
app.use("*",(req,res)=>{
    res.status(404).send("Wrong Url");
})
app.use(globalError);

app.listen(port, function(err){
    if(err){
        return res.status(500).send("Database Error");
    }
    db.connect();
});