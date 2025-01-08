const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  diseases: {
    type: [String],
    default: [],
  },
  allergies: {
    type: [String],
    default: [],
  },
  roomNumber: {
    type: String,
    required: true,
  },
  bedNumber: {
    type: String,
    required: true,
  },
  floorNumber: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
    trim: true,
  },
  emergencyContact: {
    type: String,
    required: true,
    trim: true,
  },
  otherDetails: {
    type: String,
    default: "",
    trim: true,
  },
});

module.exports = mongoose.model("Patient", patientSchema);
