import {
    saveReferenceSchema,
    getReferenceSchemaById,
    getReferenceSchema,
    updateReferenceSchema,
    deleteReferenceSchema,
  } from "../repository/reference.js";
  
  export const saveReferenceSchemaService = async (data) => {
    const { type, title, description, panelId } = data;
    try {
      await saveReferenceSchema({ type, title, description, panelId });
      return Promise.resolve("Successfully saved Submission.");
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const getReferenceSchemaByIdService = async (id) => {
    try {
      const markingSchema = await getReferenceSchemaById(id);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const getReferenceSchemaService = async () => {
    try {
      const markingSchema = await getReferenceSchema();
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const updateReferenceSchemaService = async (id, data) => {
    try {
      const markingSchema = await updateReferenceSchema(id, data);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const deleteReferenceSchemaService = async (id) => {
    try {
      const markingSchema = await deleteReferenceSchema(id);
      return Promise.resolve(markingSchema);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };