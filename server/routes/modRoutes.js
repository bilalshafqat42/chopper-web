import express from "express";
import { createMod, updateMod } from "../controllers/modController.js";

const router = express.Router();

// create mod
router.post("/", createMod);

// update
router.put("/:id", updateMod);

export default router;
