import { Staff } from "../models/staffModel.js";

export const createStaffUser = (data) =>
    Staff.create(data)
        .then((staff) => {
            return Promise.resolve(staff);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getStaffUserById = (id) =>
    Staff.findById(id)
        .then((staff) => {
            if (!staff) {
                throw new Error("staff not found.", 404);
            }
            return Promise.resolve(MarkingSchemas);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getStaffUser = () =>
    Staff.find()
        .then((staff) => {
            return Promise.resolve(staff);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updateStaffUser = (id, data) =>
    Staff.findByIdAndUpdate(id, data, { new: true })
        .then((staff) => {
            if (!staff) {
                throw new Error("staff not found.", 404);
            }
            return Promise.resolve(staff);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const deleteStaffUser = (id) =>
    Staff.findByIdAndDelete(id)
        .then((staff) => {
            if (!staff) {
                throw new Error("MarkingSchemas not found.", 404);
            }
            return Promise.resolve(staff);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });