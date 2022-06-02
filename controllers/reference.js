import {
  saveReferenceSchemaService,
  getReferenceSchemaByIdService,
  getReferenceSchemaService,
  updateReferenceSchemaService,
  deleteReferenceSchemaService,
  } from "../services/reference.js";
  
  export const saveReferenceSchema = async (req, res) => {
    try {
      const markingSchema = await saveReferenceSchemaService(req.body);
      res.send("Successfully created markingSchema");
    } catch (err) {
      res.send(err.message);
    }
  };
  
  export const getReferenceSchemaById = async (req, res) => {
    try {
      const markingSchema = await getReferenceSchemaByIdService(req.params.id);
      res.json(markingSchema);
    } catch (err) {
      res.json(err.message);
    }
  };
  
  export const getReferenceSchema = async (req, res) => {
    try {
      const markingSchema = await getReferenceSchemaService();
      res.json(markingSchema);
    } catch (err) {
      res.json(err.message);
    }
  };
  
  export const updateReferenceSchema = async (req, res) => {
    try {
      const markingSchema = await updateReferenceSchemaService(req.params.id, req.body);
      res.json("Successfully updated markingSchema");
    } catch (err) {
      res.json(err.message);
    }
  };
  
  export const deleteReferenceSchema = async (req, res) => {
    try {
      const markingSchema = await deleteReferenceSchemaService(req.params.id);
      res.json("Successfully deleted markingSchema");
    } catch (err) {
      res.json(err.message);
    }
  };