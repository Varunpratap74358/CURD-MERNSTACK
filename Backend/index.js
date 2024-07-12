import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './routes/userroute.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("DB connected")


    app.listen(PORT,()=>{
        console.log(`Server is started on ${PORT}`)
    })
}).catch((err)=>{
    console.log("Error"+err)
})

app.use("/api", route)