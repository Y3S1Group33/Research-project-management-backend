import mongoose from "mongoose";

const { Schema } = mongoose;

const staff = new Schema(
    {
        staffId:String,
        userName:String,
        email:String,
        contactNumber:String,
        password:String,
        role:String,
        specializedArea:String,
    }
);

export const Staff = mongoose.model("staffUsers", staff);