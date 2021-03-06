import express from "express";
import {
    saveResearchGroup,
    getResearchGroupById,
    getResearchGroup,
    updateResearchGroup,
    deleteResearchGroup,
    getResearchGroupBySupervisorID,
    getResearchGroupByStudentGroupID

} from "../controllers/researchGroupController.js";

const researchGroupRouter = express.Router();


researchGroupRouter.post("/researchGroup", saveResearchGroup);
researchGroupRouter.get("/researchGroup", getResearchGroup);
researchGroupRouter.get("/researchGroup/supervisor/:id", getResearchGroupBySupervisorID);
researchGroupRouter.get("/researchGroup/studentGroup/:id", getResearchGroupByStudentGroupID);
researchGroupRouter.get("/researchGroup/:id", getResearchGroupById);
researchGroupRouter.put("/researchGroup/:id", updateResearchGroup);
researchGroupRouter.delete("/researchGroup/:id", deleteResearchGroup);


export default researchGroupRouter;