import express, { Application } from "express";
import dotenv from "dotenv";
import authRoute from "./auth/src/routes/authRoutes";
import connectMongoDB from "./auth/src/config/connectMongoDB";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || "5000", 10);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectMongoDB();
});
