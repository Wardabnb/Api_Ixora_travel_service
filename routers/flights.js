import express from "express";
import { upload } from "../middlewares/upload.js";
import {
  AddFlights,
  DeleteFlights,
  EditStFlights,
  GetFlights,
  GetOneFlight,
  GetRelatedFlights,
} from "../controllers/flights.js";

const routerFlights = express.Router();

routerFlights.post("/add", upload.single("image"), AddFlights);
routerFlights.get("/", GetFlights);
routerFlights.put("/Edit", upload.single("image"), EditStFlights);
routerFlights.delete("/delete", DeleteFlights);
//pour voir un utilisateur input id return user
routerFlights.get("/related/latest", GetRelatedFlights);
routerFlights.get("/:id", GetOneFlight);
export default routerFlights;
