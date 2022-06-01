import {
    saveMarkingSchemaService,
    getMarkingSchemaByIdService,
    getMarkingSchemaService,
    updateMarkingSchemaService,
    deleteMarkingSchemaService,
  } from "../services/markingSchema.js";
  
  export const saveMarkingSchema = async (req, res) => {
    try {
      const markingSchema = await saveMarkingSchemaService(req.body);
      res.send("Successfully created markingSchema");
    } catch (err) {
      res.send(err.message);
    }
  };
  
  export const getMarkingSchemaById = async (req, res) => {
    try {
      const markingSchema = await getMarkingSchemaByIdService(req.params.id);
      res.json(markingSchema);
    } catch (err) {
      res.json(err.message);
    }
  };
  
  export const getMarkingSchema = async (req, res) => {
    try {
      const markingSchema = await getMarkingSchemaService();
      res.json(markingSchema);
    } catch (err) {
      res.json(err.message);
    }
  };
  
  export const updateMarkingSchema = async (req, res) => {
    try {
      const markingSchema = await updateMarkingSchemaService(req.params.id, req.body);
      res.json("Successfully updated markingSchema");
    } catch (err) {
      res.json(err.message);
    }
  };
  
  export const deleteMarkingSchema = async (req, res) => {
    try {
      const markingSchema = await deleteMarkingSchemaService(req.params.id);
      res.json("Successfully deleted markingSchema");
    } catch (err) {
      res.json(err.message);
    }
  };