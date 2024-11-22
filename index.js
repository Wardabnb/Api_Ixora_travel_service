import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/connectDB.js";
import session from "express-session";
import helmet from "helmet";
import routerStay from "./routers/stays.js";
import routeruser from "./routers/users.js";
import routerFlights from "./routers/flights.js";
import routerReservationStays from "./routers/ReservationStays.js";
import routerOffers from "./routers/offers.js";
import routerNotifications from "./routers/notification.js";
import path from "path";
import passport from "passport";
import routerAdmin from "./routers/admin.js";
dotenv.config();
import url from "url";
import routerCheckout from "./routers/checkout.js";
import routerReservationFlights from "./routers/ReservationStay.js";

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // form data
app.use(cors());
app.use(helmet());
app.use(
  session({
    secret: "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",
    resave: false,
    saveUninitialized: true,
  })
);
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.use(passport.initialize());
app.use(passport.session());

//connections
connectDB();
app.use("/users", routeruser);
app.use("/stays", routerStay);
app.use("/flights", routerFlights);
app.use("/reservationStay", routerReservationStays);
app.use("/reservationFlight", routerReservationFlights);
app.use("/offers", routerOffers);
app.use("/notifications", routerNotifications);
app.use("/admin", routerAdmin);
app.use("/static", express.static(path.join(__dirname, "uploads")));
app.use("/checkouts", routerCheckout);
//start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
