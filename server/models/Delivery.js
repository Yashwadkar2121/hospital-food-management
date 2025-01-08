const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  dietChartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DietChart",
    required: true,
  },
  deliveryPerson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PantryStaff",
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Prepared", "Delivered", "In Progress"], // Added 'In Progress'
    default: "Pending",
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
  notes: {
    type: String,
    default: "",
    trim: true,
  },
});

module.exports = mongoose.model("Delivery", deliverySchema);
