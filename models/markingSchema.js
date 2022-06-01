import mongoose from "mongoose";

const { Schema } = mongoose;

const MarkingSchema = new Schema(
  {
    type: String,
    title: String,
    description: String,
  },
  { versionKey: false },
);

export const MarkingSchemas = mongoose.model("MarkingSchemas", MarkingSchema);