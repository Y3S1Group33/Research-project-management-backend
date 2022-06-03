import { Student } from "../models/studentModel.js";

export const createStudent = (data) =>
    Student.create(data)
        .then((Student) => {
            return Promise.resolve(Student);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getStudentById = (id) =>
    Student.find({email:id})
        .then((Student) => {
            if (!Student) {
                throw new Error("Students not found.", 404);
            }
            return Promise.resolve(Student);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getStudents = () =>
    Student.find()
        .then((Student) => {
            return Promise.resolve(Student);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updateStudent = (id, data) =>
    Student.findByIdAndUpdate(id, data, { new: true })
        .then((Student) => {
            if (!Student) {
                throw new Error("Students not found.", 404);
            }
            return Promise.resolve(Student);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const deleteStudent = (id) =>
    Student.findByIdAndDelete(id)
        .then((Student) => {
            if (!Student) {
                throw new Error("MarkingSchemas not found.", 404);
            }
            return Promise.resolve(Student);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });