import {
    saveResearchGroup,
    getResearchGroupById,
    getResearchGroup,
    updateResearchGroup,
    deleteResearchGroup
} from "../repository/researchGroupRepo.js"

export const saveResearchGroupService = async (data) => {
    const { studentGroupId, topicID, researchPanelId, supervisor, coSupervisor, chatID, status } = data;
    try {
        await saveResearchGroup({ studentGroupId, topicID, researchPanelId, supervisor, coSupervisor, chatID, status });
        return Promise.resolve("Successfully Create Research Group.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getResearchGroupByIdService = async (id) => {
    try {
        const researchGroup = await getResearchGroupById(id);
        return Promise.resolve(researchGroup);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getResearchGroupService = async () => {
    try {
        const researchGroup = await getResearchGroup();
        return Promise.resolve(researchGroup);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateResearchGroupService = async (id, data) => {
    try {
        const researchGroup = await updateResearchGroup(id, data);
        return Promise.resolve(researchGroup);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const deleteResearchGroupService = async (id) => {
    try {
        const researchGroup = await deleteResearchGroup(id);
        return Promise.resolve(researchGroup);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};
