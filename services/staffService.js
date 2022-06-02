import {
    createStaffUser,
    getStaffUser,
    getStaffUserById,
    updateStaffUser,
    deleteStaffUser,
} from "../repository/staffRepo.js";


export const createStaffUserService = async (data) => {
    const { staffId, userName, email,contactNumber,password,role,specializedArea } = data;
    try {
        await createStaffUser({ staffId, userName,email,contactNumber,password,role,specializedArea });
        return Promise.resolve("Successfully saved StaffUser.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getStaffUserByIdService = async (id) => {
    try {
        const staffUser = await getStaffUserById(id);
        return Promise.resolve(staffUser);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getStaffUserService = async () => {
    try {
        const staffUser = await getStaffUser();
        return Promise.resolve(staffUser);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateStaffUserService = async (id, data) => {
    try {
        const staffUser = await updateStaffUser(id, data);
        return Promise.resolve(staffUser);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const deleteStaffUserService = async (id) => {
    try {
        const staffUser = await deleteStaffUser(id);
        return Promise.resolve(staffUser);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};