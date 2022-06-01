import {
    saveMarkingSchema,
    getMarkingSchemaById,
    getMarkingSchema,
    updateMarkingSchema,
    deleteMarkingSchema,
  } from "../repository/markingSchema.js";
  
  export const saveMarkingSchemaService = async (data) => {
    const { type, title, description } = data;
    try {
      await saveMarkingSchema({ type, title, description });
      return Promise.resolve("Successfully saved Submission.");
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const getMarkingSchemaByIdService = async (id) => {
    try {
      const markingSchema = await getMarkingSchemaById(id);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const getMarkingSchemaService = async () => {
    try {
      const markingSchema = await getMarkingSchema();
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const updateMarkingSchemaService = async (id, data) => {
    try {
      const markingSchema = await updateMarkingSchema(id, data);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const deleteMarkingSchemaService = async (id) => {
    try {
      const markingSchema = await deleteMarkingSchema(id);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };