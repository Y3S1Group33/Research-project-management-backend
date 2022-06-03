import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import multer from "multer";
import "dotenv/config";
import { connect } from "./utils/connection.js";

import referenceRoutes from "./routes/reference.js";
import studentGroupRouter from "./routes/studentGroupRoute.js";
import researchTopicRouter from "./routes/topicRequestRoute.js";
import panelChatRouter from "./routes/panelChat.js";
import researchGroupRouter from "./routes/researchGroupRoutes.js";
import chatDataRouter from "./routes/chatDataRoute.js";
import studentRoutes from "./routes/studentRoute.js";
import staffRoute from "./routes/staffRoute.js";
import adminSubmissionRouter from "./routes/adminSubmissionRoute.js";
import fileRoute from "./routes/fileRoute.js";
import makeSubmissionRoute from "./routes/makeSubmissionRoute.js";
import markingSchemaRoute from "./routes/markingSchema.js";


const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

const PORT = process.env.PORT || 5000;

connect();

app.use("/api", referenceRoutes);
app.use("/api", studentGroupRouter);
app.use("/api", researchTopicRouter);
app.use("/api", panelChatRouter);
app.use("/api", researchGroupRouter);
app.use("/api", chatDataRouter);
app.use("/api",studentRoutes);
app.use("/api",staffRoute);
app.use("/api",adminSubmissionRouter);
app.use("/api",fileRoute);
app.use("/api",makeSubmissionRoute)
app.use("/api",markingSchemaRoute)


app.get("/", (req, res) => {
  res.send("Hello World!");
});



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