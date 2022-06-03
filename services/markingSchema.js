import {
    saveMarkingSchemas,
    getmarkingSchemaSubmissionById,
    getmarkingSchemaSubmission,
    updatemarkingSchemaSubmission,
    deletemarkingSchemaSubmission,
  } from "../repository/markingSchema.js";
  
  export const saveMarkingSchemasService = async (data) => {
    const { title, submittedDate, imageUrl } = data;
    try {
      await saveMarkingSchemas({ title, submittedDate, imageUrl });
      return Promise.resolve("Successfully saved Marking Schema.");
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const getMarkingSchemasByIdService = async (id) => {
    try {
      const markingSchema = await getmarkingSchemaSubmissionById(id);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const getMarkingSchemasService = async () => {
    try {
      const markingSchema = await getmarkingSchemaSubmission();
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const updateMarkingSchemasService = async (id, data) => {
    try {
      const markingSchema = await updatemarkingSchemaSubmission(id, data);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const deleteMarkingSchemasService = async (id) => {
    try {
      const markingSchema = await deletemarkingSchemaSubmission(id);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };