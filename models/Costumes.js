import mongoose from 'mongoose';

const costumesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    created_date:{
        type: Date,
        default: Date.now()
    }
});

export class CostumesModel {
    constructor(data){
        this.name = data.name;
    }
}

const Costumes = mongoose.model('constumes', costumesSchema);

export default Costumes;