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
      status: {
        type: String,
        enum: ["Ready", "Pending", "N/A"],
        default: "Pending",
      },
      lastUpdated: Date,
    },
    evening: {
      items: [String],
      instructions: String,
      assignedPantryStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PantryStaff",
      },
      status: {
        type: String,
        enum: ["Ready", "Pending", "N/A"],
        default: "Pending",
      },
      lastUpdated: Date,
    },
    night: {
      items: [String],
      instructions: String,
      assignedPantryStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PantryStaff",
      },
      status: {
        type: String,
        enum: ["Ready", "Pending", "N/A"],
        default: "Pending",
      },
      lastUpdated: Date,
    },
  },
});

module.exports = mongoose.model("DietChart", dietChartSchema);
