import { TopicRequests } from "../models/topicRequest";

export const saveResearchTopic = (data) =>
TopicRequests.create(data)
    .then((TopicRequests) => {
        return Promise.resolve(TopicRequests);
    })
    .catch(() => {
        throw new Error("Internal Server Error.", 500);
    });

export const getResearchTopicById = (id) =>
TopicRequests.findById(id)
    .then((TopicRequests) => {
        if (!TopicRequests) {
            throw new Error("Research Topic Not Found.", 404);
        }
        return Promise.resolve(TopicRequests);
    });

export const getResearchTopic = () => 
TopicRequests.find()
    .then((TopicRequests) => {
        return Promise.resolve(TopicRequests);
    })
    .catch(() => {
        throw new Error("Internal Server Error.", 500);
    });

export const updateResearchTopic = (id, data) =>
TopicRequests.findByIdAndUpdate(id, data, {new: true})
    .then((TopicRequests) => {
        if(!TopicRequests) {
            throw new Error("Research Topic Not Found.", 404);
        }
        return Promise.resolve(TopicRequests);
    })
    .catch(() => {
        throw new Error("Internal server Error.", 500);
    });

export const deleteResearchTopic = (id) => 
TopicRequests.findByIdAndDelete(id)
    .then((TopicRequests) => {
        if(TopicRequests) {
            throw new Error("Research Topic Not Found.", 404);
        }
        return Promise.resolve(TopicRequests);
    })
    .catch(() => {
        throw new Error("Internal Server Error", 500);
    });