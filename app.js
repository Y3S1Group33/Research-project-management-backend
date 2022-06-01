import express from "express";
import cors from "cors";
import { connect } from "./utils/connection.js";

//const exampleRouter = require("");

const app = express();
app.use(cors());
app.use(express.json());

connect();

//app.use("/example", exampleRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });

  export default app;