import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://abhijha8287_db_user:w_ULWJwS_k26gbt@cluster0.w4dw2wz.mongodb.net/";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};
