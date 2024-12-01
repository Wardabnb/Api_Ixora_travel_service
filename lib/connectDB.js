import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to MongoDb!");
  } catch (e) {
    console.log("connexion failed " + e.message);
    process.exit(1);
  }
}
