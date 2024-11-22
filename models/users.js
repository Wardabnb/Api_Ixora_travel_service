import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    username: String,
    email: String,
    image: String,
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
