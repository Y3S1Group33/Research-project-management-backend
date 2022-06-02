import {
    makeSubmission,
    getLatestStudentSubmissions,
    updateLatestStudentSubmissions,
    getLatestStudentSubmissionsById

} from "../repository/createSubmissionRepo.js";



export const makeSubmissionService = async (data) => {
    const { title, submittedDate, submittedStudent,imageUrl, evaluation } = data;
    try {
        await makeSubmission({ title, submittedDate,submittedStudent,imageUrl, evaluation});
        return Promise.resolve("Successfully saved CreateSubmission.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};


export const getLatestStudentSubmissionService = async () => {
    try {
        const makeSubmission = await getLatestStudentSubmissions();
        return Promise.resolve(makeSubmission);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getLatestStudentSubmissionByIdService = async (id) => {
    try {
      const markingSchema = await getLatestStudentSubmissionsById(id);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };

export const updateLatestStudentSubmissionService = async (id, data) => {
    try {
      const markingSchema = await updateLatestStudentSubmissions(id, data);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };

