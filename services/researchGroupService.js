import {
    saveResearchGroupRepo,
    getResearchGroupByIdRepo,
    getResearchGroupRepo,
    updateResearchGroupRepo,
    deleteResearchGroupRepo
} from "../repository/researchGroupRepo.js"

export const saveResearchGroupService = async (data) => {
    const { studentGroupId, topicID, researchPanelId, supervisor, coSupervisor, chatID, status } = data;
    try {
        await saveResearchGroupRepo({ studentGroupId, topicID, researchPanelId, supervisor, coSupervisor, chatID, status });
        return Promise.resolve("Successfully Create Research Group.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getResearchGroupByIdService = async (id) => {
    try {
        const researchGroup = await getResearchGroupByIdRepo(id);
        return Promise.resolve(researchGroup);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getResearchGroupService = async () => {
    try {
        const researchGroup = await getResearchGroupRepo();
        return Promise.resolve(researchGroup);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateResearchGroupService = async (id, data) => {
    try {
        const researchGroup = await updateResearchGroupRepo(id, data);
        return Promise.resolve(researchGroup);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const deleteResearchGroupService = async (id) => {
    try {
        const researchGroup = await deleteResearchGroupRepo(id);
        return Promise.resolve(researchGroup);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};
