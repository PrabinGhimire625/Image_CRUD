import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import imageRoute from "./routes/ImageRoute.js"
dotenv.config();
connectDB(); //to connect the mongodb
connectCloudinary(); //to connect the cloudinary
const app=express();
const port=process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded()); 
app.use(cors());

//import routes
app.use("/api/image",imageRoute);


app.listen(port,()=>{
    console.log(`Server is running on the PORT ${port}`)
})

