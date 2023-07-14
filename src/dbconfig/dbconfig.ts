import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log("Successfully Connected to MongoDB");
        })
        connection.on('error',(err)=>{
            console.log(`Error establishing Connection with mongoDB: ${err}`);
            process.exit()
        })
    } catch (error) {
        console.log(`Something Went Wrong: ${error}`);
        
    }
    
}