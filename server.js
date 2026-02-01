import express from "express";
import cors from "cors";

import {
  getDishRecommendation,
  askRestaurantAgent,
  getLiveStatus,
} from "./geminiService.backend.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Health check (Render ke liye useful)
app.get("/", (req, res) => {
  res.json({ status: "✅ Swan backend is running" });
});

/* ----------------------------------------
   API ROUTES
----------------------------------------- */

// 1️⃣ Dish recommendation
app.post("/api/recommend", async (req, res) => {
  try {
    const { mood } = req.body;
    const data = await getDishRecommendation(mood || "hungry");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      recommendationText: "Something went wrong.",
      recommendedDishIds: [],
    });
  }
});

// 2️⃣ Restaurant chat / concierge
app.post("/api/ask", async (req, res) => {
  try {
    const { question } = req.body;
    const answer = await askRestaurantAgent(question || "");
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      answer: "Service temporarily unavailable.",
    });
  }
});

// 3️⃣ Live status / traffic
app.get("/api/status", async (req, res) => {
  try {
    const data = await getLiveStatus();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      text: "Unable to fetch live status.",
      source: null,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
