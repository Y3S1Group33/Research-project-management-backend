import express from "express";
import {
    createStaffController,
    getStaffByIdController,
    getStaffUsersController,
    updateStaffUserController,
    deleteStaffUserController
} from "../controllers/staffController.js";

const staffRouter = express.Router();



staffRouter.post("/staff", createStaffController);
staffRouter.get("/staff/:id", getStaffByIdController);
staffRouter.get("/staff", getStaffUsersController);
staffRouter.put("/staff/:id", updateStaffUserController);
staffRouter.delete("/staff/:id", deleteStaffUserController);

export default staffRouter;