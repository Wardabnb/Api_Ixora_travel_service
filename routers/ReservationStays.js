import express from "express";
import {
  AddReservationStay,
  changeReservationStatus,
  GetReservationStays,
} from "../controllers/Reservationstays.js";

const routerReservationStays = express.Router();

routerReservationStays.post("/add", AddReservationStay);
routerReservationStays.get("/", GetReservationStays);
routerReservationStays.post("/status", changeReservationStatus);

export default routerReservationStays;
