const mongoose = require("mongoose");

const dietChartSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  meals: {
    morning: {
      items: [String],
      instructions: String,
      assignedPantryStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PantryStaff",
      },
    },
    evening: {
      items: [String],
      instructions: String,
      assignedPantryStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PantryStaff",
      },
    },
    night: {
      items: [String],
      instructions: String,
      assignedPantryStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PantryStaff",
      },
    },
  },
});

module.exports = mongoose.model("DietChart", dietChartSchema);
