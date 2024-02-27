import dotenv from 'dotenv'
import express from 'express'
import ConnectDB from './db/Database.js'
import router from './routes/todo.route.js'

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())

dotenv.config()

app.use("/", router)

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
    ConnectDB()
})