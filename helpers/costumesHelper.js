import Costumes from "../models/Costumes.js";

export const createCostumeHelper = async(data) => {

    console.log("data in create costume helper: ", data);
    
    return await Costumes.create({...data})
        .catch((err) => { console.log("error from create costume: ", err)});
}

export const getCostumesHelper = async() => {
    
    const costumes = await Costumes.find()
        .catch((err) => { console.log("error from get costumes: ", err)});
    
    return costumes;
}

export const deleteCostumesHelper = async(id) => {
    
    console.log("id in delete costume helper: ", id);
    await Costumes.findOneAndDelete(id)
        .catch((err) => { console.log("error from deleting costume with id: ", err)});
}