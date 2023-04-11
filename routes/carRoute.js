const router = require("express").Router();
const controller = require("../controllers/carCtrl");

router.post("/addCar", controller.post_car);

router.get("/car/:id", controller.get_car);

router.get("/car", controller.get_cars);


module.exports = router;
