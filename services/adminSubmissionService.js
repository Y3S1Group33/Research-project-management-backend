import {
    createAdminSubmission,
    getAdminSubmissions,
    getAdminSubmissionById,
    updateAdminSubmission,
    deleteAdminSubmission,
    getLatestAdminSubmissions
} from "../repository/adminSubmissionRepo.js";
import {getLatestStudentSubmissions} from "../repository/createSubmissionRepo.js";


export const CreateAdminSubmissionService = async (data) => {
    const { title, startDate, endDate } = data;
    try {
        await createAdminSubmission({ title, startDate,endDate});
        return Promise.resolve("Successfully saved adminSubmission.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getAdminSubmissionByIdService = async (id) => {
    try {
        const adminSubmission = await getAdminSubmissionById(id);
        return Promise.resolve(adminSubmission);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getAdminSubmissionService = async () => {
    try {
        const adminSubmission = await getAdminSubmissions();
        return Promise.resolve(adminSubmission);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateAdminSubmissionService = async (id, data) => {
    try {
        const staffUser = await updateAdminSubmission(id, data);
        return Promise.resolve(staffUser);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const deleteAdminSubmissionService = async (id) => {
    try {
        const adminSubmission = await deleteAdminSubmission(id);
        return Promise.resolve(adminSubmission);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getLatestAdminSubmissionService = async () => {
    try {
        const makeSubmission = await getLatestAdminSubmissions();
        return Promise.resolve(makeSubmission);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};