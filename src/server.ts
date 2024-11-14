import app from './app.js'
import cors from 'cors'
import TodoRouter from './routes/todo.js'
import mongoose from 'mongoose'
import express from 'express'
import 'dotenv/config.js';

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use('/todo', TodoRouter)
const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONO_URL as string)
    } catch (e) {
        console.log(e)
    }
}
connectToDb()
app.listen(process.env.PORT, () => {
    console.log('server is running')
})