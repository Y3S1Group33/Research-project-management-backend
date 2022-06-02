import { ResearchGroups } from "../models/researchGroupModel.js";

export const saveResearchGroupRepo = (data) =>
    ResearchGroups.create(data)
        .then((ResearchGroup) => {
            return Promise.resolve(ResearchGroup);
        })
        .catch(() => {
            throw new Error("Internal Server Error.", 500);
        });

export const getResearchGroupByIdRepo = (id) =>
    ResearchGroups.findById(id)
        .then((ResearchGroup) => {
            if (!ResearchGroup) {
                throw new Error("Research Group Not Found.", 404);
            }
            return Promise.resolve(ResearchGroup);
        });

export const getResearchGroupBySupervisorIDRepo = (id) =>
    ResearchGroups.findById({supervisor : id})
        .then((ResearchGroup) => {
            if (!ResearchGroup) {
                throw new Error("Research Group Not Found.", 404);
            }
            return Promise.resolve(ResearchGroup);
        });


export const getResearchGroupRepo = () =>
    ResearchGroups.find()
        .then((ResearchGroup) => {
            return Promise.resolve(ResearchGroup);
        })
        .catch(() => {
            throw new Error("Internal Server Error.", 500);
        });

export const updateResearchGroupRepo = (id, data) =>
    ResearchGroups.findByIdAndUpdate(id, data, {new: true})
        .then((ResearchGroup) => {
            if(!ResearchGroup) {
                throw new Error("Research Group Not Found.", 404);
            }
            return Promise.resolve(ResearchGroup);
        })
        .catch(() => {
            throw new Error("Internal server Error.", 500);
        });

export const deleteResearchGroupRepo = (id) =>
    ResearchGroups.findByIdAndDelete(id)
        .then((ResearchGroup) => {
            if(ResearchGroup) {
                throw new Error("Research Group Not Found.", 404);
            }
            return Promise.resolve(ResearchGroup);
        })
        .catch(() => {
            throw new Error("Internal Server Error", 500);
        });