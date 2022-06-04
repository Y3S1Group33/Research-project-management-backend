import express from "express";
import {
    savePanelChatSchema,
    getPanelChatSchemaById,
    getPanelChatSchema,
    updatePanelChatSchema,
    deletePanelChatSchema,
} from "../controllers/panelChat.js";

const panelChatRouter = express.Router();

panelChatRouter.post("/panelChat", savePanelChatSchema);
panelChatRouter.get("/panelChat/:id", getPanelChatSchemaById);
panelChatRouter.get("/panelChat", getPanelChatSchema);
panelChatRouter.put("/panelChat/:id", updatePanelChatSchema);
panelChatRouter.delete("/panelChat/:id", deletePanelChatSchema);

export default panelChatRouter;