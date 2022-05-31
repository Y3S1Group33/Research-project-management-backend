import express from "express";
import cors from "cors";
import { connect } from "./utils/dbConnect.js";

import exampleRouter from "";

const app = express();
app.use(cors());
app.use(express.json());

connect();

app.use("/example", exampleRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;