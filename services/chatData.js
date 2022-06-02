import {
    saveChatDataRepo,
    getChatDataByChatIdRepo,
    getChatDataRepo,
    updateChatDataRepo
} from "../repository/chatDataRepo.js";

export const saveChatDataService = async (data) => {
    const { researchTeamId, userName, message, date } = data;
    try {
        await saveChatDataRepo({ researchTeamId, userName, message, date });
        return Promise.resolve("Successfully saved chat.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getChatDataByChatIdService = async (id) => {
    try {
        const chatData = await getChatDataByChatIdRepo(id);
        return Promise.resolve(chatData);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getChatDataService = async () => {
    try {
        const chatData = await getChatDataRepo();
        return Promise.resolve(chatData);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateChatDataService = async (id, data) => {
    try {
        const chatData = await updateChatDataRepo(id, data);
        return Promise.resolve(chatData);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

