const PantryStaff = require("../models/PantryStaff");
const DietChart = require("../models/DietChart");

// Create a Pantry Staff Employee
exports.createPantryStaff = async (req, res) => {
  try {
    const { name, contactInfo } = req.body;
    const pantryStaff = new PantryStaff({ name, contactInfo });
    await pantryStaff.save();
    res.status(201).json({
      success: true,
      message: "Pantry staff created successfully",
      pantryStaff,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Patients and Meals with Status
exports.getPatientsWithMeals = async (req, res) => {
  try {
    const dietCharts = await DietChart.find()
      .populate("patientId", "name")
      .populate("meals.morning.assignedPantryStaff", "name")
      .populate("meals.evening.assignedPantryStaff", "name")
      .populate("meals.night.assignedPantryStaff", "name");

    res.status(200).json({ success: true, dietCharts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Meal Status
exports.updateMealStatus = async (req, res) => {
  try {
    const { dietChartId, mealTime, status } = req.body; // mealTime = 'morning', 'evening', 'night'
    const dietChart = await DietChart.findById(dietChartId);

    if (!dietChart) {
      return res
        .status(404)
        .json({ success: false, message: "Diet chart not found" });
    }

    if (dietChart.meals[mealTime]) {
      dietChart.meals[mealTime].status = status; // Set the new status
      await dietChart.save();
      res.status(200).json({
        success: true,
        message: "Meal status updated successfully",
        dietChart,
      });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Invalid meal time provided" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
