require("dotenv").config();
const express = require("express");
const connectToMongo = require("./config/database");
const patientRoutes = require("./routes/patientRoutes");
const dietChartRoutes = require("./routes/dietChartRoutes");
const pantryRoutes = require("./routes/pantryRoutes");
const deliveryRoutes = require("./routes/deliveryRoutes");
const userRoutes = require("./routes/userRoutes");

// Database function
connectToMongo();

// Express app
const app = express();
app.use(express.json());

// Cors policy
const cors = require("cors");
const allowedOrigins = ["http://localhost:5173"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

// Available Routes
app.use("/api/patients", patientRoutes);
app.use("/api/dietcharts", dietChartRoutes);
app.use("/api/pantry", pantryRoutes);
app.use("/api/delivery", deliveryRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
