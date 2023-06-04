import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    created_date:{
        type: Date,
        default: Date.now()
    }
});

export class UsersModel {
    constructor(data){
        this.username = data.username;
        this.password = data.password;
        this.created_date = data.created_date;
    }
}

const Users = mongoose.model('users', usersSchema);

export default Users;