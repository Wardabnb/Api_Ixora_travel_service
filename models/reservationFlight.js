import mongoose, { Schema } from "mongoose";
const reservationFlightsSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    classe: String,
    flights: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Flights",
      },
    ],

    status: String,
  },
  { timestamps: true }
);
export const ReservationFlights = mongoose.model(
  "ReservationFlights",
  reservationFlightsSchema
);
