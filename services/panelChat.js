import {
  savePanelChatSchema,
    getPanelChatSchemaById,
    getPanelChatSchema,
    updatePanelChatSchema,
    deletePanelChatSchema,
  } from "../repository/panelChat.js";
  
  export const savePanelChatSchemaService = async (data) => {
    const { userId, message, date } = data;
    try {
      await savePanelChatSchema({ userId, message, date });
      return Promise.resolve("Successfully saved Submission.");
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const getPanelChatSchemaByIdService = async (id) => {
    try {
      const markingSchema = await getPanelChatSchemaById(id);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const getPanelChatSchemaService = async () => {
    try {
      const markingSchema = await getPanelChatSchema();
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const updatePanelChatSchemaService = async (id, data) => {
    try {
      const markingSchema = await updatePanelChatSchema(id, data);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const deletePanelChatSchemaService = async (id) => {
    try {
      const markingSchema = await deletePanelChatSchema(id);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };