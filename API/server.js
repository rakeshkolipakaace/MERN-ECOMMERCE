import express from "express";

import mongoose from "mongoose";

import userRouter from "./Routes/user.js";

const app = express();

//home testing route
app.get("/", (req, res) => {
  res.json({message:"this is home route"})
});

//user router

app.use("/api/user", userRouter)

mongoose
  .connect(
    "mongodb+srv://mongodb url atlas",
    {
      dbname: "MERN-Ecommerce",
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const port = 2000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
