import mongoose, { Schema } from "mongoose";
const staysSchema = new Schema(
  {
    name: String,
    location: String,
    image: String,
    ranting: Number,
    description: String,
    price: Number,
  },
  { timestamps: true }
);
export const Stays = mongoose.model("Stays", staysSchema);
