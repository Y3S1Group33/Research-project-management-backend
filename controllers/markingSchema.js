import {
    saveMarkingSchemasService,
    getMarkingSchemasByIdService,
    getMarkingSchemasService,
    updateMarkingSchemasService,
    deleteMarkingSchemasService,
    } from "../services/markingSchema.js";
    
    export const saveMarkingSchemas = async (req, res) => {
      try {
        const markingSchema = await saveMarkingSchemasService(req.body);
        res.send("Successfully created markingSchema");
      } catch (err) {
        res.send(err.message);
      }
    };
    
    export const getMarkingSchemasById = async (req, res) => {
      try {
        const markingSchema = await getMarkingSchemasByIdService(req.params.id);
        res.json(markingSchema);
      } catch (err) {
        res.json(err.message);
      }
    };
    
    export const getMarkingSchemas = async (req, res) => {
      try {
        const markingSchema = await getMarkingSchemasService();
        res.json(markingSchema);
      } catch (err) {
        res.json(err.message);
      }
    };
    
    export const updateMarkingSchemas = async (req, res) => {
      try {
        const markingSchema = await updateMarkingSchemasService(req.params.id, req.body);
        res.json("Successfully updated markingSchema");
      } catch (err) {
        res.json(err.message);
      }
    };
    
    export const deleteMarkingSchemas = async (req, res) => {
      try {
        const markingSchema = await deleteMarkingSchemasService(req.params.id);
        res.json("Successfully deleted markingSchema");
      } catch (err) {
        res.json(err.message);
      }
    };