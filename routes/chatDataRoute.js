import express from "express";
import {
    saveChatData,
    getChatDataByChatId,
    getChatData,
    updateChatData
} from "../controllers/chatData.js";

const chatDataRouter = express.Router();

chatDataRouter.post("/chatData", saveChatData);
chatDataRouter.get("/chatData/:id", getChatDataByChatId);
chatDataRouter.get("/chatData", getChatData);
chatDataRouter.put("/chatData/:id", updateChatData);


export default chatDataRouter;