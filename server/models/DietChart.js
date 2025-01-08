const mongoose = require("mongoose");

const dietChartSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true, // Ensure that the patient ID is always provided
  },
  meals: {
    morning: {
      items: {
        type: [String],
        default: [], // Default to an empty array if no items are provided
      },
      instructions: {
        type: String,
        default: "", // Default to an empty string if no instructions are provided
        trim: true,
      },
    },
    evening: {
      items: {
        type: [String],
        default: [], // Default to an empty array if no items are provided
      },
      instructions: {
        type: String,
        default: "", // Default to an empty string if no instructions are provided
        trim: true,
      },
    },
    night: {
      items: {
        type: [String],
        default: [], // Default to an empty array if no items are provided
      },
      instructions: {
        type: String,
        default: "", // Default to an empty string if no instructions are provided
        trim: true,
      },
    },
  },
});

module.exports = mongoose.model("DietChart", dietChartSchema);
