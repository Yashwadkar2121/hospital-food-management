const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true, // Ensure the delivery is linked to a Patient
  },
  dietChartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DietChart",
    required: true, // Ensure the delivery is linked to a DietChart
  },
  deliveryPerson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PantryStaff",
    required: true, // Ensure the delivery is assigned to a PantryStaff
  },
  status: {
    type: String,
    enum: ["Pending", "Prepared", "Delivered"], // Define valid status values
    default: "Pending", // Default status is 'Pending'
    required: true, // Ensure a status is always provided
  },
  timestamp: {
    type: Date,
    default: Date.now, // Default to the current date and time
    required: true, // Ensure a timestamp is recorded
  },
  notes: {
    type: String,
    default: "", // Default to an empty string if no notes are provided
    trim: true, // Remove unnecessary whitespace
  },
});

module.exports = mongoose.model("Delivery", deliverySchema);
