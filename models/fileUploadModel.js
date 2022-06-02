import mongoose from "mongoose";

const { Schema } = mongoose;
const imageSchema =new Schema({
    imageUrl: {
        type: String,
        required: true,
    },
});

export const file = mongoose.model("imageSchemas", imageSchema);

