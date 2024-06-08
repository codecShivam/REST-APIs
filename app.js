import express from "express";
import authRouter from "./routes/authRoute.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "rest api",
  });
});

// All routes will be here
app.use("/api/v1/auth", authRouter);

app.listen(3000, () => {
  console.log("server listening on 3000");
});
