import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import multer from "multer";
import { connect } from "./utils/connection.js";

import referenceRoutes from "./routes/reference.js";
import studentGroupRouter from "./routes/studentGroupRoute.js";
import researchTopicRouter from "./routes/topicRequestRoute.js";

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

connect();

app.use("/api", referenceRoutes);
app.use("/api", studentGroupRouter);
app.use("/api", researchTopicRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });

  // const storage = multer.diskStorage({
  //   destination: (req, file, cb) =>{
  //     cb(null, 'public')
  //   },
  //   filename: (req, file, cb) =>{
  //     cb(null, Date.now() + '-' + file.originalname)
  //   }
  // })

  // const upload = multer({storage}).single('file');

  // app.post('/api/markingSchema', (req,res)=>{
  //   upload(req, res, (err)=>{
  //     if(err){
  //       return res.status(500).json(err)
  //     }
  //     return res.status(200).send(req.file)
  //   })
  // })

  export default app;