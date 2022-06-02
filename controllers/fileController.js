import {file} from "../models/fileUploadModel.js";


export const createFileController = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const postData = await new file({
            imageUrl: req.body.imageUrl,
        });
        const saveData = await postData.save();
        res.status(200).json(saveData);
    } catch (err) {
        res.status(400).json(err.message);
    }
};