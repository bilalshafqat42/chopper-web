import express from "express";
import {
  getMod, // Should handle fetching all mods
  getMods, // Should handle fetching a single mod by ID
  createMod,
  updateMod,
} from "../controllers/modController.js";

const router = express.Router();

// GET all mods
router.get("/", getMods); // Corrected to match controller that fetches all mods

// GET a single mod by ID
router.get("/:id", getMod); // Corrected to match controller for single mod

// POST a new mod
router.post("/", createMod);

// UPDATE a mod
router.patch("/:id", updateMod);

export default router;
