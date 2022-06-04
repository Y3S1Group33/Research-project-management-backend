import {
    CreateAdminSubmissionService,
    getAdminSubmissionService,
    getAdminSubmissionByIdService,
    updateAdminSubmissionService,
    deleteAdminSubmissionService,
    getLatestAdminSubmissionService
} from "../services/adminSubmissionService.js";

export const createAdminSubmissionController = async (req, res) => {
    try {
        const staffUser = await CreateAdminSubmissionService(req.body);
        res.send(staffUser);
    } catch (err) {
        res.send(err.message);
    }
};

export const getAdminSubmissionByIdController = async (req, res) => {
    try {
        const markingSchema = await getAdminSubmissionByIdService(req.params.id);
        res.json(markingSchema);
    } catch (err) {
        res.json(err.message);
    }
};

export const getAdminSubmissionController = async (req, res) => {
    try {
        const staffUser = await getAdminSubmissionService();
        res.json(staffUser);
    } catch (err) {
        res.json(err.message);
    }
};

export const updateAdminSubmissionController = async (req, res) => {
    try {
        const staffUser = await updateAdminSubmissionService(req.params.id, req.body);
        res.json(staffUser);
    } catch (err) {
        res.json(err.message);
    }
};

export const deleteAdminSubmissionController = async (req, res) => {
    try {
        await deleteAdminSubmissionService(req.params.id);
        res.json("Successfully deleted Admin Submission User with id:"+req.params.id);
    } catch (err) {
        res.json(err.message);
    }
};

export const getLatestAdminSubmissionController = async (req, res) => {
    try {
        const staffUser = await getLatestAdminSubmissionService();
        res.json(staffUser);
    } catch (err) {
        res.json(err.message);
    }
};
