import express from "express";
import { upload } from "../middlewares/upload.js"; // Correctly import the upload middleware
import {
  AddStays,
  DeleteStays,
  EditStays,
  GetOneStays,
  GetRelatedStays,
  GetStays,
} from "../controllers/stays.js";

const routerStay = express.Router();

// Route to handle adding stays (with image upload)
routerStay.post("/Add", upload.single("image"), AddStays);

// Route for fetching stays
routerStay.get("/", GetStays);

// Route for editing a stay
routerStay.put("/Edit", upload.single("image"), EditStays);

// Route for deleting a stay
routerStay.delete("/delete", DeleteStays);
routerStay.get("/related/latest", GetRelatedStays);
routerStay.get("/:id", GetOneStays);
export default routerStay;
