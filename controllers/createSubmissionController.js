import {
    makeSubmissionService,
    getLatestStudentSubmissionService,
    getLatestStudentSubmissionByIdService,
    getStudentSubmissionService,
    updateLatestStudentSubmissionService

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

export const getStudentSubmissionController = async (req, res) => {
    try {
        const staffUser = await getStudentSubmissionService();
        res.json(staffUser);
    } catch (err) {
        res.json(err.message);
    }
};

export const getLatestStudentSubmissionControllerById = async (req, res) => {
    try {
      const markingSchema = await getLatestStudentSubmissionByIdService(req.params.id);
      res.json(markingSchema);
    } catch (err) {
      res.json(err.message);
    }
  };

export const updateLatestStudentSubmissionController = async (req, res) => {
    try {
      const markingSchema = await updateLatestStudentSubmissionService(req.params.id, req.body);
      res.json("Successfully updated submission");
    } catch (err) {
      res.json(err.message);
    }
  };
