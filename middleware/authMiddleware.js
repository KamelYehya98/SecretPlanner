import { verify } from "jsonwebtoken";

export const checkUser = (req, res, next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log("token: ", token);
    if(token == null){
        return res.sendStatus(401).json({message: "not authorized"});
    }

    verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err){
            return res.sendStatus(403).json({message: "invalid token"});
        }
        console.log("user in token: ", user);
        req.user = user;
        next();
    });
}