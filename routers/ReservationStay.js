import express from "express";

import {
  AddReservationFlight,
  changeReservationStatus,
  GetReservationFlights,
} from "../controllers/ResetvationFlight.js";

const routerReservationFlights = express.Router();

routerReservationFlights.post("/add", AddReservationFlight);
routerReservationFlights.get("/", GetReservationFlights);
routerReservationFlights.post("/status", changeReservationStatus);
export default routerReservationFlights;
