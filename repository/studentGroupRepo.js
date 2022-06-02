import { StudentGroups } from "../models/studentGroupModel.js";

export const saveStudentGroup = (data) =>
StudentGroups.create(data)
    .then((StudentGroups) => {
        return Promise.resolve(StudentGroups);
    })
    .catch(() => {
        throw new Error("Internal Server Error.", 500);
    });

export const getStudentGroupById = (id) =>
StudentGroups.findById(id)
    .then((StudentGroups) => {
        if (!StudentGroups) {
            throw new Error("Student Group Not Found.", 404);
        }
        return Promise.resolve(StudentGroups);
    });

export const getStudentGroup = () => 
StudentGroups.find()
    .then((StudentGroups) => {
        return Promise.resolve(StudentGroups);
    })
    .catch(() => {
        throw new Error("Internal Server Error.", 500);
    });

export const updateStudentGroup = (id, data) =>
StudentGroups.findByIdAndUpdate(id, data, {new: true})
    .then((StudentGroups) => {
        if(!StudentGroups) {
            throw new Error("Student Group Not Found.", 404);
        }
        return Promise.resolve(StudentGroups);
    })
    .catch(() => {
        throw new Error("Internal server Error.", 500);
    });

export const deleteStudentGroup = (id) => 
StudentGroups.findByIdAndDelete(id)
    .then((StudentGroups) => {
        if(StudentGroups) {
            throw new Error("Student Group Not Found.", 404);
        }
        return Promise.resolve(StudentGroups);
    })
    .catch(() => {
        throw new Error("Internal Server Error", 500);
    });