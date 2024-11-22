import express from "express";

import {
  AddOffers,
  DeleteOffers,
  EditOffers,
  GetOffers,
} from "../controllers/Offers.js";

const routerOffers = express.Router();

routerOffers.post("/add", AddOffers);
routerOffers.get("/", GetOffers);
routerOffers.put("/Edit", EditOffers);
routerOffers.delete("/delete", DeleteOffers);
//pour voir un utilisateur input id return user

export default routerOffers;
