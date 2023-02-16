const { Router } = require("express");
const router = Router();
const { registerUserController } = require("../controllers/registerUser");
const { buyActionsController } = require("../controllers/buyActions");
const { applyForCreditController } = require("../controllers/applyForCredit");
const { getUserExistsController } = require("../controllers/getUserExists");

router.get("/userExists/:id", getUserExistsController);
router.post("/registerUser", registerUserController);
router.post("/buy-actions", buyActionsController);
router.post("/apply-for-credit", applyForCreditController);

module.exports = router;
