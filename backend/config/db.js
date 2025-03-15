import mongoose from "mongoose";

 export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://Rishi938:Rishi938@cluster0.4wv7p.mongodb.net/food-del').then(()=>{
        console.log("db connected");
    })
}