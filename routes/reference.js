import express from "express";
import {
    saveReferenceSchema,
    getReferenceSchemaById,
    getReferenceSchema,
    updateReferenceSchema,
    deleteReferenceSchema,
} from "../controllers/reference.js";

const markingSchemaRouter = express.Router();



markingSchemaRouter.post("/reference", saveReferenceSchema);
markingSchemaRouter.get("/reference/:id", getReferenceSchemaById);
markingSchemaRouter.get("/reference", getReferenceSchema);
markingSchemaRouter.put("/reference/:id", updateReferenceSchema);
markingSchemaRouter.delete("/reference/:id", deleteReferenceSchema);

export default markingSchemaRouter;