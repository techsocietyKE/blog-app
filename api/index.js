import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
const app = express();

dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to database')
})
.catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
app.use('/api/user',userRoutes)