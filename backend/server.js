require("dotenv").config();
console.log("Loaded MONGO_URI:", process.env.MONGO_URI); // Debug line

const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
