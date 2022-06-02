import {
    saveChatDataService,
    getChatDataByChatIdService,
    getChatDataService,
    updateChatDataService
} from "../services/chatData.js";

export const saveChatData = async (req, res) => {
    try {
        const ChatData = await saveChatDataService(req.body);
        res.send("Successfully created PanelChat");
    } catch (err) {
        res.send(err.message);
    }
};

export const getChatDataByChatId = async (req, res) => {
    try {
        const ChatData = await getChatDataByChatIdService(req.params.id);
        res.json(ChatData);
    } catch (err) {
        res.json(err.message);
    }
};

export const getChatData = async (req, res) => {
    try {
        const ChatData = await getChatDataService();
        res.json(ChatData);
    } catch (err) {
        res.json(err.message);
    }
};

export const updateChatData = async (req, res) => {
    try {
        const ChatData = await updateChatDataService(req.params.id, req.body);
        res.json("Successfully updated PanelChat");
    } catch (err) {
        res.json(err.message);
    }
};

