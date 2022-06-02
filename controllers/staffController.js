import {
    createStaffUserService,
    getStaffUserService,
    getStaffUserByIdService,
    updateStaffUserService,
    deleteStaffUserService,
} from "../services/staffService.js";

export const createStaffController = async (req, res) => {
    try {
        const staffUser = await createStaffUserService(req.body);
        res.send(staffUser);
    } catch (err) {
        res.send(err.message);
    }
};

export const getStaffByIdController = async (req, res) => {
    try {
        const markingSchema = await getStaffUserByIdService(req.params.id);
        res.json(markingSchema);
    } catch (err) {
        res.json(err.message);
    }
};

export const getStaffUsersController = async (req, res) => {
    try {
        const staffUser = await getStaffUserService();
        res.json(staffUser);
    } catch (err) {
        res.json(err.message);
    }
};

export const updateStaffUserController = async (req, res) => {
    try {
        const staffUser = await updateStaffUserService(req.params.id, req.body);
        res.json(staffUser);
    } catch (err) {
        res.json(err.message);
    }
};

export const deleteStaffUserController = async (req, res) => {
    try {
       await deleteStaffUserService(req.params.id);
        res.json("Successfully deleted staff User with id:"+req.params.id);
    } catch (err) {
        res.json(err.message);
    }
};