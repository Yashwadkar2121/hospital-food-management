const express = require("express");
const {
  createDietChart,
  getMealsByPatientId,
  updateDietChart,
} = require("../controllers/dietChartController");
const router = express.Router();

router.post("/", createDietChart);
router.get("/:patientId/meals", getMealsByPatientId);
router.put("/:patientId/meals", updateDietChart);

module.exports = router;
