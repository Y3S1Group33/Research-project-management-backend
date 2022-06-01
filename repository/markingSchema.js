import { MarkingSchemas } from "../models/markingSchema.js";

export const saveMarkingSchema = (data) =>
MarkingSchemas.create(data)
    .then((MarkingSchemas) => {
      return Promise.resolve(MarkingSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const getMarkingSchemaById = (id) =>
MarkingSchemas.findById(id)
    .then((MarkingSchemas) => {
      if (!MarkingSchemas) {
        throw new Error("MarkingSchemas not found.", 404);
      }
      return Promise.resolve(MarkingSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const getMarkingSchema = () =>
MarkingSchemas.find()
    .then((MarkingSchemas) => {
      return Promise.resolve(MarkingSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const updateMarkingSchema = (id, data) =>
MarkingSchemas.findByIdAndUpdate(id, data, { new: true })
    .then((MarkingSchemas) => {
      if (!MarkingSchemas) {
        throw new Error("MarkingSchemas not found.", 404);
      }
      return Promise.resolve(MarkingSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const deleteMarkingSchema = (id) =>
MarkingSchemas.findByIdAndDelete(id)
    .then((MarkingSchemas) => {
      if (!MarkingSchemas) {
        throw new Error("MarkingSchemas not found.", 404);
      }
      return Promise.resolve(MarkingSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });