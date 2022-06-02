import express from "express";
import {
    saveResearchGroup,
    getResearchGroupById,
    getResearchGroup,
    updateResearchGroup,
    deleteResearchGroup,

} from "../controllers/researchTopicController.js";

const researchGroupRouter = express.Router();

researchGroupRouter.post("/researchGroup", saveResearchGroup);
researchGroupRouter.get("/researchGroup", getResearchGroup);
researchGroupRouter.get("/researchGroup/:id", getResearchGroupById);
researchGroupRouter.put("/researchGroup/:id", updateResearchGroup);
researchGroupRouter.delete("/researchGroup/:id", deleteResearchGroup);

export default researchGroupRouter;