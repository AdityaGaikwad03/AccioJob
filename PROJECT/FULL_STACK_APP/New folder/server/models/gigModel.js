import mongoose, { Schema } from "mongoose"
import { stringify } from "qs";

const {scheme} = mongoose;

const gigSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    title:{
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    totalStars : {
        type : Number,
        default : 0
    },
    starNumber: {
        type : Number,
        default : 0
    },
    cat : {
        type : string,
        required: true
    },
     price:{
        type: Number,
        required: true
    },
    cover:{
        type: String,
        required: true
    },
    
    images:{
        type: [String],
        required: false
    },
    
    shortTitle:{
        type: String,
        required: true
    },
    
    deliveryTime:{
        type: Number,
        required: true
    },
    
    shortDesc:{
        type: String,
        required: true
    },
    
    revisionNumber:{
        type: Number,
        required: false
    },
    features:{
        type: [String],
        required: false
    },
    sales:{
        type: Number,
        default : 0
    }   
},{
    timestamps: true
});

export default mongoose.model('Gig', gigSchema)