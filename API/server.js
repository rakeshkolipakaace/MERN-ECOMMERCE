import express from "express";

import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://rakeshkolipaka2125:Rakesh630@cluster0.v9r2kmk.mongodb.net/",
    {
      dbname: "MERN-Ecommerce",
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const port = 2000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
