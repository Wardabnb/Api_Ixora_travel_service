import { Stays } from "../models/stays.js";

export async function AddStays(req, res) {
  const { name, location, description, price, ranting } = req.body;

  console.log("req.file", req.file);
  const imageName = req.file.filename;
  const imageUrl = "http://localhost:4000/static/" + imageName;
  const stays = await Stays.create({
    name,
    price: parseInt(price),
    ranting: parseInt(ranting),
    image: imageUrl,
    description,
    location,
  });
  console.log("stay", stays);
  res.send("Stay Added Successfully");
}
export async function GetStays(req, res) {
  const { page } = req.query;
  const stays = await Stays.find()
    .skip((page - 1) * 6)
    .limit(6);
  return res.json(stays);
}
export async function EditStays(req, res) {
  const { StayId, name, location, ranting, description, price } = req.body;
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }
  const imageName = req.file.filename;
  const imageUrl = "http://localhost:4000/static/" + imageName;
  await Stays.findByIdAndUpdate(StayId, {
    name,
    location,
    image: imageUrl,
    ranting,
    description,
    price,
  });
  res.send("Stay Update Successfully");
}
export async function DeleteStays(req, res) {
  const { StayId } = req.body;
  await Stays.findByIdAndDelete(StayId);
  res.send("Stay Delete Successfully");
}
export async function GetRelatedStays(req, res) {
  try {
    const stays = await Stays.find().sort({ updatedAt: -1 }).limit(3);
    if (!stays) {
      return res.status(404).json({ message: "Stays not found" });
    }
    return res.json(stays);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
export async function GetOneStays(req, res) {
  try {
    const { id } = req.params;
    const stay = await Stays.findById(id);
    if (!stay) {
      return res.status(404).json({ message: "Stay not found" });
    }
    return res.json(stay);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
