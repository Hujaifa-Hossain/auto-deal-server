const router = require("express").Router();
const controller = require("../controllers/reviewCtrl");

router.post("/reviews", controller.post_review);

router.get("/reviews", controller.get_reviews);

module.exports = router;
