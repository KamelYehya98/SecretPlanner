export const createCostumeValidator = (req, res, next) => {

    const data = req.body;
    var validation = true;
    console.log("data in validator: ", data)
    validation = validation && data;
    validation = validation && data.name && data.name !== '';

    if(!validation){
        return res.status(601).json("Validation Errors");
    } else {
        next();
    }
}