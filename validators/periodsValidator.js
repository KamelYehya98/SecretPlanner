export const createPeriodsValidator = (req, res, next) => {

    const data = req.body;
    var validation = true;
    
    validation = validation && data;
    validation = validation && data.startDate && data.endDate;
    validation = validation && new Date(data.startDate) <= new Date(data.endDate);

    if(!validation){
        return res.status(601).json("Validation Errors");
    } else {
        next();
    }
}