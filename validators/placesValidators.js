export const createPlaceValidator = (req, res, next) => {

    const data = req.body;
    var validation = true;
    
    validation = validation && data;
    validation = validation && data.city && data.city !== '';
    validation = validation && data.country && data.country !== '';

    if(!validation){
        return res.status(601).json("Validation Errors");
    } else {
        next();
    }
}