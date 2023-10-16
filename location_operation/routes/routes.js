const express=require("express");
const router=express.Router();
const validate=require("../middleware/validate-location");
const validateXY=require("../middleware/validate-xy");

const controller=require("../controllers/controllers");


router.get("/location/:id", controller.get_one_data);

router.get("/locations", controller.get_all_data);

router.post("/location/post", validate ,controller.post_data);

router.post("/distance",validateXY , controller.post_distance);

router.post("/draw", validatexy , controller.post_draw_route);

router.put("/location/:id", validate , controller.put_data);

module.exports = router;