import { AdminSubmission } from "../models/adminSubmissionModel.js";
import {StudentSubmission} from "../models/createSubmissionModel.js";

export const createAdminSubmission = (data) =>
    AdminSubmission.create(data)
        .then((AdminSubmission) => {
            return Promise.resolve(AdminSubmission);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getAdminSubmissionById = (id) =>
    AdminSubmission.findById(id)
        .then((adminSubmission) => {
            if (!adminSubmission) {
                throw new Error("adminSubmission not found.", 404);
            }
            return Promise.resolve(adminSubmission);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getAdminSubmissions = () =>
    AdminSubmission.find()
        .then((adminSubmission) => {
            return Promise.resolve(adminSubmission);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updateAdminSubmission = (id, data) =>
    AdminSubmission.findByIdAndUpdate(id, data, { new: true })
        .then((adminSubmission) => {
            if (!adminSubmission) {
                throw new Error("adminSubmission not found.", 404);
            }
            return Promise.resolve(adminSubmission);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const deleteAdminSubmission = (id) =>
    AdminSubmission.findByIdAndDelete(id)
        .then((adminSubmission) => {
            if (!adminSubmission) {
                throw new Error("adminSubmission not found.", 404);
            }
            return Promise.resolve(adminSubmission);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getLatestAdminSubmissions = () =>
    AdminSubmission.find().limit(1).sort({$natural:-1})
        .then((createSubmission) => {
            return Promise.resolve(createSubmission);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });