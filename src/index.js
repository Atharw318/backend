import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`Server is running at port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB connection Failed !!!", error);
  });

/*
2nd aproch to connect db connection by effi


import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listining on port ${process.env.PORT} `);
    });
  } catch (error) {
    console.log(error, "ERROR");
    throw error;
  }
})();
*/
