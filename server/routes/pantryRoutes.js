const express = require("express");
const { addPantryStaff } = require("../controllers/pantryController");
const router = express.Router();

router.post("/staff", addPantryStaff);

module.exports = router;
