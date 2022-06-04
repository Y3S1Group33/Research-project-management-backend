import mongoose from "mongoose";

const { Schema } = mongoose;
const markingSchemaModel = new Schema(
    {
        title:String,
        submittedDate:String,
        imageUrl: {
            type: String,
            required: true,
        }
    }
);

export const markingSchemaSubmission = mongoose.model("markingSchemaSubmission",markingSchemaModel );