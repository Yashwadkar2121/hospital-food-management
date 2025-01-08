require("dotenv").config();
const express = require("express");
const connectToMongo = require("./config/database");
const patientRoutes = require("./routes/patientRoutes");
const dietChartRoutes = require("./routes/dietChartRoutes");
const pantryRoutes = require("./routes/pantryRoutes");
const deliveryRoutes = require("./routes/deliveryRoutes");
const userRoutes = require("./routes/userRoutes");

connectToMongo();

const app = express();
app.use(express.json());

app.use("/api/patients", patientRoutes);
app.use("/api/dietcharts", dietChartRoutes);
app.use("/api/pantry", pantryRoutes);
app.use("/api/delivery", deliveryRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
