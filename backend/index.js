
const express=require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const mongoose=require("mongoose")
require("dotenv").config()
const {authRouter}=require("./routes/auth.routes")

const app=express()

app.use(express.json())
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
)
app.use(cookieParser())

app.use("/api/v1/auth",authRouter)

const PORT=process.env.PORT
const MONGODB_URI=process.env.MONGODB_URI

app.listen(PORT,()=>console.log("server is running on port",PORT))
mongoose.connect(MONGODB_URI)
.then(()=>console.log("Sucessfully Connected to db"))
.catch((err)=>console.log("Failed to connect to db",err.message))
