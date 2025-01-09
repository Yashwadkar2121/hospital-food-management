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
      }, // Add status field
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
      }, // Add status field
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
      }, // Add status field
    },
  },
});

module.exports = mongoose.model("DietChart", dietChartSchema);
