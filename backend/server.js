require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ SIMPLE CORS (NO CRASH)
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🔥 BACKEND LIVE 🔥");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(console.error);

app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/task"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});