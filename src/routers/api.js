const { Router } = require("express");
const router = Router();
const { registerController } = require("../controllers/register");
const { buyActionsController } = require("../controllers/buyActions");
const { applyForCreditController } = require("../controllers/applyForCredit");

router.post("/register", registerController);
router.post("/buy-actions", buyActionsController);
router.post("/apply-for-credit", applyForCreditController);

module.exports = router;
