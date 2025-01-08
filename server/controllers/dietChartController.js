const DietChart = require("../models/DietChart");

exports.createDietChart = async (req, res) => {
  try {
    const dietChart = new DietChart(req.body);
    await dietChart.save();
    res.status(201).json(dietChart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getDietCharts = async (req, res) => {
  try {
    const dietCharts = await DietChart.find().populate("patientId");
    res.status(200).json(dietCharts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add more functions for updating and deleting diet charts...
