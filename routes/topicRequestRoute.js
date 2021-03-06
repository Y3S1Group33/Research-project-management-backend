import express from "express";
import {
    saveResearchTopic,
    getResearchTopicById,
    getResearchTopic,
    updateResearchTopic,
    deleteResearchTopic,
    getResearchTopicsByFeedbackGivenStatusAndSupervisorID,
    getResearchTopicsByReadyStatusAndPanelMemberID,
    getResearchTopicsByInitialStatus
} from "../controllers/topicRequestController.js";

const researchTopicRouter = express.Router();

researchTopicRouter.get("/researchTopic/initial", getResearchTopicsByInitialStatus);
researchTopicRouter.post("/researchTopic", saveResearchTopic);
researchTopicRouter.get("/researchTopic", getResearchTopic);
researchTopicRouter.get("/researchTopic/:id", getResearchTopicById);
researchTopicRouter.put("/researchTopic/:id", updateResearchTopic);
researchTopicRouter.delete("/researchTopic/:id", deleteResearchTopic);
researchTopicRouter.get("/researchTopic/feedbackGiven/:id", getResearchTopicsByFeedbackGivenStatusAndSupervisorID);
researchTopicRouter.get("/researchTopic/ready/:id", getResearchTopicsByReadyStatusAndPanelMemberID);

export default researchTopicRouter;