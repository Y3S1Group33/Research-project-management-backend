import mongoose from "mongoose";

const { Schema } = mongoose;

const ChatData = new Schema(
    {
        researchTeamId: String,
        chatThread : [{user : String , message : String}]
    },
    {versionKey: false},
);

export const ChatDatas = mongoose.model("ChatDatas", ChatData);