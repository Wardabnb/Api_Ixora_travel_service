import { nanoid } from "nanoid";
import { ReservationFlights } from "../models/reservationFlight.js";

export async function AddReservationFlight(req, res) {
  const { userId, flight, classe } = req.body;

  // - orderNum (nanoid)
  const flightNum = nanoid();
  // create order
  const reservationFlight = await ReservationFlights.create({
    flightNum,
    classe,
    user: userId,
    flights: flight,
    status: "new",
  });
  // response with the order
  res.json({ reservationFlight });
}

export async function GetReservationFlights(req, res) {
  const reservationFlight = await ReservationFlights.find()
    .populate("user")
    .populate("flights");
  if (!reservationFlight) {
    return res.status(404).json({ message: "No reservation flight found" });
  }
  return res.json(reservationFlight);
}
export async function changeReservationStatus(req, res) {
  let { ReservationId, value } = req.body;
  console.log("ReservationId", ReservationId, "value", value);
  try {
    await ReservationFlights.findByIdAndUpdate(ReservationId, {
      status: value,
    });
    res.status(200).json({ message: "Stay was updated successfully" });
  } catch (error) {
    console.log("Error updating reservation status:", error);
    res.status(500).json({ message: "Failed to update Reservation status" });
  }
}
