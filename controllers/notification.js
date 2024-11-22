import { Notification } from "../models/notification.js";

export async function AddNotification(req, res) {
  const { user, title, message } = req.body;
  const notification = Notification.create({
    user,
    title,
    message,
    isRead: false,
  });
  res.send("Notification Added Successfully");
}
export async function GetNotification(req, res) {
  const notifications = await Notification.find();
  return res.json(notifications);
}
export async function EditNotification(req, res) {
  const { NotificationId, user, title, message, isRead } = req.body;
  await Notification.findByIdAndUpdate(NotificationId, {
    user,
    title,
    message,
    isRead,
  });
  res.send("Notification Update Successfully");
}
export async function DeleteNotification(req, res) {
  const { NotificationId } = req.body;
  await Notification.findByIdAndDelete(NotificationId);
  res.send("Notification Delete Successfully");
}
