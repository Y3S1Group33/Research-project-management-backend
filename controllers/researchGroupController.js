import {
    saveResearchGroupService,
    getResearchGroupByIdService,
    getResearchGroupService,
    updateResearchGroupService,
    deleteResearchGroupService,
    getResearchGroupBySupervisorIDService,
    getResearchGroupByStudentGroupIDService
} from "../services/researchGroupService.js";

export const saveResearchGroup = async (req, res) => {
    try {
        const researchGroup = await saveResearchGroupService(req.body);
        res.send("Successfully created Research Group..");
    } catch (err) {
        res.send(err.message);
    }
};

export const getResearchGroupById = async (req, res) => {
    try {
        const researchGroup = await getResearchGroupByIdService(req.params.id);
        res.json(researchGroup);
    } catch (err) {
        res.json(err.message);
    }
};

export const getResearchGroupBySupervisorID = async (req, res) => {
    try {
        const researchGroup = await getResearchGroupBySupervisorIDService(req.params.id);
        res.json(researchGroup);
    } catch (err) {
        res.json(err.message);
    }
};

export const getResearchGroupByStudentGroupID = async (req, res) => {
    try {
        const researchGroup = await getResearchGroupByStudentGroupIDService(req.params.id);
        res.json(researchGroup);
    } catch (err) {
        res.json(err.message);
    }
};

export const getResearchGroup = async (req, res) => {
    try {
        const researchGroup = await getResearchGroupService();
        res.json(researchGroup);
    } catch (err) {
        res.json(err.message);
    }
};

export const updateResearchGroup = async (req, res) => {
    try {
        const researchGroup = await updateResearchGroupService(req.params.id, req.body);
        res.json("Successfully updated research topic..");
    } catch (err) {
        res.json(err.message);
    }
};

export const deleteResearchGroup = async (req, res) => {
    try {
        const researchGroup = await deleteResearchGroupService(req.params.id);
        res.json("Successfully deleted research topic..");
    } catch (err) {
        res.json(err.message);
    }
};