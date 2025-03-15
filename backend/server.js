import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import { placeOrder } from "./controllers/orderController.js"
import orderRouter from "./routes/orderRoute.js"


//app config

const app =express()
const port= process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.use("/api/cart",cartRouter)

app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("api working")
})




app.listen(port,()=>{
    console.log(`Server started on port http://localhost:${port}`)
})

// mongodb+srv://Rishi938:Rishi938@cluster0.4wv7p.mongodb.net/?