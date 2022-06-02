import { ResearchGroup } from "../models/researchGroupModel.js";

export const saveResearchGroupRepo = (data) =>
    ResearchGroup.create(data)
        .then((ResearchGroup) => {
            return Promise.resolve(ResearchGroup);
        })
        .catch(() => {
            throw new Error("Internal Server Error.", 500);
        });

export const getResearchGroupByIdRepo = (id) =>
    ResearchGroup.findById(id)
        .then((ResearchGroup) => {
            if (!ResearchGroup) {
                throw new Error("Research Group Not Found.", 404);
            }
            return Promise.resolve(ResearchGroup);
        });


export const getResearchGroupRepo = () =>
    ResearchGroup.find()
        .then((ResearchGroup) => {
            return Promise.resolve(ResearchGroup);
        })
        .catch(() => {
            throw new Error("Internal Server Error.", 500);
        });

export const updateResearchGroupRepo = (id, data) =>
    ResearchGroup.findByIdAndUpdate(id, data, {new: true})
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
    ResearchGroup.findByIdAndDelete(id)
        .then((ResearchGroup) => {
            if(ResearchGroup) {
                throw new Error("Research Group Not Found.", 404);
            }
            return Promise.resolve(ResearchGroup);
        })
        .catch(() => {
            throw new Error("Internal Server Error", 500);
        });