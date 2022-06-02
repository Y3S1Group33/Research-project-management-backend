import mongoose from "mongoose";

const { Schema } = mongoose;

const ResearchGroup = new Schema(
    {
        studentGroupId: String,
        topicID: String,
        researchPanelId: String,
        supervisor: String,
        coSupervisor: String,
        chatID: String,
        status: String,
    },
    {versionKey: false},
);

export const ResearchGroups = mongoose.model("ResearchGroups", ResearchGroup);