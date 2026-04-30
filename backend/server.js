require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// 🔴 IMPORTANT: CORS FIRST
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// 🔴 Handle preflight explicitly
app.options("*", cors());

app.use(express.json());

// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("🔥 NEW SERVER WORKING 🔥");
});
app.get("/create-user", async (req, res) => {
  const bcrypt = require("bcryptjs");
  const User = require("./models/user");

  const hashed = await bcrypt.hash("123456", 10);

  const user = await User.create({
    name: "Admin",
    email: "admin@gmail.com",
    password: hashed,
    role: "Admin"
  });

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/task"));

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});