import axios from "axios";
import qs from "qs";

export async function GetIdAndToken(code) {
  const url = "https://oauth2.googleapis.com/token";

  const values = {
    code,
    client_id:
      "18156850824-r8a2q546pgirt6ptq9ccnifofommig8j.apps.googleusercontent.com",
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: "http://localhost:4000/users/login/google",
    grant_type: "authorization_code",
  };
  const res = await axios.post(url, qs.stringify(values), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
}
