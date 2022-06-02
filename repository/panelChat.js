import { PanelChatSchemas } from "../models/panelChat.js";

export const savePanelChatSchema = (data) =>
PanelChatSchemas.create(data)
    .then((PanelChatSchemas) => {
      return Promise.resolve(PanelChatSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const getPanelChatSchemaById = (id) =>
PanelChatSchemas.findById(id)
    .then((PanelChatSchemas) => {
      if (!PanelChatSchemas) {
        throw new Error("PanelChatSchemas not found.", 404);
      }
      return Promise.resolve(PanelChatSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const getPanelChatSchema = () =>
PanelChatSchemas.find()
    .then((PanelChatSchemas) => {
      return Promise.resolve(PanelChatSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const updatePanelChatSchema = (id, data) =>
PanelChatSchemas.findByIdAndUpdate(id, data, { new: true })
    .then((PanelChatSchemas) => {
      if (!PanelChatSchemas) {
        throw new Error("PanelChatSchemas not found.", 404);
      }
      return Promise.resolve(PanelChatSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const deletePanelChatSchema = (id) =>
PanelChatSchemas.findByIdAndDelete(id)
    .then((PanelChatSchemas) => {
      if (!PanelChatSchemas) {
        throw new Error("PanelChatSchemas not found.", 404);
      }
      return Promise.resolve(PanelChatSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });