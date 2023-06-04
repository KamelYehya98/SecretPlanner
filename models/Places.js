import mongoose from 'mongoose';

const placesSchema = new mongoose.Schema({
    city:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    created_date:{
        type: Date,
        default: Date.now()
    }
});

export class PlacesModel {
    constructor(data){
        this.city = data.city;
        this.country = data.country;
        this.description = data.description;
    }
}

const Places = mongoose.model('places', placesSchema);

export default Places;