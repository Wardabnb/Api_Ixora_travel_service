import mongoose, { Schema } from "mongoose";
const AdminSchema = new Schema(
  {
    name: String,
    email: String,
    image: String,
    password: String,
    role: String,
  },
  { timestamps: true }
);
export const Admin = mongoose.model("Admin", AdminSchema);
