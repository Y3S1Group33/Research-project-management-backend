import express from "express";
import {
    saveMarkingSchema,
    getMarkingSchemaById,
    getMarkingSchema,
    updateMarkingSchema,
    deleteMarkingSchema,
} from "../controllers/markingSchema.js";

const markingSchemaRouter = express.Router();



markingSchemaRouter.post("/markingSchema", saveMarkingSchema);
markingSchemaRouter.get("/markingSchema/:id", getMarkingSchemaById);
markingSchemaRouter.get("/markingSchema", getMarkingSchema);
markingSchemaRouter.put("/markingSchema/:id", updateMarkingSchema);
markingSchemaRouter.delete("/markingSchema/:id", deleteMarkingSchema);

export default markingSchemaRouter;