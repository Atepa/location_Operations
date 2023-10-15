const express=require("express");
const router=express.Router();

const controller=require("../controllers/controllers");

router.put("/:id",controller.put_data);

router.get("/:id",controller.get_one_data);

router.post("/",controller.post_data);

router.post("/distance",controller.post_distance);

router.post("/draw",controller.post_draw_route);

router.get("/",controller.get_all_data);

module.exports = router;