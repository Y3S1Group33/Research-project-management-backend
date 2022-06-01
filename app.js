const express = require("express");
const cors=require("cors");
const connect = require("./utils/connection");

//const exampleRouter = require("");

const app = express();
app.use(cors());
app.use(express.json());

connect();

//app.use("/example", exampleRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;