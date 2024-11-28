import Mod from "../models/modModel.js";
import mongoose from "mongoose";

// get all mod applications

const getMod = async (req, res) => {
  const mods = await Mod.find({}).sort({ createdAt: -1 });
  res.status(200).json(mods);
};

// get single mod application
const getMods = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }

  const mod = await Mod.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }
  res.status(200).json(mod);
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
    return res.status(400).json({ error: "no such workout" });
  }

  const mod = await Mod.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!mod) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(mod);
};

export { getMod, getMods, createMod, updateMod };
