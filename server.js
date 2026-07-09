const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Mission 2 API is Running"
    });
});

app.use("/api/users", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});