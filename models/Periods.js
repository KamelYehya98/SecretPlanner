import mongoose from 'mongoose';

const periodsSchema = new mongoose.Schema({
    startDate:{
        type: String,
        required: true
    },
    endDate:{
        type: String,
        required: true
    },
    createdDate:{
        type: Date,
        default: Date.now()
    }
});

export class PeriodsModel {
    constructor(data){
        this.startDate = data.startDate;
        this.endDate = data.endDate;
    }
}

export class PeriodsListModel {
    constructor() {
        this.periods = [];
        this.averageCycle = 0;
        this.averagePeriod = 0
        this.nextStartDate = undefined;
        this.nextEndDate = undefined;
    }
}

const Periods = mongoose.model('periods', periodsSchema);

export default Periods;