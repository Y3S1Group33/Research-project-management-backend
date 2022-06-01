import {
    creteStudentService,
    getStudentsService,
    getStudentByIdService,
    updateStudentService,
    deleteStudentService,
} from "../services/studentService.js";

export const createController = async (req, res) => {
    try {
        const student = await creteStudentService(req.body);
        res.json(student);
    } catch (err) {
        res.send(err.message);
    }
};

export const getStudentByIdController = async (req, res) => {
    try {
        const student = await getStudentByIdService(req.params.studentId);
        res.json(student);
    } catch (err) {
        res.json(err.message);
    }
};

export const getStudentsController = async (req, res) => {
    try {
        const student = await getStudentsService();
        res.json(student);
    } catch (err) {
        res.json(err.message);
    }
};

export const updateStudentController = async (req, res) => {
    try {
        const student = await updateStudentService(req.params.studentId, req.body);
        res.json(student);
    } catch (err) {
        res.json(err.message);
    }
};

export const deleteStudentController = async (req, res) => {
    try {
         await deleteStudentService(req.params.studentId);
        res.json("Successfully deleted student");
    } catch (err) {
        res.json(err.message);
    }
};