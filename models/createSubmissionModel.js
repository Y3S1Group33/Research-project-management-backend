import mongoose from "mongoose";

const { Schema } = mongoose;

const createSubmissionModel = new Schema(
    {
        title:String,
        submittedDate:String,
        submittedStudent:String,
        imageUrl: {
            type: String,
            required: true,
        },
        evaluation : String
    }

);

export const StudentSubmission = mongoose.model("studentSubmissions",createSubmissionModel );