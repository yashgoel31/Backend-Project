// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})


connectDB()


// This code is also worl same in the ./db/index.js but for the simplicity of the code we make another file.
/*
import express from "express"
const app = express()

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on the port ${process.env.PORT}`);
        })

    }catch(error){
        console.log("ERROR:App will not able to talk to the database", error)
        throw error
    }
})()
*/
