import {
    saveResearchTopic,
    getResearchTopicById,
    getResearchTopic,
    updateResearchTopic,
    deleteResearchTopic,
    getResearchTopicsByFeedbackGivenStatusAndSupervisorIDRepo,
    getResearchTopicsByReadyStatusAndPanelMemberIDRepo,
    getResearchTopicsByInitialStatusRepo

} from "../repository/topicRequestRepo.js"

export const saveResearchTopicService = async (data) => {
    const { studentGroupId, topic, researchPanelId, supervisor, coSupervisor, feedback, status } = data;
    try {
      await saveResearchTopic({ studentGroupId, topic, researchPanelId, supervisor, coSupervisor, feedback, status });
      return Promise.resolve("Successfully Create Research Topic.");
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };

export const getResearchTopicByIdService = async (id) => {
    try {
      const researchTopic = await getResearchTopicById(id);
      return Promise.resolve(researchTopic);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };

export const getResearchTopicsByFeedbackGivenStatusAndSupervisorIDService = async (id) => {
    try {
        const researchTopic = await getResearchTopicsByFeedbackGivenStatusAndSupervisorIDRepo(id);
        return Promise.resolve(researchTopic);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getResearchTopicsByReadyStatusAndPanelMemberService = async (id) => {
    try {
        const researchTopic = await getResearchTopicsByReadyStatusAndPanelMemberIDRepo(id);
        return Promise.resolve(researchTopic);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};
  
export const getResearchTopicService = async () => {
    try {
      const researchTopic = await getResearchTopic();
      return Promise.resolve(researchTopic);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };

export const getResearchTopicsByInitialStatusService = async () => {
    try {
        const researchTopic = await getResearchTopicsByInitialStatusRepo();
        return Promise.resolve(researchTopic);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};
  
export const updateResearchTopicService = async (id, data) => {
    try {
      const researchTopic = await updateResearchTopic(id, data);
      return Promise.resolve(researchTopic);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const deleteResearchTopicService = async (id) => {
    try {
      const researchTopic = await deleteResearchTopic(id);
      return Promise.resolve(researchTopic);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };