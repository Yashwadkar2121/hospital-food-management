const mongoose = require("mongoose");

const pantryStaffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Ensure name is provided
    trim: true, // Remove leading/trailing spaces
  },
  contactInfo: {
    type: String,
    required: true, // Ensure contact information is provided
    trim: true,
  },
  location: {
    type: String,
    required: true, // Ensure location is specified
    trim: true,
  },
  assignedTasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Delivery", // Reference to the 'Delivery' schema
      default: [], // Default to an empty array if no tasks are assigned
    },
  ],
});

module.exports = mongoose.model("PantryStaff", pantryStaffSchema);
