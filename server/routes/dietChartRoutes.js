const express = require("express");
const {
  createDietChart,
  getDietCharts,
} = require("../controllers/dietChartController");
const router = express.Router();

router.post("/", createDietChart);
router.get("/", getDietCharts);

module.exports = router;
