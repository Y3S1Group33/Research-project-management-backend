import { ChatDatas } from "../models/chatData.js";

export const saveChatDataRepo = (data) =>
    ChatDatas.create(data)
        .then((ChatData) => {
            return Promise.resolve(ChatData);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getChatDataByChatIdRepo = (id) =>
    ChatDatas.findById(id)
        .then((ChatData) => {
            if (!ChatData) {
                throw new Error("PanelChatSchemas not found.", 404);
            }
            return Promise.resolve(ChatData);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getChatDataRepo = () =>
    ChatDatas.find()
        .then((ChatData) => {
            return Promise.resolve(ChatData);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updateChatDataRepo = (id, data) =>
    ChatDatas.findByIdAndUpdate(id, data, { new: true })
        .then((ChatData) => {
            if (!ChatData) {
                throw new Error("PanelChatSchemas not found.", 404);
            }
            return Promise.resolve(ChatData);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

