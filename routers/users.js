import express from "express";
import { getOneUser, LoginWithGoogle } from "../controllers/user.js";

const routeruser = express.Router();

routeruser.get("/login/google", LoginWithGoogle);

//pour voir un utilisateur input id return user
routeruser.get("/:id", getOneUser);

export default routeruser;
