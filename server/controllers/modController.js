import Mod from "../models/modModel.js";
import mongoose from "mongoose";

// get all mod applications
const getMods = async (req, res) => {
  try {
    console.log("Fetching mods...");
    const mods = await Mod.find({}).sort({ createdAt: -1 });
    console.log("Mods fetched:", mods);

    if (mods.length === 0) {
      return res.status(404).json({ error: "No mods found" });
    }

    res.status(200).json(mods);
  } catch (error) {
    console.error("Error fetching mods:", error);
    res.status(500).json({ error: "Failed to fetch mods" });
  }
};

// get single mod application
const getMod = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid mod ID" });
  }

  try {
    const mod = await Mod.findById(id);

    if (!mod) {
      return res.status(404).json({ error: "No such mod" });
    }

    res.status(200).json(mod);
  } catch (error) {
    console.error("Error fetching mod:", error);
    res.status(500).json({ error: "Failed to fetch mod" });
  }
};

// create a new mod
const createMod = async (req, res) => {
  const { name, email, dateFrom, dateTo, area, companyName, textArea } =
    req.body;

  // add to the database
  try {
    const mod = await Mod.create({
      name,
      email,
      dateFrom,
      dateTo,
      area,
      companyName,
      textArea,
    });
    res.status(200).json(mod);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update mod
const updateMod = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such mod" });
  }

  const mod = await Mod.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!mod) {
    return res.status(400).json({ error: "No such mod" });
  }

  res.status(200).json(mod);
};

export { getMod, getMods, createMod, updateMod };
