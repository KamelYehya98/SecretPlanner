import Periods, { PeriodsListModel, PeriodsModel } from "../models/Periods.js";
import moment from "moment/moment.js";

export const createPeriodHelper = async(data) => {

    console.log("data in create period helper: ", data);
    
    return await Periods.create({...data})
        .catch((err) => { console.log("error from create period: ", err)});
}

export const getPeriodsHelper = async() => {
    
    const periods = await Periods.find()
        .sort({createdDate: 1})
        .catch((err) => {console.log("error from get periods: ", err)});

    const result = new PeriodsListModel();
    const len = periods.length - 2;
    
    periods.forEach((period, i) => {
        
        period.startDate = moment(period.startDate).format('DD MM yyyy');
        period.endDate = moment(period.endDate).format('DD MM yyyy');

        const periodModel = new PeriodsModel(period);
        if(i <= len){
            result.averageCycle += (new Date(periods[i+1].startDate).getTime() - new Date(periods[i].endDate).getTime()) / parseFloat(1000 * 3600 * 24);
        }
        result.averagePeriod += (new Date(period.endDate).getTime() - new Date(period.startDate).getTime()) / parseFloat(1000 * 3600 * 24);
        result.periods.push(periodModel);
    });

    result.averageCycle = Math.round(result.averageCycle / parseFloat(periods.length - 1));
    result.averagePeriod = Math.round(result.averagePeriod / parseFloat(periods.length));

    var date = new Date(periods[periods.length - 1].endDate);

    date.setDate(date.getDate() + result.averageCycle + 1);
    result.nextStartDate =  moment(date).format('DD MMM yyyy');

    date.setDate(date.getDate() + result.averagePeriod + 1)
    result.nextEndDate = moment(date).format('DD MMM yyyy');
    
    return result;
}