import express from "express";
import {
    saveStudentGroup,
    getStudentGroupById,
    getStudentGroup,
    updateStudentGroup,
    deleteStudentGroup,
} from "../controllers/studentGroupController.js";

const studentGroupRouter = express.Router();

studentGroupRouter.post("/studentGroup", saveStudentGroup);
studentGroupRouter.get("/studentGroup/:id", getStudentGroupById);
studentGroupRouter.get("/studentGroup", getStudentGroup);
studentGroupRouter.put("/studentGroup/:id", updateStudentGroup);
studentGroupRouter.delete("/studentGroup/:id", deleteStudentGroup);

export default studentGroupRouter;