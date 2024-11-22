import bcrypt from "bcrypt";
import { Admin } from "../models/admin.js";

export async function login(req, res) {
  const { email, password } = req.body;

  const UtilisateurTrouve = await Admin.findOne({ email: email });

  if (!UtilisateurTrouve) {
    // si l'utilisateur n'existe pas
    return res.status(400).json({ message: "email or password incorrect" });
  }
  const passwordMatch = await bcrypt.compare(
    password,
    UtilisateurTrouve.password
  );
  if (passwordMatch) {
    return res.status(200).json(UtilisateurTrouve);
  } else {
    return res.status(400).json({ message: "email or password incorrect" });
  }
}

export async function signup(req, res) {
  const { email, password, name, image } = req.body;

  const UtilisateurTrouve = await Admin.find({ email: email });

  if (UtilisateurTrouve.length) {
    return res.status(400).json({ message: "already exists" });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const UtilisateurCreer = await Admin.create({
    email: email,
    password: passwordHash,
    name: name,
    role: "admin",
    image,
  });

  res.status(200).json(UtilisateurCreer);
}
export async function GetAdmins(req, res) {
  const admin = await Admin.find();
  console.log("admin", admin);

  return res.json(admin);
}
