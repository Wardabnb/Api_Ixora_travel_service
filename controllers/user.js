import { User } from "../models/users.js";
import { GetIdAndToken } from "../services/user.js";
import axios from "axios";

export async function LoginWithGoogle(req, res) {
  try {
    const { code } = req.query;
    if (!code)
      return res.status(400).json({ error: "Authorization code is required" });

    const userAccessData = await GetIdAndToken(code);
    const userInfoResponse = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${userAccessData.access_token}`,
        },
      }
    );

    const userInfo = userInfoResponse.data;

    const user = await User.findOneAndUpdate(
      { email: userInfo.email },
      {
        username: userInfo.name,
        email: userInfo.email,
        googleId: userInfo.id,
        image: userInfo.picture,
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    return res.redirect("http://localhost:3000/dashboard?userId=" + user._id);
  } catch (error) {
    console.error("Login with Google error:", error.message);
    return res.status(500).json({ error: "Failed to log in with Google" });
  }
}

export async function getOneUser(req, res) {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log("user", user);

  res.json({ user });
}
