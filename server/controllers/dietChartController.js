const DietChart = require("../models/DietChart");

exports.createDietChart = async (req, res) => {
  try {
    const { patientId, meals } = req.body;

    // Validate input
    if (!patientId || !meals) {
      return res
        .status(400)
        .json({ error: "Patient ID and meals data are required." });
    }

    // Create the diet chart
    const dietChart = new DietChart({ patientId, meals });
    await dietChart.save();

    res
      .status(201)
      .json({ message: "Diet chart created successfully.", dietChart });
  } catch (error) {
    console.error("Error creating diet chart:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

// dietChartController.js
exports.getMealsByPatientId = async (req, res) => {
  try {
    const { patientId } = req.params;

    // Validate patientId
    if (!patientId) {
      return res.status(400).json({ error: "Patient ID is required." });
    }

    // Find the diet chart for the given patientId
    const dietChart = await DietChart.findOne({ patientId }).populate(
      "patientId"
    );

    if (!dietChart) {
      return res
        .status(404)
        .json({ error: "Diet chart not found for the given patient ID." });
    }

    res.status(200).json({ meals: dietChart.meals });
  } catch (error) {
    console.error("Error fetching meals by patient ID:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.updateDietChart = async (req, res) => {
  try {
    const { patientId } = req.params;
    const { meals } = req.body;

    // Validate input
    if (!patientId || !meals) {
      return res
        .status(400)
        .json({ error: "Patient ID and meals data are required." });
    }

    // Find and update the diet chart for the given patientId
    const dietChart = await DietChart.findOneAndUpdate(
      { patientId },
      { meals },
      { new: true }
    );

    if (!dietChart) {
      return res
        .status(404)
        .json({ error: "Diet chart not found for the given patient ID." });
    }

    res
      .status(200)
      .json({ message: "Diet chart updated successfully.", dietChart });
  } catch (error) {
    console.error("Error updating diet chart:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
