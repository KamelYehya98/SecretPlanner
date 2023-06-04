import { PeriodsModel } from "../models/Periods.js";
import * as periodsHelper from "../helpers/periodsHelper.js";

export const _createPeriodController = async (req, res) => {
    const data = req.body;
    try{
        const period = new PeriodsModel(data);
        console.log("periods model:", period)
        const result = await periodsHelper.createPeriodHelper(period);
        res.status(200).json(result);
    }catch(err){
        res.status(500).json({ err });
    }
}

export const _getPeriodsController = async (req, res) => {
    try{
        const periods = await periodsHelper.getPeriodsHelper();
        console.log("periods in get controller: ", periods);
        res.status(200).json(periods);
    }catch(err){
        res.status(500).json({ err });
    }
}