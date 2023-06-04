import { UsersModel } from "../models/Users.js";
import * as authHelper from '../helpers/authHelper.js';

export const _loginUserController = async (req, res) => {

    const { username, password } = req.body;
    console.log("controller ", username, password)
    try {
        const token  = await authHelper.login({username, password});
        res.status(200).json(token); 
        console.log("logged in");
    } catch (error) {
        console.log("error: ", error.message);  
        res.status(400).json(error.message);
    }
};