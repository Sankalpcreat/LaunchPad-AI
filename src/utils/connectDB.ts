// src/utils/connectDB.ts
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

async function connectDB() {
  try {
    // Ensure MONGODB_URI is a string here
    await mongoose.connect(MONGODB_URI as string)
    
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Rethrow the error if needed
  }
}

export default connectDB; // Export the connectDB function
