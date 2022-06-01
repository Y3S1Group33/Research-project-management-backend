import mongoose from "mongoose";

const { Schema } = mongoose;

const TopicRequest = new Schema(
    {
        studentGroupId: String,
        topic: String,
        researchPanelId: String,
        supervisor: String,
        coSupervisor: String,
        feedback: String,
        status: String,
    },
    {versionKey: false},
);

export const TopicRequests = mongoose.model("TopicRequests", TopicRequest);