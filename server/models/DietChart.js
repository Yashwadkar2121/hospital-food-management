const mongoose = require("mongoose");

const dietChartSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  meals: {
    morning: {
      items: {
        type: [String],
        default: [],
      },
      instructions: {
        type: String,
        default: "",
        trim: true,
      },
      assignedPantryStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PantryStaff",
        required: false, // Updated to allow null assignment at creation
      },
    },
    evening: {
      items: {
        type: [String],
        default: [],
      },
      instructions: {
        type: String,
        default: "",
        trim: true,
      },
      assignedPantryStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PantryStaff",
        required: false, // Updated to allow null assignment at creation
      },
    },
    night: {
      items: {
        type: [String],
        default: [],
      },
      instructions: {
        type: String,
        default: "",
        trim: true,
      },
      assignedPantryStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PantryStaff",
        required: false, // Updated to allow null assignment at creation
      },
    },
  },
});

module.exports = mongoose.model("DietChart", dietChartSchema);
