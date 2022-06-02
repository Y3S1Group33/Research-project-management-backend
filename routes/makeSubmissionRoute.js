import express from "express";
import {
    createSubmissionController, getLatestStudentSubmissionController,

} from "../controllers/createSubmissionController.js";

const adminSubmissionRouter = express.Router();

adminSubmissionRouter.post("/makeSubmission", createSubmissionController);
adminSubmissionRouter.get("/makeSubmission", getLatestStudentSubmissionController);



export default adminSubmissionRouter;