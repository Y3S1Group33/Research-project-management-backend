import express from "express";
import {
    createSubmissionController, getLatestStudentSubmissionController,getLatestStudentSubmissionControllerById,updateLatestStudentSubmissionController

} from "../controllers/createSubmissionController.js";

const adminSubmissionRouter = express.Router();

adminSubmissionRouter.post("/makeSubmission", createSubmissionController);
adminSubmissionRouter.get("/makeSubmission", getLatestStudentSubmissionController);
adminSubmissionRouter.get("/makeSubmission/:id", getLatestStudentSubmissionControllerById);
adminSubmissionRouter.put("/makeSubmission/:id", updateLatestStudentSubmissionController);



export default adminSubmissionRouter;