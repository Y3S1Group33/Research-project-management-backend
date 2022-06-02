import mongoose from "mongoose";

const { Schema } = mongoose;

const ChatData = new Schema(
    {
        researchTeamId: String,
        userName : String,
        message : String,
        date : String,
    },
    {versionKey: false},
);

export const ChatDatas = mongoose.model("ChatDatas", ChatData);