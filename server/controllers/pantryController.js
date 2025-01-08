const PantryStaff = require("../models/PantryStaff");

exports.addPantryStaff = async (req, res) => {
  try {
    const staff = new PantryStaff(req.body);
    await staff.save();
    res.status(201).json(staff);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add functions for managing assigned tasks and tracking meal preparation...
