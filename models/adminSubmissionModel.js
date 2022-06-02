import mongoose from "mongoose";

const { Schema } = mongoose;

const adminSubmissionModel = new Schema(
    {
        title:String,
        startDate:String,
        endDate:String,
    }

);

export const AdminSubmission = mongoose.model("adminSubmissions",adminSubmissionModel );



