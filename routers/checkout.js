import express from "express";
import { createCheckout } from "../controllers/checkout.js";

const routerCheckout = express.Router();

routerCheckout.post("/create", createCheckout);

export default routerCheckout;
