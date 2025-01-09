const express = require("express");
const router = express.Router();
const pantryStaffController = require("../controllers/pantryController");

router.post("/create", pantryStaffController.createPantryStaff);
router.get(
  "/patientsWithMeals",
  pantryStaffController.getPatientsWithMeals
);
router.post(
  "/updateMealStatus",
  pantryStaffController.updateMealStatus
);

module.exports = router;
