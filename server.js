import cookieParser from "cookie-parser";
import express from "express";
import "./DB/connection.js";
import userRoute from "./routes/UserRoutes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log("start server", PORT);
});
