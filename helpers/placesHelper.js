import Places from "../models/Places.js";

export const createPlaceHelper = async(data) => {

    console.log("data in create place helper: ", data);
    
    return await Places.create({...data})
        .catch((err) => { console.log("error from create place: ", err)});
}

export const editPlaceHelper = async(id, data) => {

    console.log("data in create place helper: ", data);
    
    return await Places.findByIdAndUpdate(id, {...data})
        .catch((err) => { console.log("error from create place: ", err)});
}

export const getPlacesHelper = async() => {
    
    const places = await Places.find()
        .catch((err) => { console.log("error from get places: ", err)});
    
    return places;
}

export const getPlaceByIdHelper = async(id) => {
    
    console.log("id in get place by id helper: ", id);
    const place = await Places.findById(id)
        .catch((err) => { console.log("error from get place by id: ", err)});
    
    return place;
}

export const deletePlaceHelper = async(id) => {
    
    console.log("id in delete place helper: ", id);
    await Places.findOneAndDelete(id)
        .catch((err) => { console.log("error from deleting place with id: ", err)});
}