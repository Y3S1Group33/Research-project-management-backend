import express from "express";
import {
    saveResearchGroup,
    getResearchGroupById,
    getResearchGroup,
    updateResearchGroup,
    deleteResearchGroup,
    getResearchGroupBySupervisorID

} from "../controllers/researchGroupController.js";

const researchGroupRouter = express.Router();

researchGroupRouter.post("/researchGroup", saveResearchGroup);
researchGroupRouter.get("/researchGroup", getResearchGroup);
researchGroupRouter.get("/researchGroup/:id", getResearchGroupById);
researchGroupRouter.put("/researchGroup/:id", updateResearchGroup);
researchGroupRouter.delete("/researchGroup/:id", deleteResearchGroup);
researchGroupRouter.get("/researchGroup/supervisor/:id", getResearchGroupBySupervisorID);

export default researchGroupRouter;