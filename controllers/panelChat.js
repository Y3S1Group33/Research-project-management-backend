import {
    savePanelChatSchemaService,
    getPanelChatSchemaByIdService,
    getPanelChatSchemaService,
    updatePanelChatSchemaService,
    deletePanelChatSchemaService,
    } from "../services/panelChat.js";
    
    export const savePanelChatSchema = async (req, res) => {
      try {
        const PanelChat = await savePanelChatSchemaService(req.body);
        res.send("Successfully created PanelChat");
      } catch (err) {
        res.send(err.message);
      }
    };
    
    export const getPanelChatSchemaById = async (req, res) => {
      try {
        const PanelChat = await getPanelChatSchemaByIdService(req.params.id);
        res.json(PanelChat);
      } catch (err) {
        res.json(err.message);
      }
    };
    
    export const getPanelChatSchema = async (req, res) => {
      try {
        const PanelChat = await getPanelChatSchemaService();
        res.json(PanelChat);
      } catch (err) {
        res.json(err.message);
      }
    };
    
    export const updatePanelChatSchema = async (req, res) => {
      try {
        const PanelChat = await updatePanelChatSchemaService(req.params.id, req.body);
        res.json("Successfully updated PanelChat");
      } catch (err) {
        res.json(err.message);
      }
    };
    
    export const deletePanelChatSchema = async (req, res) => {
      try {
        const PanelChat = await deletePanelChatSchemaService(req.params.id);
        res.json("Successfully deleted PanelChat");
      } catch (err) {
        res.json(err.message);
      }
    };