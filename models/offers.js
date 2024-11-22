import mongoose, { Schema } from "mongoose";
const offersSchema = new Schema(
  {
    name: String,
    price: Number,
    image: String,
  },
  { timestamps: true }
);
export const Offers = mongoose.model("Offers", offersSchema);
