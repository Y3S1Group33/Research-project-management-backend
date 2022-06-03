import mongoose from "mongoose";

const { Schema } = mongoose;

const StudentGroup = new Schema(
    {
        groupId: String,
        groupName: String,
        std1: String,
        std2: String,
        std3: String,
        std4: String,
    },
    {versionKey: false},
);

export const StudentGroups = mongoose.model("StudentGroups", StudentGroup);

