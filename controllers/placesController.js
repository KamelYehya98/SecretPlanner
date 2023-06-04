import { PlacesModel } from "../models/Places.js";
import * as placesHelper from "../helpers/placesHelper.js";

export const _createPlaceController = async (req, res) => {
    const data = req.body;
    try{
        const place = new PlacesModel(data);
        console.log("place model:", place)
        await placesHelper.createPlaceHelper(place);
        res.status(200).json("Added Place Successfully");
    }catch(err){
        res.status(500).json({ err });
    }
}

export const _editPlaceController = async (req, res) => {
    const data = req.body;
    const params = req.params;
    try{
        const place = new PlacesModel(data);
        console.log("place model:", place)
        await placesHelper.editPlaceHelper(params.id, place);
        res.status(200).json("Added Place Successfully");
    }catch(err){
        res.status(500).json({ err });
    }
}

export const _getPlacesController = async (req, res) => {
    try{
        const places = await placesHelper.getPlacesHelper();
        console.log("places in get controller: ", places);
        res.status(200).json(places);
    }catch(err){
        res.status(500).json({ err });
    }
}

export const _getPlaceByIdController = async (req, res) => {
    try{
        const params = req.params;
        console.log("params: ", params)
        console.log("id from params in get places by id : ", params.id);
        const place = await placesHelper.getPlaceByIdHelper(params.id);
        res.status(200).json(place);
    }catch(err){
        res.status(500).json({ err });
    }
}

export const _deletePlaceController = async (req, res) => {
    try{
        const params = req.params;
        console.log("params: ", params)
        console.log("id from params in get places by id : ", params.id);
        await placesHelper.deletePlaceHelper(params.id);
        res.status(200).json("deleted place successfully");
    }catch(err){
        res.status(500).json({ err });
    }
}