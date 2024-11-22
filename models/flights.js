import mongoose, { Schema } from "mongoose";
const flightSchema = new Schema(
  {
    airplane: String,
    from: String,
    to: String,
    departure: String,
    arrive: String,
    image: String,
    price: Number,
  },
  { timestamps: true }
);
export const Flights = mongoose.model("Flights", flightSchema);
