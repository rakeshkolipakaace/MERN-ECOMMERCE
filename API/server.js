import express from "express";

import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb+srv://url to mongodb", {
    dbname: "MERN-Ecommerce",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const port = 2000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
