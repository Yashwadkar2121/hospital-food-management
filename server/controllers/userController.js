const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found!" });

    // Verify password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid)
      return res.status(401).json({ message: "Invalid credentials!" });

    // Generate token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token, role: user.role });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Role-specific pages
exports.getDashboard = async (req, res) => {
  try {
    const role = req.user.role;

    switch (role) {
      case "admin":
        return res.status(200).json({ page: "Admin Dashboard" });

      case "pantryStaff":
        return res.status(200).json({ page: "Pantry Staff Dashboard" });

      case "deliveryPersonnel":
        return res.status(200).json({ page: "Delivery Personnel Dashboard" });

      default:
        return res.status(403).json({ message: "Access Denied!" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
