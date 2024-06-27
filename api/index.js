import express from "express";
import mongoose from "mongoose";
import userRouter from './routes/user.route.js'
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/user", userRouter);
