require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ✅ FINAL CORS FIX (WORKS ON RAILWAY)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// ✅ BODY PARSER
app.use(express.json());

// ✅ ROOT ROUTE (for testing)
app.get("/", (req, res) => {
  res.send("🔥 BACKEND LIVE 🔥");
});

// ✅ ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/task"));

// ✅ MONGODB CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ DB connected"))
  .catch(err => console.log("❌ DB error:", err));

// ✅ PORT (IMPORTANT FOR RAILWAY)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});