import express, { json } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongoodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("HELLO FROM APP");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGOODB_URL);
    app.listen(8080, () =>
      console.log("Server has been started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(err);
  }
};

startServer();
