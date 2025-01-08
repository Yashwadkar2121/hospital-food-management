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
      assignedPantryStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PantryStaff", // Reference to the 'PantryStaff' schema
        required: true, // Ensure pantry staff is assigned
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
      assignedPantryStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PantryStaff", // Reference to the 'PantryStaff' schema
        required: true, // Ensure pantry staff is assigned
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
      assignedPantryStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PantryStaff", // Reference to the 'PantryStaff' schema
        required: true, // Ensure pantry staff is assigned
      },
    },
  },
});

module.exports = mongoose.model("DietChart", dietChartSchema);
