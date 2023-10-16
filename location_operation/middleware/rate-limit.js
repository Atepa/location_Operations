const rateLimit=require("express-rate-limit");

const apiLimit=rateLimit({
    windowMs: 2 * 60 * 1000, // block 5 min
    max:25,
    message: "You have exceeded your 25 requests per each 2 minute limit.",
    headers: true,
});
module.exports=apiLimit;