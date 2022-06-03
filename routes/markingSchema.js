import express from "express";
import {
    saveMarkingSchemas,
    getMarkingSchemasById,
    getMarkingSchemas,
    updateMarkingSchemas,
    deleteMarkingSchemas,
} from "../controllers/markingSchema.js";

const markingSchemaRouter = express.Router();



markingSchemaRouter.post("/markingSchema", saveMarkingSchemas);
markingSchemaRouter.get("/markingSchema/:id", getMarkingSchemasById);
markingSchemaRouter.get("/markingSchema", getMarkingSchemas);
markingSchemaRouter.put("/markingSchema/:id", updateMarkingSchemas);
markingSchemaRouter.delete("/markingSchema/:id", deleteMarkingSchemas);

export default markingSchemaRouter;