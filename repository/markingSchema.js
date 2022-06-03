import { markingSchemaSubmission } from "../models/markingShema.js";

export const saveMarkingSchemas = (data) =>
markingSchemaSubmission.create(data)
    .then((markingSchemaSubmission) => {
      return Promise.resolve(markingSchemaSubmission);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const getmarkingSchemaSubmissionById = (id) =>
markingSchemaSubmission.findById(id)
    .then((markingSchemaSubmission) => {
      if (!markingSchemaSubmission) {
        throw new Error("markingSchemaSubmission not found.", 404);
      }
      return Promise.resolve(markingSchemaSubmission);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const getmarkingSchemaSubmission = () =>
markingSchemaSubmission.find()
    .then((markingSchemaSubmission) => {
      return Promise.resolve(markingSchemaSubmission);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const updatemarkingSchemaSubmission = (id, data) =>
markingSchemaSubmission.findByIdAndUpdate(id, data, { new: true })
    .then((markingSchemaSubmission) => {
      if (!markingSchemaSubmission) {
        throw new Error("markingSchemaSubmission not found.", 404);
      }
      return Promise.resolve(markingSchemaSubmission);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const deletemarkingSchemaSubmission = (id) =>
markingSchemaSubmission.findByIdAndDelete(id)
    .then((markingSchemaSubmission) => {
      if (!markingSchemaSubmission) {
        throw new Error("markingSchemaSubmission not found.", 404);
      }
      return Promise.resolve(markingSchemaSubmission);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });