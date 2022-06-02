import mongoose from "mongoose";

const { Schema } = mongoose;

const StudentGroup = new Schema(
    {
        groupName: String,
        std1: String,
        std2: String,
        std3: String,
    },
    {versionKey: false},
);

export const StudentGroups = mongoose.model("StudentGroups", StudentGroup);

