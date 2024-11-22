import axios from "axios";

export async function createCheckout(req, res) {
  const chargily_key = process.env.CHARGILY_PRIVATE_KEY;
  const { subTotal, cartItem } = req.body;
  console.log("subTotal", subTotal);

  const response = await axios.post(
    "https://pay.chargily.net/test/api/v2/checkouts",
    {
      amount: subTotal,
      currency: "dzd",
      success_url: "http://localhost:3000/dashboard",
      failure_url: "http://localhost:3000/Failure",
      locale: "en",
      items: cartItem,
    },
    {
      headers: {
        Authorization: `Bearer ${chargily_key}`,
      },
    }
  );
  res.json({ checkout_url: response.data.checkout_url });
}
