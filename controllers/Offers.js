import { Offers } from "../models/offers.js";

export async function AddOffers(req, res) {
  const { name, price, image } = req.body;
  const stay = Offers.create({
    name,
    price,
    image,
  });
  res.send("Offer Added Successfully");
}
export async function GetOffers(req, res) {
  const offers = await Offers.find();
  return res.json(offers);
}
export async function EditOffers(req, res) {
  const { OfferId, name, price, image } = req.body;
  await Offers.findByIdAndUpdate(OfferId, {
    name,
    price,
    image,
  });
  res.send("Offer Update Successfully");
}
export async function DeleteOffers(req, res) {
  const { OfferId } = req.body;
  await Offers.findByIdAndDelete(OfferId);
  res.send("Offer Delete Successfully");
}
