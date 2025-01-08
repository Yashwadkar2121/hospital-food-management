const express = require("express");
const { updateDeliveryStatus } = require("../controllers/deliveryController");
const router = express.Router();

router.post("/status", updateDeliveryStatus);

module.exports = router;
