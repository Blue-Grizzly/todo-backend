import mongoose from "mongoose";
import "dotenv/config";

export default ()=>{
    if(!process.env.MONGO_URI){
        throw new Error( "no MONGO_URI string" )
    }

        mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Connected to MongoDB")).catch((err) => console.log(err));
}