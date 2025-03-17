import "dotenv/config"; 
import express from "express";
import cors from "cors"
import getSummary from "./controller/getSummary.js";
const app=express()
const port=3000
app.use(cors())
app.use(
    express.json()
)


app.get("/",(req,res)=>{
    res.json({
        "message":"server is running"
    })

})
app.post("/summary",getSummary)
app.listen(port,()=>{
    console.log("server is listening on server",port)
})