import express from "express";
import {
  AddNotification,
  DeleteNotification,
  EditNotification,
  GetNotification,
} from "../controllers/notification.js";

const routerNotifications = express.Router();

routerNotifications.post("/add", AddNotification);
routerNotifications.get("/", GetNotification);
routerNotifications.put("/Edit", EditNotification);
routerNotifications.delete("/delete", DeleteNotification);
//pour voir un utilisateur input id return user

export default routerNotifications;
