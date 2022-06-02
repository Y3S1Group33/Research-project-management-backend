import { ReferenceSchemas } from "../models/references.js";

export const saveReferenceSchema = (data) =>
ReferenceSchemas.create(data)
    .then((ReferenceSchemas) => {
      return Promise.resolve(ReferenceSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const getReferenceSchemaById = (id) =>
ReferenceSchemas.findById(id)
    .then((ReferenceSchemas) => {
      if (!ReferenceSchemas) {
        throw new Error("ReferenceSchemas not found.", 404);
      }
      return Promise.resolve(ReferenceSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const getReferenceSchema = () =>
ReferenceSchemas.find()
    .then((ReferenceSchemas) => {
      return Promise.resolve(ReferenceSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const updateReferenceSchema = (id, data) =>
ReferenceSchemas.findByIdAndUpdate(id, data, { new: true })
    .then((ReferenceSchemas) => {
      if (!ReferenceSchemas) {
        throw new Error("ReferenceSchemas not found.", 404);
      }
      return Promise.resolve(ReferenceSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const deleteReferenceSchema = (id) =>
ReferenceSchemas.findByIdAndDelete(id)
    .then((ReferenceSchemas) => {
      if (!ReferenceSchemas) {
        throw new Error("ReferenceSchemas not found.", 404);
      }
      return Promise.resolve(ReferenceSchemas);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });