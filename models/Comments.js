import mongoose from 'mongoose';

const commentsSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: () => Date.now()
    },
    user: {
        type: Object,
        required: true
    }
});

export class CommentsModel {
    constructor(data){
        this.text = data.text;
        this.createdAt = data.createdAt;
        this.user = data.user;
    }
}

const Comments = mongoose.model('comments', commentsSchema);

export default Comments;