import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import authRouter from "./routes/authRoute.js";
const PORT = process.env.APP_PORT || 3001;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "rest api",
  });
});

// All routes will be here
app.use("/api/v1/auth", authRouter);

app.use("*", (req, res, next) => {
  res.status(404).json({
    status: "error",
    message: "resource not found",
  });
});

app.listen(PORT, () => {
  console.log("server listening on 3000");
});
