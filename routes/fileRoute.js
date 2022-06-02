import express from "express";
import {
    createFileController,

} from "../controllers/fileController.js";

const fileRoute = express.Router();

fileRoute.post("/file", createFileController);


export default fileRoute;