import {
    saveStudentGroupService,
    getStudentGroupByIdService,
    getStudentGroupService,
    updateStudentGroupService,
    deleteStudentGroupService
} from "../services/studentGroupService.js";

export const saveStudentGroup = async (req, res) => {
    try {
      const studentGroup = await saveStudentGroupService(req.body);
      res.send("Successfully created Student Group..");
    } catch (err) {
      res.send(err.message);
    }
  };
  
export const getStudentGroupById = async (req, res) => {
    try {
      const studentGroup = await getStudentGroupByIdService(req.params.id);
      res.json(studentGroup);
    } catch (err) {
      res.json(err.message);
    }
  };
  
export const getStudentGroup = async (req, res) => {
    try {
      const studentGroup = await getStudentGroupService();
      res.json(studentGroup);
    } catch (err) {
      res.json(err.message);
    }
  };
  
export const updateStudentGroup = async (req, res) => {
    try {
      const studentGroup = await updateStudentGroupService(req.params.id, req.body);
      res.json("Successfully updated student group..");
    } catch (err) {
      res.json(err.message);
    }
  };
  
export const deleteStudentGroup = async (req, res) => {
    try {
      const markingSchema = await deleteStudentGroupService(req.params.id);
      res.json("Successfully deleted student group..");
    } catch (err) {
      res.json(err.message);
    }
  };