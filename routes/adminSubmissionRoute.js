import express from "express";
import {
    createAdminSubmissionController,
    getAdminSubmissionController,
    getAdminSubmissionByIdController,
    updateAdminSubmissionController,
    deleteAdminSubmissionController,
    getLatestAdminSubmissionController
} from "../controllers/adminSubmissionController.js";

const adminSubmissionRouter = express.Router();

adminSubmissionRouter.post("/adminSubmission", createAdminSubmissionController);
adminSubmissionRouter.get("/adminSubmission/:id", getAdminSubmissionByIdController);
adminSubmissionRouter.get("/adminLatestSubmission", getLatestAdminSubmissionController);
adminSubmissionRouter.get("/adminSubmission", getAdminSubmissionController);
adminSubmissionRouter.put("/adminSubmission/:id", updateAdminSubmissionController);
adminSubmissionRouter.delete("/adminSubmission/:id", deleteAdminSubmissionController);

export default adminSubmissionRouter;