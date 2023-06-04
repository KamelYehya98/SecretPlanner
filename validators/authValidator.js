export const _loginUserValidator = async(req, res, next) => {

    const {username, password} = req.body;

    console.log(username, password);
    if(!username || !password){
        return res.status(400).json({message: 'All fields are required'});
    }

    next();
}