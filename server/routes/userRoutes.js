const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getDashboard,
} = require("../controllers/userController");
const { authenticate } = require("../middlewares/authMiddleware");

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes
router.get("/dashboard", authenticate, getDashboard);

module.exports = router;
