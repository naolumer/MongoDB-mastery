import mongoose from "mongoose";

// Define schema
const movieSchema = new mongoose.Schema({
    name:{type: String, required:true, trim:true },
    rating:{type:Number, required:true, min:1,max:5},
    money: {
        type:mongoose.Decimal128,
        required:true,
        validate: v=> v>=10,
    },
    genre: {type:Array},
    isActive: {type:Boolean},
    commnets: [
        {value: {type: String}, published: {type:Date,default:Date.now}},
    ],
});

// Creating Model
const movieModel =mongoose.model("Movie", movieSchema);

export default movieModel
