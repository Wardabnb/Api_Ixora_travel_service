import mongoose, { Schema } from "mongoose";
const notificationSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: String,
    message: String,
    isRead: Boolean,
  },
  { timestamps: true }
);
export const Notification = mongoose.model("notification", notificationSchema);
