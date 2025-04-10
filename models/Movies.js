import mongoose from "mongoose";

// Define schema
const movieSchema = new mongoose.Schema({
    name:{type: String, required:true, trim:true },
    rating:{type:Number, required:true, min:1,max:10},
    money: {
        type:mongoose.Decimal128,
        required:true,
        validate: v=> v>=10,
    },
    genre: {type:Array},
    isActive: {type:Boolean},
    comments: [
        {value: {type: String}, published: {type:Date,default:Date.now}},
    ],
    year: {type:Date, default:Date.now()}
});


const movieModel =mongoose.model("Movie", movieSchema);


const insertManyDoc = async ()=> {
    try {

        const m1 = new movieModel({
            name: "Extraction 2",
            rating: 4,
            money: 4333,
            genre: ["action","adventure"],
            isActive: true,
            comments: [{value:"That was an awesome movie"}]
        });
        const m2 = new movieModel({
            name: "Coco",
            rating: 8,
            money: 23330,
            genre: ["animation","adventure"],
            isActive: true,
            comments: [{value:"brilliant and thought provoking movie. deserves an oscar"}]
        });
        const m3 = new movieModel({
            name: "Kungfu Panda",
            rating: 6,
            money: 10000,
            genre: ["action","adventure"],
            isActive: false,
            comments: [{value:"enjoyed watching it all the 2 hours"}]
        });
        const m4 = new movieModel({
            name: "Spider-Man",
            rating: 7,
            money: 340000,
            genre: ["action","Romance"],
            isActive: true,
            comments: [{value:"The best in the business"}]
        });
        const m5 = new movieModel({
            name: "Sopranos",
            rating: 8,
            money: 78000,
            genre: ["thriller","crime"],
            isActive: true,
            comments: [{value:"i don't think i have seen a movie this good in the past decade"}]
        });
        const m6 = new movieModel({
            name: "The Wire",
            rating: 8,
            money: 78000,
            genre: ["thriller","crime"],
            isActive: true,
            comments: [{value:"Good cinematography and storytelling i give it a solid 8/10."}]
        });

        const m7 = new movieModel({
            name: "World War-Z",
            rating: 8.9,
            money: 780000,
            genre: ["thriller","Horror"],
            isActive: true,
            comments: [{value:"i don't think i have seen a movie this good in the past decade. so scary"}],
            year: 2002
        });
        const m8 = new movieModel({
            name: "TAKEN-II",
            rating: 8.9,
            money: 780000,
            genre: ["thriller"],
            isActive: true,
            comments: [{value:"i don't think i have seen a movie this good in the past decade. so scary"}],
            year: 2004
        });
        const m9 = new movieModel({
            name: "The Punisher",
            rating: 8.4,
            money: 370000,
            genre: ["Action"],
            isActive: true,
            comments: [{value:"i don't think i have seen movie this good in the past decade. so scary"}],
            year: 2004
        });
        const m10 = new movieModel({
            name: "Expandables-II",
            rating: 8.3,
            money: 370000,
            genre: ["Action"],
            isActive: false,
            comments: [{value:"i don't think i have seen movie this good in the past decade. so scary"}],
            year: 2004
        });
        const result = await movieModel.insertMany([m1,m2,m3,m4,m5,m6,m7,m8,m9,m10])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

const deleteById = async ()=>{
    try {
    const movie = await movieModel.findOneAndUpdate({name:"World War-Z"},{isActive:false})
    console.log(movie)
    } catch(error){
        console.log(error)
    }
    
}

export {insertManyDoc,deleteById}