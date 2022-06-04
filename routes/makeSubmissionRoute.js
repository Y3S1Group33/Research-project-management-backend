import express from "express";
import {
    createSubmissionController, getLatestStudentSubmissionController,getStudentSubmissionController, getLatestStudentSubmissionControllerById,updateLatestStudentSubmissionController

} from "../controllers/createSubmissionController.js";

const adminSubmissionRouter = express.Router();

adminSubmissionRouter.post("/makeSubmission", createSubmissionController);
adminSubmissionRouter.get("/makeSubmission", getLatestStudentSubmissionController);
adminSubmissionRouter.get("/makeSubmissionAll", getStudentSubmissionController);
adminSubmissionRouter.get("/makeSubmission/:id", getLatestStudentSubmissionControllerById);
adminSubmissionRouter.put("/makeSubmission/:id", updateLatestStudentSubmissionController);

export default adminSubmissionRouter;