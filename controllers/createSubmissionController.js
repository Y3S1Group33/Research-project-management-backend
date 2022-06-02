import {
    makeSubmissionService,
    getLatestStudentSubmissionService,

} from "../services/createSubmissionService.js";



export const createSubmissionController = async (req, res) => {
    try {
        const staffUser = await makeSubmissionService(req.body);
        res.send(staffUser);
    } catch (err) {
        res.send(err.message);
    }
};

export const getLatestStudentSubmissionController = async (req, res) => {
    try {
        const staffUser = await getLatestStudentSubmissionService();
        res.json(staffUser);
    } catch (err) {
        res.json(err.message);
    }
};
