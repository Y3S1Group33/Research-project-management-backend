import mongoose from "mongoose";

const { Schema } = mongoose;
const ReferenceSchema = new Schema(
  {
    type: String,
    title: String,
    description: String,
    panelId: String,
  }
);

export const ReferenceSchemas = mongoose.model("ReferenceSchemas", ReferenceSchema);