import { CommentsModel } from "../models/Comments.js";
import * as commentsHelper from "../helpers/commentsHelper.js";

export const _createCommentController = async (req, res) => {
    const data = req.body;
    try{
        data.user = {
            _id: req.user.id,
            name: req.user.username
        };
        console.log("user id: ", data.user);
        const comment = new CommentsModel(data);
        console.log("comment model:", comment)
        await commentsHelper.createCommentHelper(comment);
        res.status(200).json("Added comment Successfully");
    }catch(err){
        res.status(500).json({ err });
    }
}

export const _editCommentController = async (req, res) => {
    const data = req.body;
    const params = req.params;
    try{
        data.user = {
            _id: req.user.id,
            name: req.user.username
        };
        const comment = new CommentsModel(data);
        console.log("comment model:", comment)
        await commentsHelper.editCommentHelper(params.id, place);
        res.status(200).json("Added Comment Successfully");
    }catch(err){
        res.status(500).json({ err });
    }
}

export const _getCommentsController = async (req, res) => {
    try{
        const comments = await commentsHelper.getCommentsHelper();
        console.log("comments in get controller: ", comments);
        res.status(200).json(comments);
    }catch(err){
        res.status(500).json({ err });
    }
}

export const _deleteCommentController = async (req, res) => {
    try{
        const params = req.params;
        console.log("params: ", params)
        console.log("id from params in get comments by id : ", params.id);
        await commentsHelper.deleteCommentHelper(params.id);
        res.status(200).json("deleted comment successfully");
    }catch(err){
        res.status(500).json({ err });
    }
}