import express from "express";
import {
    createController,
    getStudentsController,
    getStudentByIdController,
    updateStudentController,
    deleteStudentController,
} from "../controllers/studentController.js";

const studentRoutes = express.Router();

studentRoutes.post("/student", createController);
studentRoutes.get("/student", getStudentsController);
studentRoutes.get("/student/:id", getStudentByIdController);
studentRoutes.put("/student/:id", updateStudentController);
studentRoutes.delete("/student/:id", deleteStudentController);

export default studentRoutes;