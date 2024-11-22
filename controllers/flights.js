import { Flights } from "../models/flights.js";

export async function AddFlights(req, res) {
  const { airplane, from, to, departure, arrive, price } = req.body;

  console.log("req.file", req.file);
  const imageName = req.file.filename;
  const imageUrl = "http://localhost:4000/static/" + imageName;
  const flights = await Flights.create({
    airplane,
    price: parseInt(price),
    from,
    image: imageUrl,
    to,
    arrive,
    departure,
  });
  console.log("flight", flights);
  res.send("Flight Added Successfully");
}
export async function GetFlights(req, res) {
  const flights = await Flights.find();
  return res.json(flights);
}
export async function EditStFlights(req, res) {
  const { FlightId, airplane, price, from, to, arrive, departure } = req.body;
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }
  const imageName = req.file.filename;
  const imageUrl = "http://localhost:4000/static/" + imageName;
  await Flights.findByIdAndUpdate(FlightId, {
    airplane,
    price: parseFloat(price),
    from,
    image: imageUrl,
    to,
    arrive,
    departure,
  });
  res.send("Stay Update Successfully");
}
export async function DeleteFlights(req, res) {
  const { FlightId } = req.body;
  await Flights.findByIdAndDelete(FlightId);
  res.send("Flight Delete Successfully");
}
export async function GetRelatedFlights(req, res) {
  try {
    const flights = await Flights.find().sort({ updatedAt: -1 }).limit(3);
    if (!flights) {
      return res.status(404).json({ message: "Flights not found" });
    }
    return res.json(flights);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
export async function GetOneFlight(req, res) {
  try {
    const { id } = req.params;
    const flight = await Flights.findById(id);
    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }
    return res.json(flight);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
