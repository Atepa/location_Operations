const express=require("express");
const router=express.Router();
const validate=require("../middleware/validate");

const controller=require("../controllers/controllers");


router.get("/:id",controller.get_one_data);

router.get("/",controller.get_all_data);

router.post("/", validate ,controller.post_data);

router.post("/distance",controller.post_distance);

router.post("/draw",controller.post_draw_route);

router.put("/:id",controller.put_data);

module.exports = router;