import {StudentSubmission} from "../models/createSubmissionModel.js";
import {AdminSubmission} from "../models/adminSubmissionModel.js";

export const makeSubmission = (data) =>
    StudentSubmission.create(data)
        .then((AdminSubmission) => {
            return Promise.resolve(AdminSubmission);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getLatestStudentSubmissions = () =>
    StudentSubmission.find().limit(1).sort({$natural:-1})
        .then((makeSubmission) => {
            return Promise.resolve(makeSubmission);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });



