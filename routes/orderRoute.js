const router = require("express").Router();
const controller = require("../controllers/orderCtrl");

router.post("/order/:id", controller.post_order);

router.get("/myOrder/:email", controller.my_order);

router.delete("/delete/:id", controller.delete_order);

router.get("/orders", controller.get_orders);


module.exports = router;
