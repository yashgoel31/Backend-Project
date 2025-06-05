import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1);
        // We can also use the throw method here instead of process, but node provides the process to exit the method depeneding on the number in the brackets.
    }
}

export default connectDB;