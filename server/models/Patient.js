const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // The name is required
    trim: true, // Removes leading and trailing spaces
  },
  diseases: {
    type: [String],
    default: [], // Default value is an empty array
  },
  allergies: {
    type: [String],
    default: [], // Default value is an empty array
  },
  roomNumber: {
    type: String,
    required: true, // Room number is required
  },
  bedNumber: {
    type: String,
    required: true, // Bed number is required
  },
  floorNumber: {
    type: String,
    required: true, // Floor number is required
  },
  age: {
    type: Number,
    required: true, // Age is required
    min: 0, // Minimum age is 0
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"], // Gender must be one of these values
    required: true, // Gender is required
  },
  contactInfo: {
    type: String,
    required: true, // Contact info is required
    trim: true,
  },
  emergencyContact: {
    type: String,
    required: true, // Emergency contact is required
    trim: true,
  },
  otherDetails: {
    type: String,
    default: "", // Default value is an empty string
    trim: true,
  },
});

module.exports = mongoose.model("Patient", patientSchema);
