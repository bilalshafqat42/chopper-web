import express from "express";
import {
  getMod,
  getMods,
  createMod,
  updateMod,
} from "../controllers/modController.js";

const router = express.Router();

// GET all mod
router.get("/", getMods);

// GET a single mod
router.get("/:id", getMod);

// POST a new mod
router.post("/", createMod);

// UPDATE a mod
router.patch("/:id", updateMod);

export default router;
