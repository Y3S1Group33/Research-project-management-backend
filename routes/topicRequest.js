import express from "express";
import res from "express/lib/response";
import {
    saveResearchTopic,
    getResearchTopicById,
    getResearchTopic,
    updateResearchTopic,
    deleteResearchTopic,
} from "../controllers/topicRequest";

const researchTopicRouter = express.Router();

researchTopicRouter.post("/researchTopic", saveResearchTopic);
researchTopicRouter.get("/researchTopic/:id", getResearchTopicById);
researchTopicRouter.get("/researchTopic", getResearchTopic);
researchTopicRouter.put("/researchTopic/:id", updateResearchTopic);
researchTopicRouter.delete("/researchTopic/:id", deleteResearchTopic);

export default researchTopicRouter;