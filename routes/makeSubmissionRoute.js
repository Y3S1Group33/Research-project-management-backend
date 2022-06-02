import express from "express";
import {
    createSubmissionController, getLatestStudentSubmissionController,updateLatestStudentSubmissionController

} from "../controllers/createSubmissionController.js";

const adminSubmissionRouter = express.Router();

adminSubmissionRouter.post("/makeSubmission", createSubmissionController);
adminSubmissionRouter.get("/makeSubmission", getLatestStudentSubmissionController);
adminSubmissionRouter.put("/makeSubmission/:id", updateLatestStudentSubmissionController);



export default adminSubmissionRouter;