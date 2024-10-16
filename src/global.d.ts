// src/global.d.ts
import mongoose from 'mongoose';

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: MongooseCache; // Define the mongoose property here
    }
  }
}

interface MongooseCache {
  conn: mongoose.Connection | null; // Mongoose connection or null
  promise: Promise<mongoose.Connection> | null; // Promise for the connection or null
}

// Ensure this file is treated as a module
export {};
