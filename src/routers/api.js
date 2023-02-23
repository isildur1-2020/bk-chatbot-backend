const { Router } = require("express");
const router = Router();
const { registerUserController } = require("../controllers/registerUser");
const { buyActionsController } = require("../controllers/buyActions");
const { applyForCreditController } = require("../controllers/applyForCredit");
const { getUserExistsController } = require("../controllers/getUserExists");
const {
  getUserActionsToBuyController,
} = require("../controllers/getUserActionsToBuy");
const {
  getUserCreditToApplyController,
} = require("../controllers/getUserCreditToApply");
const { createGroupController } = require("../controllers/createGroup");
const { getAdminExistsController } = require("../controllers/getAdminExists");
const {
  approveActionsInfoController,
} = require("../controllers/approveActionsInfo");
const {
  userActionsExistsController,
} = require("../controllers/userActionsExists");
const { approveActionsController } = require("../controllers/approveActions");

router.get("/userExists/:id", getUserExistsController);
router.get("/userActionsExists/:userId", userActionsExistsController);
router.get("/approveActionsInfo/:groupId", approveActionsInfoController);
router.get("/adminExists/:adminId", getAdminExistsController);
router.get("/getUserActionsToBuy/:userId", getUserActionsToBuyController);
router.get("/getUserCreditToApply/:userId", getUserCreditToApplyController);
router.post("/registerUser", registerUserController);
router.post("/buy-actions", buyActionsController);
router.post("/apply-for-credit", applyForCreditController);
router.post("/createGroup", createGroupController);
router.post("/approveActions/:userId", approveActionsController);

module.exports = router;
