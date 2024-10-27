const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv").config()

const app=express()
const PORT=5000;


app.get("/",(req,res)=>{
    res.status(200).json({message:"Hello"})
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connection to database was successful")
    app.listen(PORT,()=>{
        console.log(`Server listening to port ${PORT}...`)
    })
}).catch((error)=>{
    console.log(error)
})
