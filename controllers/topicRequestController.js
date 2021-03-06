import {
    saveResearchTopicService,
    getResearchTopicByIdService,
    getResearchTopicService,
    updateResearchTopicService,
    deleteResearchTopicService,
    getResearchTopicsByFeedbackGivenStatusAndSupervisorIDService,
    getResearchTopicsByReadyStatusAndPanelMemberService,
    getResearchTopicsByInitialStatusService
} from "../services/topicRequestService.js";

export const saveResearchTopic = async (req, res) => {
    try {
      const researchTopic = await saveResearchTopicService(req.body);
      res.send("Successfully created Research Topic..");
    } catch (err) {
      res.send(err.message);
    }
  };
  
export const getResearchTopicById = async (req, res) => {
    try {
      const researchTopic = await getResearchTopicByIdService(req.params.id);
      res.json(researchTopic);
    } catch (err) {
      res.json(err.message);
    }
  };

export const getResearchTopicsByFeedbackGivenStatusAndSupervisorID = async (req, res) => {
    try {
        const researchTopic = await getResearchTopicsByFeedbackGivenStatusAndSupervisorIDService(req.params.id);
        res.json(researchTopic);
    } catch (err) {
        res.json(err.message);
    }
};



export const getResearchTopicsByReadyStatusAndPanelMemberID = async (req, res) => {
    try {
        const researchTopic = await getResearchTopicsByReadyStatusAndPanelMemberService(req.params.id);
        res.json(researchTopic);
    } catch (err) {
        res.json(err.message);
    }
};

export const getResearchTopicsByInitialStatus = async (req, res) => {
    try {
        const researchTopic = await getResearchTopicsByInitialStatusService();
        res.json(researchTopic);
    } catch (err) {
        res.json(err.message);
    }
};

export const getResearchTopic = async (req, res) => {
    try {
      const researchTopic = await getResearchTopicService();
      res.json(researchTopic);
    } catch (err) {
      res.json(err.message);
    }
  };
  
export const updateResearchTopic = async (req, res) => {
    try {
      const researchTopic = await updateResearchTopicService(req.params.id, req.body);
      res.json("Successfully updated research topic..");
    } catch (err) {
      res.json(err.message);
    }
  };
  
export const deleteResearchTopic = async (req, res) => {
    try {
      const researchTopic = await deleteResearchTopicService(req.params.id);
      res.json("Successfully deleted research topic..");
    } catch (err) {
      res.json(err.message);
    }
  };