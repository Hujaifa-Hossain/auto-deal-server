const router = require("express").Router();
const controller = require("../controllers/userCtrl");

router.post("/addUserInfo", controller.post_user);

router.put("/makeAdmin", controller.make_admin);

router.get("/checkAdmin/:email", controller.check_admin);

module.exports = router;
