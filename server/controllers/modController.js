import Mod from "../models/modModel.js";

const createMod = async (req, res) => {
  res.status(200).json({ mssg: "create mod application" });
};

const updateMod = async (req, res) => {
  res.status(200).json({ mssg: "update mod application" });
};

export { createMod, updateMod };
