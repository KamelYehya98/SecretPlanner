import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import pkg from 'bcryptjs';
import Users from '../models/Users.js';

const { compare } = pkg;
dotenv.config();

const createToken = ({user, secret}) =>{
    console.log("reached createToken");
    const token = jwt.sign({...user}, secret);
    return token;
}

export const login = async ({username, password}) => {

    const user = await Users.findOne({ username: username });
    console.log("user: ", user);
    if(user != null){
       const auth = await compare(password, user.password);
       if(auth){
            const token = createToken({user: {id: user._id, username: user.username}, secret: process.env.ACCESS_TOKEN_SECRET});
            return {token};
       }
    }
    throw new Error(JSON.stringify({message: "invalid credentials"}));
}