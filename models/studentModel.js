import mongoose from "mongoose";

const { Schema } = mongoose;

const students = new Schema(
    {
        studentId:String,
        email:String,
        userName:String,
        contactNumber:String,
        password:String
    }

);

export const Student = mongoose.model("StudentUsers",students );