import Comments from "../models/Comments.js";

export const createCommentHelper = async(data) => {

    console.log("data in create comment helper: ", data);
    
    return await Comments.create({...data})
        .catch((err) => { console.log("error from create comment: ", err)});
}

export const editCommentHelper = async(id, data) => {

    console.log("data in edit comment helper: ", data);
    
    return await Comments.findByIdAndUpdate(id, {...data})
        .catch((err) => { console.log("error from edit comment: ", err)});
}

export const getCommentsHelper = async() => {
    
    await Comments.find().sort({createdAt: -1}).execFind(function(err,docs){
        if(err){
            console.log("error getting comments: ", err);
        }
        return docs;
    });
}

export const deleteCommentHelper = async(id) => {
    
    console.log("id in delete comment helper: ", id);
    await Comments.findOneAndDelete(id)
        .catch((err) => { console.log("error from deleting comments with id: ", err)});
}