import mongoose from "mongoose";

const { Schema } = mongoose;

const PanelChatSchema = new Schema(
  {
    userId: String,
    message: String,
    date: String,
  }
);

export const PanelChatSchemas = mongoose.model("PanelChatSchemas", PanelChatSchema);