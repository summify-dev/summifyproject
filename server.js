const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const meetingRoutes = require("./routes/meetings");
const transcriptionRoutes = require("./routes/transcription");
const aiRoutes = require("./routes/ai");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🚀 Secure connection established with local Windows MongoDB cluster."))
  .catch(err => console.error("❌ MongoDB initialization fatal error setup breakdown:", err));

app.use("/auth", authRoutes);
app.use("/meetings", meetingRoutes);
app.use("/transcription", transcriptionRoutes);
app.use("/ai", aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌍 SynapseAI Backend platform active on Port: ${PORT}`));