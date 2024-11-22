import { nanoid } from "nanoid";
import { reservationStays } from "../models/reservationStay.js";

export async function AddReservationStay(req, res) {
  const { userId, stay, floor, nbrRoom, nbrPerson, price } = req.body;

  // - orderNum (nanoid)
  const stayNum = nanoid();
  // create order
  const reservationStay = await reservationStays.create({
    stayNum,
    floor,
    price,
    nbrRoom,
    nbrPerson,
    user: userId,
    stays: stay,
    status: "new",
  });
  // response with the order
  res.json({ reservationStay });
}

export async function GetReservationStays(req, res) {
  const reservationStay = await reservationStays
    .find()
    .populate("user")
    .populate("stays");
  if (!reservationStay) {
    return res.status(404).json({ message: "No reservation Stay found" });
  }
  return res.json(reservationStay);
}

export async function changeReservationStatus(req, res) {
  let { ReservationId, value } = req.body;
  console.log("ReservationId", ReservationId, "value", value);
  try {
    await reservationStays.findByIdAndUpdate(ReservationId, { status: value });
    res.status(200).json({ message: "Stay was updated successfully" });
  } catch (error) {
    console.log("Error updating reservation status:", error);
    res.status(500).json({ message: "Failed to update Reservation status" });
  }
}
