import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Augmentez le délai en millisecondes
    });
    console.log("Connected to MongoDb!");
  } catch (e) {
    console.log("connexion failed " + e.message);
    process.exit(1);
  }
}
