const express=require("express");
const router=express.Router();

const controller=require("../controllers/controllers");


router.get("/",controller.get_all_data);

router.put("/:id",controller.put_data);

router.get("/:id",controller.get_one_data);

router.post("/",controller.post_data);

router.post("/distance",controller.post_distance);

module.exports = router;