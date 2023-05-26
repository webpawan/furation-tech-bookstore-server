import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("data base connected");
  })
  .catch(() => {
    console.log("data base not connected");
  });
