import { CostumesModel } from "../models/Costumes.js";
import * as costumesHelper from '../helpers/costumesHelper.js';

export const _createCostumeController = async (req, res) => {
    const data = req.body;
    try{
        const costume = new CostumesModel(data);
        console.log("Costume model:", costume)
        const result = await costumesHelper.createCostumeHelper(costume);
        res.status(200).json(result);
    }catch(err){
        res.status(500).json({ err });
    }
}

export const _getCostumesController = async (req, res) => {
    try{
        const costumes = await costumesHelper.getCostumesHelper();
        console.log("costumes in get controller: ", costumes);
        res.status(200).json(costumes);
    }catch(err){
        res.status(500).json({ err });
    }
}

export const _deleteCostumeController = async (req, res) => {
    try{
        const params = req.params;
        console.log("params: ", params)
        console.log("id from params in get costumes by id : ", params.id);
        await costumesHelper.deleteCostumesHelper(params.id);
        res.status(200).json("deleted costume successfully");
    }catch(err){
        res.status(500).json({ err });
    }
}