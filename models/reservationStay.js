import mongoose, { Schema } from "mongoose";
const reservationStaysSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    stays: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stays",
      },
    ],

    floor: Number,
    price: Number,
    nbrRoom: Number,
    nbrPerson: Number,
    status: String,
  },
  { timestamps: true }
);
export const reservationStays = mongoose.model(
  "ReservationStays",
  reservationStaysSchema
);
