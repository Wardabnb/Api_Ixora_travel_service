import express from "express";
import { GetAdmins, login, signup } from "../controllers/admin.js";

const routerAdmin = express.Router();

routerAdmin.post("/login", login);
routerAdmin.post("/signup", signup);
routerAdmin.get("/all", GetAdmins);

export default routerAdmin;
